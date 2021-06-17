import { WebApiService } from '../../plugins/webApiService'
import { Events } from '../../plugins/events'
import EventToAsyncDecorator from '../../plugins/eventToAsyncDecorator'
import ConfirmCodeRequest from '../../Evoshare/ITwillioService/Models/Request/ConfirmCodeRequest';
import VerifyPhoneRequest from '../../Evoshare/ITwillioService/Models/Request/VerifyPhoneRequest';
import SendSmsRequest from '../../Evoshare/ITwillioService/Models/Request/SendSmsRequest';
import WsResponseModel from '../../SchemaBuilderServer/Models/WsResponseModel';
import VerifyPhoneResponse from '../../Evoshare/ITwillioService/Models/Response/VerifyPhoneResponse';

export default class TwillioService {
	webApiService: WebApiService;
	RefundConfirmEvent = new Events<WsResponseModel<Boolean>>();
	ConfirmCodeEvent = new Events<WsResponseModel<Boolean>>();
	VerifyPhoneEvent = new Events<WsResponseModel<VerifyPhoneResponse>>();
	VerifyRefundEvent = new Events<WsResponseModel<VerifyPhoneResponse>>();
	SendSmsEvent = new Events<WsResponseModel<String>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('TwillioService', 'RefundConfirm', (res: WsResponseModel<Boolean>) => {
			self.RefundConfirmEvent.trigger(res);
		});
		webApiService.on('TwillioService', 'ConfirmCode', (res: WsResponseModel<Boolean>) => {
			self.ConfirmCodeEvent.trigger(res);
		});
		webApiService.on('TwillioService', 'VerifyPhone', (res: WsResponseModel<VerifyPhoneResponse>) => {
			self.VerifyPhoneEvent.trigger(res);
		});
		webApiService.on('TwillioService', 'VerifyRefund', (res: WsResponseModel<VerifyPhoneResponse>) => {
			self.VerifyRefundEvent.trigger(res);
		});
		webApiService.on('TwillioService', 'SendSms', (res: WsResponseModel<String>) => {
			self.SendSmsEvent.trigger(res);
		});
	}
	RefundConfirm(request: ConfirmCodeRequest = null) { 	
        this.webApiService.send('TwillioService', 'RefundConfirm' , request);
    }
	ConfirmCode(request: ConfirmCodeRequest = null) { 	
        this.webApiService.send('TwillioService', 'ConfirmCode' , request);
    }
	VerifyPhone(request: VerifyPhoneRequest = null) { 	
        this.webApiService.send('TwillioService', 'VerifyPhone' , request);
    }
	VerifyRefund(request: VerifyPhoneRequest = null) { 	
        this.webApiService.send('TwillioService', 'VerifyRefund' , request);
    }
	SendSms(request: SendSmsRequest = null) { 	
        this.webApiService.send('TwillioService', 'SendSms' , request);
    }
	 // async methods
	async refundConfirmAsync(request: ConfirmCodeRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.RefundConfirm.bind(this), this.RefundConfirmEvent)(request);
	}
	async confirmCodeAsync(request: ConfirmCodeRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ConfirmCode.bind(this), this.ConfirmCodeEvent)(request);
	}
	async verifyPhoneAsync(request: VerifyPhoneRequest = null): Promise<VerifyPhoneResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.VerifyPhone.bind(this), this.VerifyPhoneEvent)(request);
	}
	async verifyRefundAsync(request: VerifyPhoneRequest = null): Promise<VerifyPhoneResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.VerifyRefund.bind(this), this.VerifyRefundEvent)(request);
	}
	async sendSmsAsync(request: SendSmsRequest = null): Promise<String> {
		return EventToAsyncDecorator.getInstance().bind(this.SendSms.bind(this), this.SendSmsEvent)(request);
	}
}