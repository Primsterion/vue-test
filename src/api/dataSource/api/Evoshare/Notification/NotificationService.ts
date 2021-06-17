import { WebApiService } from '../../plugins/webApiService'
import { Events } from '../../plugins/events'
import EventToAsyncDecorator from '../../plugins/eventToAsyncDecorator'
import TriggerMessageRequest from '../../Evoshare/INotification/Models/TriggerMessageRequest';
import SendMailEventRequestNew from '../../Evoshare/IMandrill/Models/Request/SendMailEventRequestNew';
import WsResponseModel from '../../SchemaBuilderServer/Models/WsResponseModel';

export default class NotificationService {
	webApiService: WebApiService;
	ServiceBusReaderSendEvent = new Events<WsResponseModel<Boolean>>();
	WebNotificationSendTriggerEvent = new Events<WsResponseModel<Boolean>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('NotificationService', 'ServiceBusReaderSend', (res: WsResponseModel<Boolean>) => {
			self.ServiceBusReaderSendEvent.trigger(res);
		});
		webApiService.on('NotificationService', 'WebNotificationSendTrigger', (res: WsResponseModel<Boolean>) => {
			self.WebNotificationSendTriggerEvent.trigger(res);
		});
	}
	ServiceBusReaderSend(request: TriggerMessageRequest = null) { 	
        this.webApiService.send('NotificationService', 'ServiceBusReaderSend' , request);
    }
	WebNotificationSendTrigger(request: SendMailEventRequestNew = null) { 	
        this.webApiService.send('NotificationService', 'WebNotificationSendTrigger' , request);
    }
	 // async methods
	async serviceBusReaderSendAsync(request: TriggerMessageRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ServiceBusReaderSend.bind(this), this.ServiceBusReaderSendEvent)(request);
	}
	async webNotificationSendTriggerAsync(request: SendMailEventRequestNew = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.WebNotificationSendTrigger.bind(this), this.WebNotificationSendTriggerEvent)(request);
	}
}