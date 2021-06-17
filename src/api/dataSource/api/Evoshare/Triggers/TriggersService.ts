import { WebApiService } from '../../plugins/webApiService'
import { Events } from '../../plugins/events'
import EventToAsyncDecorator from '../../plugins/eventToAsyncDecorator'
import EvosharePaginationRequest from '../../Evoshare/Utilites/Extension/Models/EvosharePaginationRequest';
import EvosharePaginationServiceRequest from '../../Evoshare/Utilites/Extension/Models/EvosharePaginationServiceRequest';
import WebNotificationResponse from '../../Evoshare/ITriggers/Models/WebNotificationResponse';
import WsResponseModel from '../../SchemaBuilderServer/Models/WsResponseModel';
import GetParticipantWebNotificationResponse from '../../Evoshare/ITriggers/Models/GetParticipantWebNotificationResponse';

export default class TriggersService {
	webApiService: WebApiService;
	GetNewParticipantWebNotificationEvent = new Events<WsResponseModel<GetParticipantWebNotificationResponse>>();
	GetParticipantWebNotificationEvent = new Events<WsResponseModel<GetParticipantWebNotificationResponse>>();
	GetParticipantWebNotificationServiceEvent = new Events<WsResponseModel<GetParticipantWebNotificationResponse>>();
	WebNotificationIsCheckEvent = new Events<WsResponseModel<WebNotificationResponse>>();
	WebNotificationIsCheckListEvent = new Events<WsResponseModel<Boolean>>();
	WebNotificationAddTestEvent = new Events<WsResponseModel<Boolean>>();
	WebNotificationClearTestEvent = new Events<WsResponseModel<Boolean>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('TriggersService', 'GetNewParticipantWebNotification', (res: WsResponseModel<GetParticipantWebNotificationResponse>) => {
			self.GetNewParticipantWebNotificationEvent.trigger(res);
		});
		webApiService.on('TriggersService', 'GetParticipantWebNotification', (res: WsResponseModel<GetParticipantWebNotificationResponse>) => {
			self.GetParticipantWebNotificationEvent.trigger(res);
		});
		webApiService.on('TriggersService', 'GetParticipantWebNotificationService', (res: WsResponseModel<GetParticipantWebNotificationResponse>) => {
			self.GetParticipantWebNotificationServiceEvent.trigger(res);
		});
		webApiService.on('TriggersService', 'WebNotificationIsCheck', (res: WsResponseModel<WebNotificationResponse>) => {
			self.WebNotificationIsCheckEvent.trigger(res);
		});
		webApiService.on('TriggersService', 'WebNotificationIsCheckList', (res: WsResponseModel<Boolean>) => {
			self.WebNotificationIsCheckListEvent.trigger(res);
		});
		webApiService.on('TriggersService', 'WebNotificationAddTest', (res: WsResponseModel<Boolean>) => {
			self.WebNotificationAddTestEvent.trigger(res);
		});
		webApiService.on('TriggersService', 'WebNotificationClearTest', (res: WsResponseModel<Boolean>) => {
			self.WebNotificationClearTestEvent.trigger(res);
		});
	}
	GetNewParticipantWebNotification() { 	
        this.webApiService.send('TriggersService', 'GetNewParticipantWebNotification' );
    }
	GetParticipantWebNotification(request: EvosharePaginationRequest = null) { 	
        this.webApiService.send('TriggersService', 'GetParticipantWebNotification' , request);
    }
	GetParticipantWebNotificationService(request: EvosharePaginationServiceRequest = null) { 	
        this.webApiService.send('TriggersService', 'GetParticipantWebNotificationService' , request);
    }
	WebNotificationIsCheck(request: WebNotificationResponse = null) { 	
        this.webApiService.send('TriggersService', 'WebNotificationIsCheck' , request);
    }
	WebNotificationIsCheckList(request: Array<WebNotificationResponse> = null) { 	
        this.webApiService.send('TriggersService', 'WebNotificationIsCheckList' , request);
    }
	WebNotificationAddTest() { 	
        this.webApiService.send('TriggersService', 'WebNotificationAddTest' );
    }
	WebNotificationClearTest() { 	
        this.webApiService.send('TriggersService', 'WebNotificationClearTest' );
    }
	 // async methods
	async getNewParticipantWebNotificationAsync(): Promise<GetParticipantWebNotificationResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetNewParticipantWebNotification.bind(this), this.GetNewParticipantWebNotificationEvent)();
	}
	async getParticipantWebNotificationAsync(request: EvosharePaginationRequest = null): Promise<GetParticipantWebNotificationResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetParticipantWebNotification.bind(this), this.GetParticipantWebNotificationEvent)(request);
	}
	async getParticipantWebNotificationServiceAsync(request: EvosharePaginationServiceRequest = null): Promise<GetParticipantWebNotificationResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetParticipantWebNotificationService.bind(this), this.GetParticipantWebNotificationServiceEvent)(request);
	}
	async webNotificationIsCheckAsync(request: WebNotificationResponse = null): Promise<WebNotificationResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.WebNotificationIsCheck.bind(this), this.WebNotificationIsCheckEvent)(request);
	}
	async webNotificationIsCheckListAsync(request: Array<WebNotificationResponse> = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.WebNotificationIsCheckList.bind(this), this.WebNotificationIsCheckListEvent)(request);
	}
	async webNotificationAddTestAsync(): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.WebNotificationAddTest.bind(this), this.WebNotificationAddTestEvent)();
	}
	async webNotificationClearTestAsync(): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.WebNotificationClearTest.bind(this), this.WebNotificationClearTestEvent)();
	}
}