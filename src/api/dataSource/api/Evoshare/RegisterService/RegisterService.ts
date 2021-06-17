import { WebApiService } from '../../plugins/webApiService'
import { Events } from '../../plugins/events'
import EventToAsyncDecorator from '../../plugins/eventToAsyncDecorator'
import ConfirmCodeRequest from '../../Evoshare/ITwillioService/Models/Request/ConfirmCodeRequest';
import ParticipantValidationRequest from '../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantValidationRequest';
import ParticipantStep1 from '../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantStep1';
import ParticipantStep2 from '../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantStep2';
import ParticipantStep4 from '../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantStep4';
import ParticipantStep8 from '../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantStep8';
import ParticipantStep16 from '../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantStep16';
import ParticipantStep32 from '../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantStep32';
import ParticipantStep64 from '../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantStep64';
import ParticipantStep128 from '../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantStep128';
import ParticipantStep256 from '../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantStep256';
import ParticipantStep512 from '../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantStep512';
import ParticipantStep1024 from '../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantStep1024';
import ParticipantStep2048 from '../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantStep2048';
import WsResponseModel from '../../SchemaBuilderServer/Models/WsResponseModel';
import VerifyPhoneResponse from '../../Evoshare/ITwillioService/Models/Response/VerifyPhoneResponse';

export default class RegisterService {
	webApiService: WebApiService;
	SendConfirmCodeEvent = new Events<WsResponseModel<VerifyPhoneResponse>>();
	ConfirmCodeEvent = new Events<WsResponseModel<Boolean>>();
	ParticipantValidationRequiredStepEvent = new Events<WsResponseModel<Boolean>>();
	ParticipantStep1Event = new Events<WsResponseModel<Boolean>>();
	ParticipantStep2Event = new Events<WsResponseModel<Boolean>>();
	ParticipantStep4Event = new Events<WsResponseModel<Boolean>>();
	ParticipantStep8Event = new Events<WsResponseModel<Boolean>>();
	ParticipantStep16Event = new Events<WsResponseModel<Boolean>>();
	ParticipantStep32Event = new Events<WsResponseModel<Boolean>>();
	ParticipantStep64Event = new Events<WsResponseModel<Boolean>>();
	ParticipantStep128Event = new Events<WsResponseModel<Boolean>>();
	ParticipantStep256Event = new Events<WsResponseModel<Boolean>>();
	ParticipantStep512Event = new Events<WsResponseModel<Boolean>>();
	ParticipantStep1024Event = new Events<WsResponseModel<Boolean>>();
	ParticipantStep2048Event = new Events<WsResponseModel<Boolean>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('RegisterService', 'SendConfirmCode', (res: WsResponseModel<VerifyPhoneResponse>) => {
			self.SendConfirmCodeEvent.trigger(res);
		});
		webApiService.on('RegisterService', 'ConfirmCode', (res: WsResponseModel<Boolean>) => {
			self.ConfirmCodeEvent.trigger(res);
		});
		webApiService.on('RegisterService', 'ParticipantValidationRequiredStep', (res: WsResponseModel<Boolean>) => {
			self.ParticipantValidationRequiredStepEvent.trigger(res);
		});
		webApiService.on('RegisterService', 'ParticipantStep1', (res: WsResponseModel<Boolean>) => {
			self.ParticipantStep1Event.trigger(res);
		});
		webApiService.on('RegisterService', 'ParticipantStep2', (res: WsResponseModel<Boolean>) => {
			self.ParticipantStep2Event.trigger(res);
		});
		webApiService.on('RegisterService', 'ParticipantStep4', (res: WsResponseModel<Boolean>) => {
			self.ParticipantStep4Event.trigger(res);
		});
		webApiService.on('RegisterService', 'ParticipantStep8', (res: WsResponseModel<Boolean>) => {
			self.ParticipantStep8Event.trigger(res);
		});
		webApiService.on('RegisterService', 'ParticipantStep16', (res: WsResponseModel<Boolean>) => {
			self.ParticipantStep16Event.trigger(res);
		});
		webApiService.on('RegisterService', 'ParticipantStep32', (res: WsResponseModel<Boolean>) => {
			self.ParticipantStep32Event.trigger(res);
		});
		webApiService.on('RegisterService', 'ParticipantStep64', (res: WsResponseModel<Boolean>) => {
			self.ParticipantStep64Event.trigger(res);
		});
		webApiService.on('RegisterService', 'ParticipantStep128', (res: WsResponseModel<Boolean>) => {
			self.ParticipantStep128Event.trigger(res);
		});
		webApiService.on('RegisterService', 'ParticipantStep256', (res: WsResponseModel<Boolean>) => {
			self.ParticipantStep256Event.trigger(res);
		});
		webApiService.on('RegisterService', 'ParticipantStep512', (res: WsResponseModel<Boolean>) => {
			self.ParticipantStep512Event.trigger(res);
		});
		webApiService.on('RegisterService', 'ParticipantStep1024', (res: WsResponseModel<Boolean>) => {
			self.ParticipantStep1024Event.trigger(res);
		});
		webApiService.on('RegisterService', 'ParticipantStep2048', (res: WsResponseModel<Boolean>) => {
			self.ParticipantStep2048Event.trigger(res);
		});
	}
	SendConfirmCode() { 	
        this.webApiService.send('RegisterService', 'SendConfirmCode' );
    }
	ConfirmCode(request: ConfirmCodeRequest = null) { 	
        this.webApiService.send('RegisterService', 'ConfirmCode' , request);
    }
	ParticipantValidationRequiredStep(request: ParticipantValidationRequest = null) { 	
        this.webApiService.send('RegisterService', 'ParticipantValidationRequiredStep' , request);
    }
	ParticipantStep1(request: ParticipantStep1 = null) { 	
        this.webApiService.send('RegisterService', 'ParticipantStep1' , request);
    }
	ParticipantStep2(request: ParticipantStep2 = null) { 	
        this.webApiService.send('RegisterService', 'ParticipantStep2' , request);
    }
	ParticipantStep4(request: ParticipantStep4 = null) { 	
        this.webApiService.send('RegisterService', 'ParticipantStep4' , request);
    }
	ParticipantStep8(request: ParticipantStep8 = null) { 	
        this.webApiService.send('RegisterService', 'ParticipantStep8' , request);
    }
	ParticipantStep16(request: ParticipantStep16 = null) { 	
        this.webApiService.send('RegisterService', 'ParticipantStep16' , request);
    }
	ParticipantStep32(request: ParticipantStep32 = null) { 	
        this.webApiService.send('RegisterService', 'ParticipantStep32' , request);
    }
	ParticipantStep64(request: ParticipantStep64 = null) { 	
        this.webApiService.send('RegisterService', 'ParticipantStep64' , request);
    }
	ParticipantStep128(request: ParticipantStep128 = null) { 	
        this.webApiService.send('RegisterService', 'ParticipantStep128' , request);
    }
	ParticipantStep256(request: ParticipantStep256 = null) { 	
        this.webApiService.send('RegisterService', 'ParticipantStep256' , request);
    }
	ParticipantStep512(request: ParticipantStep512 = null) { 	
        this.webApiService.send('RegisterService', 'ParticipantStep512' , request);
    }
	ParticipantStep1024(request: ParticipantStep1024 = null) { 	
        this.webApiService.send('RegisterService', 'ParticipantStep1024' , request);
    }
	ParticipantStep2048(request: ParticipantStep2048 = null) { 	
        this.webApiService.send('RegisterService', 'ParticipantStep2048' , request);
    }
	 // async methods
	async sendConfirmCodeAsync(): Promise<VerifyPhoneResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.SendConfirmCode.bind(this), this.SendConfirmCodeEvent)();
	}
	async confirmCodeAsync(request: ConfirmCodeRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ConfirmCode.bind(this), this.ConfirmCodeEvent)(request);
	}
	async participantValidationRequiredStepAsync(request: ParticipantValidationRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ParticipantValidationRequiredStep.bind(this), this.ParticipantValidationRequiredStepEvent)(request);
	}
	async participantStep1Async(request: ParticipantStep1 = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ParticipantStep1.bind(this), this.ParticipantStep1Event)(request);
	}
	async participantStep2Async(request: ParticipantStep2 = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ParticipantStep2.bind(this), this.ParticipantStep2Event)(request);
	}
	async participantStep4Async(request: ParticipantStep4 = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ParticipantStep4.bind(this), this.ParticipantStep4Event)(request);
	}
	async participantStep8Async(request: ParticipantStep8 = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ParticipantStep8.bind(this), this.ParticipantStep8Event)(request);
	}
	async participantStep16Async(request: ParticipantStep16 = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ParticipantStep16.bind(this), this.ParticipantStep16Event)(request);
	}
	async participantStep32Async(request: ParticipantStep32 = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ParticipantStep32.bind(this), this.ParticipantStep32Event)(request);
	}
	async participantStep64Async(request: ParticipantStep64 = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ParticipantStep64.bind(this), this.ParticipantStep64Event)(request);
	}
	async participantStep128Async(request: ParticipantStep128 = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ParticipantStep128.bind(this), this.ParticipantStep128Event)(request);
	}
	async participantStep256Async(request: ParticipantStep256 = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ParticipantStep256.bind(this), this.ParticipantStep256Event)(request);
	}
	async participantStep512Async(request: ParticipantStep512 = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ParticipantStep512.bind(this), this.ParticipantStep512Event)(request);
	}
	async participantStep1024Async(request: ParticipantStep1024 = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ParticipantStep1024.bind(this), this.ParticipantStep1024Event)(request);
	}
	async participantStep2048Async(request: ParticipantStep2048 = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ParticipantStep2048.bind(this), this.ParticipantStep2048Event)(request);
	}
}