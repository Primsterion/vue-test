import { WebApiService } from '../../plugins/webApiService'
import { Events } from '../../plugins/events'
import EventToAsyncDecorator from '../../plugins/eventToAsyncDecorator'
import AutocompleteRequest from '../../Evoshare/Utilites/Models/AutocompleteRequest';
import AddTransactionRequest from '../../Evoshare/IManualTransaction/Models/AddTransactionRequest';
import WsResponseModel from '../../SchemaBuilderServer/Models/WsResponseModel';
import EvosharePaginationResponse from '../../Evoshare/Utilites/Extension/Models/EvosharePaginationResponse';
import AutocompleteResponse from '../../Evoshare/Utilites/Models/AutocompleteResponse';

export default class ManualTransactionService {
	webApiService: WebApiService;
	SellerAutocompliteEvent = new Events<WsResponseModel<EvosharePaginationResponse<AutocompleteResponse<String>>>>();
	ParticipantAutocompliteEvent = new Events<WsResponseModel<EvosharePaginationResponse<AutocompleteResponse<String>>>>();
	StoreNameAutocompliteEvent = new Events<WsResponseModel<EvosharePaginationResponse<AutocompleteResponse<number>>>>();
	AddTransactionEvent = new Events<WsResponseModel<Boolean>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('ManualTransactionService', 'SellerAutocomplite', (res: WsResponseModel<EvosharePaginationResponse<AutocompleteResponse<String>>>) => {
			self.SellerAutocompliteEvent.trigger(res);
		});
		webApiService.on('ManualTransactionService', 'ParticipantAutocomplite', (res: WsResponseModel<EvosharePaginationResponse<AutocompleteResponse<String>>>) => {
			self.ParticipantAutocompliteEvent.trigger(res);
		});
		webApiService.on('ManualTransactionService', 'StoreNameAutocomplite', (res: WsResponseModel<EvosharePaginationResponse<AutocompleteResponse<number>>>) => {
			self.StoreNameAutocompliteEvent.trigger(res);
		});
		webApiService.on('ManualTransactionService', 'AddTransaction', (res: WsResponseModel<Boolean>) => {
			self.AddTransactionEvent.trigger(res);
		});
	}
	SellerAutocomplite(request: AutocompleteRequest = null) { 	
        this.webApiService.send('ManualTransactionService', 'SellerAutocomplite' , request);
    }
	ParticipantAutocomplite(request: AutocompleteRequest = null) { 	
        this.webApiService.send('ManualTransactionService', 'ParticipantAutocomplite' , request);
    }
	StoreNameAutocomplite(request: AutocompleteRequest = null) { 	
        this.webApiService.send('ManualTransactionService', 'StoreNameAutocomplite' , request);
    }
	AddTransaction(request: AddTransactionRequest = null) { 	
        this.webApiService.send('ManualTransactionService', 'AddTransaction' , request);
    }
	 // async methods
	async sellerAutocompliteAsync(request: AutocompleteRequest = null): Promise<EvosharePaginationResponse<AutocompleteResponse<String>>> {
		return EventToAsyncDecorator.getInstance().bind(this.SellerAutocomplite.bind(this), this.SellerAutocompliteEvent)(request);
	}
	async participantAutocompliteAsync(request: AutocompleteRequest = null): Promise<EvosharePaginationResponse<AutocompleteResponse<String>>> {
		return EventToAsyncDecorator.getInstance().bind(this.ParticipantAutocomplite.bind(this), this.ParticipantAutocompliteEvent)(request);
	}
	async storeNameAutocompliteAsync(request: AutocompleteRequest = null): Promise<EvosharePaginationResponse<AutocompleteResponse<number>>> {
		return EventToAsyncDecorator.getInstance().bind(this.StoreNameAutocomplite.bind(this), this.StoreNameAutocompliteEvent)(request);
	}
	async addTransactionAsync(request: AddTransactionRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.AddTransaction.bind(this), this.AddTransactionEvent)(request);
	}
}