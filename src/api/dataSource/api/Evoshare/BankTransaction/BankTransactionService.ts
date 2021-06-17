import { WebApiService } from '../../plugins/webApiService'
import { Events } from '../../plugins/events'
import EventToAsyncDecorator from '../../plugins/eventToAsyncDecorator'
import BankTransactionSearchRequest from '../../Evoshare/IBankTransaction/Models/BankTransactionSearchRequest';
import TransactionTraceRequest from '../../Evoshare/IBankTransaction/Models/TransactionTraceRequest';
import SendRefundRequest from '../../Evoshare/IBankTransaction/Models/SendRefundRequest';
import WsResponseModel from '../../SchemaBuilderServer/Models/WsResponseModel';
import EvosharePaginationResponse from '../../Evoshare/Utilites/Extension/Models/EvosharePaginationResponse';
import BankTransactionItems from '../../Evoshare/IBankTransaction/Models/BankTransactionItems';
import JpMorganTransaction from '../../Evoshare/IJpMorgan/Models/Response/JpMorganTransaction';
import LowPaymentsResponse from '../../Evoshare/IJpMorgan/Models/Response/LowPaymentsResponse';

export default class BankTransactionService {
	webApiService: WebApiService;
	SearchEvent = new Events<WsResponseModel<EvosharePaginationResponse<BankTransactionItems>>>();
	TransactionTraceEvent = new Events<WsResponseModel<Array<JpMorganTransaction>>>();
	SendRefundEvent = new Events<WsResponseModel<LowPaymentsResponse>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('BankTransactionService', 'Search', (res: WsResponseModel<EvosharePaginationResponse<BankTransactionItems>>) => {
			self.SearchEvent.trigger(res);
		});
		webApiService.on('BankTransactionService', 'TransactionTrace', (res: WsResponseModel<Array<JpMorganTransaction>>) => {
			self.TransactionTraceEvent.trigger(res);
		});
		webApiService.on('BankTransactionService', 'SendRefund', (res: WsResponseModel<LowPaymentsResponse>) => {
			self.SendRefundEvent.trigger(res);
		});
	}
	Search(request: BankTransactionSearchRequest = null) { 	
        this.webApiService.send('BankTransactionService', 'Search' , request);
    }
	TransactionTrace(request: TransactionTraceRequest = null) { 	
        this.webApiService.send('BankTransactionService', 'TransactionTrace' , request);
    }
	SendRefund(request: SendRefundRequest = null) { 	
        this.webApiService.send('BankTransactionService', 'SendRefund' , request);
    }
	 // async methods
	async searchAsync(request: BankTransactionSearchRequest = null): Promise<EvosharePaginationResponse<BankTransactionItems>> {
		return EventToAsyncDecorator.getInstance().bind(this.Search.bind(this), this.SearchEvent)(request);
	}
	async transactionTraceAsync(request: TransactionTraceRequest = null): Promise<Array<JpMorganTransaction>> {
		return EventToAsyncDecorator.getInstance().bind(this.TransactionTrace.bind(this), this.TransactionTraceEvent)(request);
	}
	async sendRefundAsync(request: SendRefundRequest = null): Promise<LowPaymentsResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.SendRefund.bind(this), this.SendRefundEvent)(request);
	}
}