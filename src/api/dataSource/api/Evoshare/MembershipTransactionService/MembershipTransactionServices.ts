import { WebApiService } from '../../plugins/webApiService'
import { Events } from '../../plugins/events'
import EventToAsyncDecorator from '../../plugins/eventToAsyncDecorator'
import MembershipFeeRequest from '../../Evoshare/IMembershipTransactionServices/Models/MembershipFeeRequest';
import ChargeBeeLogs from '../../Evoshare/IMembershipTransactionServices/Models/ChargeBeeLogs';
import WsResponseModel from '../../SchemaBuilderServer/Models/WsResponseModel';
import MembershipSubscriptionType from '../../Evoshare/IMembershipTransactionServices/Enums/MembershipSubscriptionType';
import MembershipResponse from '../../Evoshare/IMembershipTransactionServices/Models/MembershipResponse';

export default class MembershipTransactionServices {
	webApiService: WebApiService;
	MembershipFeePayEvent = new Events<WsResponseModel<MembershipSubscriptionType>>();
	DontTerminateEvent = new Events<WsResponseModel<Boolean>>();
	MembershipFeeCheckEvent = new Events<WsResponseModel<Boolean>>();
	MembershipGetLastEvent = new Events<WsResponseModel<MembershipResponse>>();
	ChargebeeWriteStepEvent = new Events<WsResponseModel<Task>>();
	ChargebeeLastStepEvent = new Events<WsResponseModel<ChargeBeeLogs>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('MembershipTransactionServices', 'MembershipFeePay', (res: WsResponseModel<MembershipSubscriptionType>) => {
			self.MembershipFeePayEvent.trigger(res);
		});
		webApiService.on('MembershipTransactionServices', 'DontTerminate', (res: WsResponseModel<Boolean>) => {
			self.DontTerminateEvent.trigger(res);
		});
		webApiService.on('MembershipTransactionServices', 'MembershipFeeCheck', (res: WsResponseModel<Boolean>) => {
			self.MembershipFeeCheckEvent.trigger(res);
		});
		webApiService.on('MembershipTransactionServices', 'MembershipGetLast', (res: WsResponseModel<MembershipResponse>) => {
			self.MembershipGetLastEvent.trigger(res);
		});
		webApiService.on('MembershipTransactionServices', 'ChargebeeWriteStep', (res: WsResponseModel<Task>) => {
			self.ChargebeeWriteStepEvent.trigger(res);
		});
		webApiService.on('MembershipTransactionServices', 'ChargebeeLastStep', (res: WsResponseModel<ChargeBeeLogs>) => {
			self.ChargebeeLastStepEvent.trigger(res);
		});
	}
	MembershipFeePay(request: MembershipFeeRequest = null) { 	
        this.webApiService.send('MembershipTransactionServices', 'MembershipFeePay' , request);
    }
	DontTerminate() { 	
        this.webApiService.send('MembershipTransactionServices', 'DontTerminate' );
    }
	MembershipFeeCheck() { 	
        this.webApiService.send('MembershipTransactionServices', 'MembershipFeeCheck' );
    }
	MembershipGetLast() { 	
        this.webApiService.send('MembershipTransactionServices', 'MembershipGetLast' );
    }
	ChargebeeWriteStep(reqest: ChargeBeeLogs = null) { 	
        this.webApiService.send('MembershipTransactionServices', 'ChargebeeWriteStep' , reqest);
    }
	ChargebeeLastStep() { 	
        this.webApiService.send('MembershipTransactionServices', 'ChargebeeLastStep' );
    }
	 // async methods
	async membershipFeePayAsync(request: MembershipFeeRequest = null): Promise<MembershipSubscriptionType> {
		return EventToAsyncDecorator.getInstance().bind(this.MembershipFeePay.bind(this), this.MembershipFeePayEvent)(request);
	}
	async dontTerminateAsync(): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.DontTerminate.bind(this), this.DontTerminateEvent)();
	}
	async membershipFeeCheckAsync(): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.MembershipFeeCheck.bind(this), this.MembershipFeeCheckEvent)();
	}
	async membershipGetLastAsync(): Promise<MembershipResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.MembershipGetLast.bind(this), this.MembershipGetLastEvent)();
	}
	async chargebeeWriteStepAsync(reqest: ChargeBeeLogs = null): Promise<Task> {
		return EventToAsyncDecorator.getInstance().bind(this.ChargebeeWriteStep.bind(this), this.ChargebeeWriteStepEvent)(reqest);
	}
	async chargebeeLastStepAsync(): Promise<ChargeBeeLogs> {
		return EventToAsyncDecorator.getInstance().bind(this.ChargebeeLastStep.bind(this), this.ChargebeeLastStepEvent)();
	}
}