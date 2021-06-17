import { WebApiService } from '../../plugins/webApiService'
import { Events } from '../../plugins/events'
import EventToAsyncDecorator from '../../plugins/eventToAsyncDecorator'
import RegisterStepGetRequest from '../../Evoshare/IOnboarding/Models/Request/RegisterStepGetRequest';
import RegisterStepUpdateRequest from '../../Evoshare/IOnboarding/Models/Request/RegisterStepUpdateRequest';
import RegisterStepDeletedRequest from '../../Evoshare/IOnboarding/Models/Request/RegisterStepDeletedRequest';
import IncompleteRegistrationsWriteRequest from '../../Evoshare/IOnboarding/Models/Request/IncompleteRegistrationsWriteRequest';
import IncompleteRegistrationsGetLogsRequest from '../../Evoshare/IOnboarding/Models/Request/IncompleteRegistrationsGetLogsRequest';
import WsResponseModel from '../../SchemaBuilderServer/Models/WsResponseModel';
import RegisterStepResponse from '../../Evoshare/IOnboarding/Models/Response/RegisterStepResponse';
import Step from '../../Evoshare/IOnboarding/Models/Response/Step';
import IncompleteRegistrationsGetLogsResponse from '../../Evoshare/IOnboarding/Models/Request/IncompleteRegistrationsGetLogsResponse';

export default class OnboardingService {
	webApiService: WebApiService;
	RegisterStepGetEvent = new Events<WsResponseModel<RegisterStepResponse>>();
	RegisterStepUpdateEvent = new Events<WsResponseModel<Step>>();
	RegisterStepAddEvent = new Events<WsResponseModel<Step>>();
	RegisterStepDeletedEvent = new Events<WsResponseModel<Boolean>>();
	IncompleteRegistrationsWriteEvent = new Events<WsResponseModel<Boolean>>();
	IncompleteRegistrationsGetLogsEvent = new Events<WsResponseModel<IncompleteRegistrationsGetLogsResponse>>();
	CompleteRegistrationsWriteEvent = new Events<WsResponseModel<Boolean>>();
	UpdateMetaDataEmployerEvent = new Events<WsResponseModel<Boolean>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('OnboardingService', 'RegisterStepGet', (res: WsResponseModel<RegisterStepResponse>) => {
			self.RegisterStepGetEvent.trigger(res);
		});
		webApiService.on('OnboardingService', 'RegisterStepUpdate', (res: WsResponseModel<Step>) => {
			self.RegisterStepUpdateEvent.trigger(res);
		});
		webApiService.on('OnboardingService', 'RegisterStepAdd', (res: WsResponseModel<Step>) => {
			self.RegisterStepAddEvent.trigger(res);
		});
		webApiService.on('OnboardingService', 'RegisterStepDeleted', (res: WsResponseModel<Boolean>) => {
			self.RegisterStepDeletedEvent.trigger(res);
		});
		webApiService.on('OnboardingService', 'IncompleteRegistrationsWrite', (res: WsResponseModel<Boolean>) => {
			self.IncompleteRegistrationsWriteEvent.trigger(res);
		});
		webApiService.on('OnboardingService', 'IncompleteRegistrationsGetLogs', (res: WsResponseModel<IncompleteRegistrationsGetLogsResponse>) => {
			self.IncompleteRegistrationsGetLogsEvent.trigger(res);
		});
		webApiService.on('OnboardingService', 'CompleteRegistrationsWrite', (res: WsResponseModel<Boolean>) => {
			self.CompleteRegistrationsWriteEvent.trigger(res);
		});
		webApiService.on('OnboardingService', 'UpdateMetaDataEmployer', (res: WsResponseModel<Boolean>) => {
			self.UpdateMetaDataEmployerEvent.trigger(res);
		});
	}
	RegisterStepGet(request: RegisterStepGetRequest = null) { 	
        this.webApiService.send('OnboardingService', 'RegisterStepGet' , request);
    }
	RegisterStepUpdate(request: RegisterStepUpdateRequest = null) { 	
        this.webApiService.send('OnboardingService', 'RegisterStepUpdate' , request);
    }
	RegisterStepAdd(request: RegisterStepUpdateRequest = null) { 	
        this.webApiService.send('OnboardingService', 'RegisterStepAdd' , request);
    }
	RegisterStepDeleted(request: RegisterStepDeletedRequest = null) { 	
        this.webApiService.send('OnboardingService', 'RegisterStepDeleted' , request);
    }
	IncompleteRegistrationsWrite(request: IncompleteRegistrationsWriteRequest = null) { 	
        this.webApiService.send('OnboardingService', 'IncompleteRegistrationsWrite' , request);
    }
	IncompleteRegistrationsGetLogs(request: IncompleteRegistrationsGetLogsRequest = null) { 	
        this.webApiService.send('OnboardingService', 'IncompleteRegistrationsGetLogs' , request);
    }
	CompleteRegistrationsWrite() { 	
        this.webApiService.send('OnboardingService', 'CompleteRegistrationsWrite' );
    }
	UpdateMetaDataEmployer(EmployerId: string = '') { 	
        this.webApiService.send('OnboardingService', 'UpdateMetaDataEmployer' , EmployerId);
    }
	 // async methods
	async registerStepGetAsync(request: RegisterStepGetRequest = null): Promise<RegisterStepResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.RegisterStepGet.bind(this), this.RegisterStepGetEvent)(request);
	}
	async registerStepUpdateAsync(request: RegisterStepUpdateRequest = null): Promise<Step> {
		return EventToAsyncDecorator.getInstance().bind(this.RegisterStepUpdate.bind(this), this.RegisterStepUpdateEvent)(request);
	}
	async registerStepAddAsync(request: RegisterStepUpdateRequest = null): Promise<Step> {
		return EventToAsyncDecorator.getInstance().bind(this.RegisterStepAdd.bind(this), this.RegisterStepAddEvent)(request);
	}
	async registerStepDeletedAsync(request: RegisterStepDeletedRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.RegisterStepDeleted.bind(this), this.RegisterStepDeletedEvent)(request);
	}
	async incompleteRegistrationsWriteAsync(request: IncompleteRegistrationsWriteRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.IncompleteRegistrationsWrite.bind(this), this.IncompleteRegistrationsWriteEvent)(request);
	}
	async incompleteRegistrationsGetLogsAsync(request: IncompleteRegistrationsGetLogsRequest = null): Promise<IncompleteRegistrationsGetLogsResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.IncompleteRegistrationsGetLogs.bind(this), this.IncompleteRegistrationsGetLogsEvent)(request);
	}
	async completeRegistrationsWriteAsync(): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.CompleteRegistrationsWrite.bind(this), this.CompleteRegistrationsWriteEvent)();
	}
	async updateMetaDataEmployerAsync(EmployerId: string = ''): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.UpdateMetaDataEmployer.bind(this), this.UpdateMetaDataEmployerEvent)(EmployerId);
	}
}