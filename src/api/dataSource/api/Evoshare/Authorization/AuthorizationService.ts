import { WebApiService } from '../../plugins/webApiService'
import { Events } from '../../plugins/events'
import EventToAsyncDecorator from '../../plugins/eventToAsyncDecorator'
import LoginRequest from '../../Evoshare/IAuthorization/Models/Request/LoginRequest';
import UpdatePasswordRequest from '../../Evoshare/IAuthorization/Models/Request/UpdatePasswordRequest';
import WsResponseModel from '../../SchemaBuilderServer/Models/WsResponseModel';
import LoginResponse from '../../Evoshare/IAuthorization/Models/Response/LoginResponse';

export default class AuthorizationService {
	webApiService: WebApiService;
	LoginEvent = new Events<WsResponseModel<LoginResponse>>();
	LogoutEvent = new Events<WsResponseModel<Boolean>>();
	UpdatePasswordEvent = new Events<WsResponseModel<Boolean>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('AuthorizationService', 'Login', (res: WsResponseModel<LoginResponse>) => {
			self.LoginEvent.trigger(res);
		});
		webApiService.on('AuthorizationService', 'Logout', (res: WsResponseModel<Boolean>) => {
			self.LogoutEvent.trigger(res);
		});
		webApiService.on('AuthorizationService', 'UpdatePassword', (res: WsResponseModel<Boolean>) => {
			self.UpdatePasswordEvent.trigger(res);
		});
	}
	Login(request: LoginRequest = null) { 	
        this.webApiService.send('AuthorizationService', 'Login' , request);
    }
	Logout() { 	
        this.webApiService.send('AuthorizationService', 'Logout' );
    }
	UpdatePassword(request: UpdatePasswordRequest = null) { 	
        this.webApiService.send('AuthorizationService', 'UpdatePassword' , request);
    }
	 // async methods
	async loginAsync(request: LoginRequest = null): Promise<LoginResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.Login.bind(this), this.LoginEvent)(request);
	}
	async logoutAsync(): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.Logout.bind(this), this.LogoutEvent)();
	}
	async updatePasswordAsync(request: UpdatePasswordRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.UpdatePassword.bind(this), this.UpdatePasswordEvent)(request);
	}
}