import { WebApiService } from '../../plugins/webApiService'
import { Events } from '../../plugins/events'
import EventToAsyncDecorator from '../../plugins/eventToAsyncDecorator'
import CustomizationGetRequest from '../../Evoshare/ICustomization/Models/Request/CustomizationGetRequest';
import GetParticipantPartnerRequest from '../../Evoshare/ICustomization/Models/Request/GetParticipantPartnerRequest';
import WsResponseModel from '../../SchemaBuilderServer/Models/WsResponseModel';
import ParticipantCustomizationResponse from '../../Evoshare/ICustomization/Models/Response/ParticipantCustomizationResponse';
import ResellerCustomizationModel from '../../Evoshare/ICustomization/Models/Response/ResellerCustomizationModel';
import GetParticipantPartnerResponse from '../../Evoshare/ICustomization/Models/Response/GetParticipantPartnerResponse';
import ChargeEmployeesRegistrationFeeSetting from '../../Evoshare/DomainModel/ChargeEmployeesRegistrationFeeSetting';

export default class CustomizationService {
	webApiService: WebApiService;
	GetParticipantCustomizationEvent = new Events<WsResponseModel<ParticipantCustomizationResponse>>();
	GetEmployerCustomizationByAliasEvent = new Events<WsResponseModel<ResellerCustomizationModel>>();
	GetParticipantPartnerEvent = new Events<WsResponseModel<GetParticipantPartnerResponse>>();
	GetChargeEmployeesRegistrationFeeByEmployerEvent = new Events<WsResponseModel<ChargeEmployeesRegistrationFeeSetting>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('CustomizationService', 'GetParticipantCustomization', (res: WsResponseModel<ParticipantCustomizationResponse>) => {
			self.GetParticipantCustomizationEvent.trigger(res);
		});
		webApiService.on('CustomizationService', 'GetEmployerCustomizationByAlias', (res: WsResponseModel<ResellerCustomizationModel>) => {
			self.GetEmployerCustomizationByAliasEvent.trigger(res);
		});
		webApiService.on('CustomizationService', 'GetParticipantPartner', (res: WsResponseModel<GetParticipantPartnerResponse>) => {
			self.GetParticipantPartnerEvent.trigger(res);
		});
		webApiService.on('CustomizationService', 'GetChargeEmployeesRegistrationFeeByEmployer', (res: WsResponseModel<ChargeEmployeesRegistrationFeeSetting>) => {
			self.GetChargeEmployeesRegistrationFeeByEmployerEvent.trigger(res);
		});
	}
	GetParticipantCustomization() { 	
        this.webApiService.send('CustomizationService', 'GetParticipantCustomization' );
    }
	GetEmployerCustomizationByAlias(request: CustomizationGetRequest = null) { 	
        this.webApiService.send('CustomizationService', 'GetEmployerCustomizationByAlias' , request);
    }
	GetParticipantPartner(request: GetParticipantPartnerRequest = null) { 	
        this.webApiService.send('CustomizationService', 'GetParticipantPartner' , request);
    }
	GetChargeEmployeesRegistrationFeeByEmployer(request: CustomizationGetRequest = null) { 	
        this.webApiService.send('CustomizationService', 'GetChargeEmployeesRegistrationFeeByEmployer' , request);
    }
	 // async methods
	async getParticipantCustomizationAsync(): Promise<ParticipantCustomizationResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetParticipantCustomization.bind(this), this.GetParticipantCustomizationEvent)();
	}
	async getEmployerCustomizationByAliasAsync(request: CustomizationGetRequest = null): Promise<ResellerCustomizationModel> {
		return EventToAsyncDecorator.getInstance().bind(this.GetEmployerCustomizationByAlias.bind(this), this.GetEmployerCustomizationByAliasEvent)(request);
	}
	async getParticipantPartnerAsync(request: GetParticipantPartnerRequest = null): Promise<GetParticipantPartnerResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetParticipantPartner.bind(this), this.GetParticipantPartnerEvent)(request);
	}
	async getChargeEmployeesRegistrationFeeByEmployerAsync(request: CustomizationGetRequest = null): Promise<ChargeEmployeesRegistrationFeeSetting> {
		return EventToAsyncDecorator.getInstance().bind(this.GetChargeEmployeesRegistrationFeeByEmployer.bind(this), this.GetChargeEmployeesRegistrationFeeByEmployerEvent)(request);
	}
}