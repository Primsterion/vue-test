import { WebApiService } from '../../plugins/webApiService'
import { Events } from '../../plugins/events'
import EventToAsyncDecorator from '../../plugins/eventToAsyncDecorator'
import ParticipantRegisterRequest from '../../Evoshare/IUserService/Models/Request/ParticipantRegisterRequest';
import GetEmployerByAliasRequest from '../../Evoshare/IUserService/Models/Request/GetEmployerByAliasRequest';
import ResetPasswordRequest from '../../Evoshare/IUserService/Models/Request/ResetPasswordRequest';
import UpdateTempPasswordRequest from '../../Evoshare/IUserService/Models/Request/UpdateTempPasswordRequest';
import WsResponseModel from '../../SchemaBuilderServer/Models/WsResponseModel';
import ParticipantValidationError from '../../Evoshare/IParticipant/Models/ParticipantValidationError';
import ProfileResponse from '../../Evoshare/IUserService/Models/Response/ProfileResponse';
import CurrentRoleResponse from '../../Evoshare/IUserService/Models/Response/CurrentRoleResponse';
import StoreStatisticResponse from '../../Evoshare/IDictionary/Models/SiteConstant/StoreStatisticResponse';
import BaseResponse from '../../Tirscript/Common/ResponseModels/BaseResponse';

export default class UserService {
	webApiService: WebApiService;
	ValidationUserRegEvent = new Events<WsResponseModel<ParticipantValidationError>>();
	RegisterParticipantEvent = new Events<WsResponseModel<Boolean>>();
	GetEmployerByAliasEvent = new Events<WsResponseModel<String>>();
	GetCurrentUserEvent = new Events<WsResponseModel<ProfileResponse>>();
	GetCurrentRoleEvent = new Events<WsResponseModel<CurrentRoleResponse>>();
	GetStoreStatisticEvent = new Events<WsResponseModel<StoreStatisticResponse>>();
	RessetPasswordEvent = new Events<WsResponseModel<Boolean>>();
	UpdateTempPasswordEvent = new Events<WsResponseModel<BaseResponse>>();
	RemoveCurrentUserEvent = new Events<WsResponseModel<Boolean>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('UserService', 'ValidationUserReg', (res: WsResponseModel<ParticipantValidationError>) => {
			self.ValidationUserRegEvent.trigger(res);
		});
		webApiService.on('UserService', 'RegisterParticipant', (res: WsResponseModel<Boolean>) => {
			self.RegisterParticipantEvent.trigger(res);
		});
		webApiService.on('UserService', 'GetEmployerByAlias', (res: WsResponseModel<String>) => {
			self.GetEmployerByAliasEvent.trigger(res);
		});
		webApiService.on('UserService', 'GetCurrentUser', (res: WsResponseModel<ProfileResponse>) => {
			self.GetCurrentUserEvent.trigger(res);
		});
		webApiService.on('UserService', 'GetCurrentRole', (res: WsResponseModel<CurrentRoleResponse>) => {
			self.GetCurrentRoleEvent.trigger(res);
		});
		webApiService.on('UserService', 'GetStoreStatistic', (res: WsResponseModel<StoreStatisticResponse>) => {
			self.GetStoreStatisticEvent.trigger(res);
		});
		webApiService.on('UserService', 'RessetPassword', (res: WsResponseModel<Boolean>) => {
			self.RessetPasswordEvent.trigger(res);
		});
		webApiService.on('UserService', 'UpdateTempPassword', (res: WsResponseModel<BaseResponse>) => {
			self.UpdateTempPasswordEvent.trigger(res);
		});
		webApiService.on('UserService', 'RemoveCurrentUser', (res: WsResponseModel<Boolean>) => {
			self.RemoveCurrentUserEvent.trigger(res);
		});
	}
	ValidationUserReg(request: ParticipantRegisterRequest = null) { 	
        this.webApiService.send('UserService', 'ValidationUserReg' , request);
    }
	RegisterParticipant(request: ParticipantRegisterRequest = null) { 	
        this.webApiService.send('UserService', 'RegisterParticipant' , request);
    }
	GetEmployerByAlias(request: GetEmployerByAliasRequest = null) { 	
        this.webApiService.send('UserService', 'GetEmployerByAlias' , request);
    }
	GetCurrentUser() { 	
        this.webApiService.send('UserService', 'GetCurrentUser' );
    }
	GetCurrentRole() { 	
        this.webApiService.send('UserService', 'GetCurrentRole' );
    }
	GetStoreStatistic() { 	
        this.webApiService.send('UserService', 'GetStoreStatistic' );
    }
	RessetPassword(request: ResetPasswordRequest = null) { 	
        this.webApiService.send('UserService', 'RessetPassword' , request);
    }
	UpdateTempPassword(request: UpdateTempPasswordRequest = null) { 	
        this.webApiService.send('UserService', 'UpdateTempPassword' , request);
    }
	RemoveCurrentUser() { 	
        this.webApiService.send('UserService', 'RemoveCurrentUser' );
    }
	 // async methods
	async validationUserRegAsync(request: ParticipantRegisterRequest = null): Promise<ParticipantValidationError> {
		return EventToAsyncDecorator.getInstance().bind(this.ValidationUserReg.bind(this), this.ValidationUserRegEvent)(request);
	}
	async registerParticipantAsync(request: ParticipantRegisterRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.RegisterParticipant.bind(this), this.RegisterParticipantEvent)(request);
	}
	async getEmployerByAliasAsync(request: GetEmployerByAliasRequest = null): Promise<String> {
		return EventToAsyncDecorator.getInstance().bind(this.GetEmployerByAlias.bind(this), this.GetEmployerByAliasEvent)(request);
	}
	async getCurrentUserAsync(): Promise<ProfileResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetCurrentUser.bind(this), this.GetCurrentUserEvent)();
	}
	async getCurrentRoleAsync(): Promise<CurrentRoleResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetCurrentRole.bind(this), this.GetCurrentRoleEvent)();
	}
	async getStoreStatisticAsync(): Promise<StoreStatisticResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetStoreStatistic.bind(this), this.GetStoreStatisticEvent)();
	}
	async ressetPasswordAsync(request: ResetPasswordRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.RessetPassword.bind(this), this.RessetPasswordEvent)(request);
	}
	async updateTempPasswordAsync(request: UpdateTempPasswordRequest = null): Promise<BaseResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.UpdateTempPassword.bind(this), this.UpdateTempPasswordEvent)(request);
	}
	async removeCurrentUserAsync(): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.RemoveCurrentUser.bind(this), this.RemoveCurrentUserEvent)();
	}
}