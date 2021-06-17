import { WebApiService } from '../../plugins/webApiService'
import { Events } from '../../plugins/events'
import EventToAsyncDecorator from '../../plugins/eventToAsyncDecorator'
import WsResponseModel from '../../SchemaBuilderServer/Models/WsResponseModel';
import ProfileResponse from '../../Evoshare/IUserService/Models/Response/ProfileResponse';

export default class UserServiceAdmin {
	webApiService: WebApiService;
	GetCurrentUserEvent = new Events<WsResponseModel<ProfileResponse>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('UserServiceAdmin', 'GetCurrentUser', (res: WsResponseModel<ProfileResponse>) => {
			self.GetCurrentUserEvent.trigger(res);
		});
	}
	GetCurrentUser() { 	
        this.webApiService.send('UserServiceAdmin', 'GetCurrentUser' );
    }
	 // async methods
	async getCurrentUserAsync(): Promise<ProfileResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetCurrentUser.bind(this), this.GetCurrentUserEvent)();
	}
}