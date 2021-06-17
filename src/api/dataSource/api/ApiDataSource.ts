import { WebApiService } from './plugins/webApiService';
import WsCallbacks from './WebSocketControllers/Core/WsCallbacks';
import TwillioService from './Evoshare/TwillioService/TwillioService';
import AuthorizationService from './Evoshare/Authorization/AuthorizationService';
import MembershipTransactionServices from './Evoshare/MembershipTransactionService/MembershipTransactionServices';
import NotificationService from './Evoshare/Notification/NotificationService';
import RegisterService from './Evoshare/RegisterService/RegisterService';
import OnboardingService from './Evoshare/Onboarding/OnboardingService';
import UserService from './Evoshare/UserService/UserService';
import UserServiceAdmin from './Evoshare/UserService/UserServiceAdmin';
import ParticipantService from './Evoshare/Participant/ParticipantService';
import CustomizationService from './Evoshare/Customization/CustomizationService';
import ManualTransactionService from './Evoshare/ManualTransaction/ManualTransactionService';
import TriggersService from './Evoshare/Triggers/TriggersService';
import BankTransactionService from './Evoshare/BankTransaction/BankTransactionService'

export default class apiDataSource {
	webApiService: WebApiService;
	WsCallbacks: WsCallbacks;
	TwillioService: TwillioService;
	AuthorizationService: AuthorizationService;
	MembershipTransactionServices: MembershipTransactionServices;
	NotificationService: NotificationService;
	RegisterService: RegisterService;
	OnboardingService: OnboardingService;
	UserService: UserService;
	UserServiceAdmin: UserServiceAdmin;
	ParticipantService: ParticipantService;
	CustomizationService: CustomizationService;
	ManualTransactionService: ManualTransactionService;
	TriggersService: TriggersService;
	BankTransactionService: BankTransactionService;
	constructor(webApiUrl: string) {
		this.webApiService = new WebApiService(webApiUrl);
		this.WsCallbacks = new WsCallbacks(this.webApiService);
		this.TwillioService = new TwillioService(this.webApiService);
		this.AuthorizationService = new AuthorizationService(this.webApiService);
		this.MembershipTransactionServices = new MembershipTransactionServices(this.webApiService);
		this.NotificationService = new NotificationService(this.webApiService);
		this.RegisterService = new RegisterService(this.webApiService);
		this.OnboardingService = new OnboardingService(this.webApiService);
		this.UserService = new UserService(this.webApiService);
		this.UserServiceAdmin = new UserServiceAdmin(this.webApiService);
		this.ParticipantService = new ParticipantService(this.webApiService);
		this.CustomizationService = new CustomizationService(this.webApiService);
		this.ManualTransactionService = new ManualTransactionService(this.webApiService);
		this.TriggersService = new TriggersService(this.webApiService);
		this.BankTransactionService = new BankTransactionService(this.webApiService);
	}

}
