import { WebApiService } from '../../plugins/webApiService'
import { Events } from '../../plugins/events'
import EventToAsyncDecorator from '../../plugins/eventToAsyncDecorator'
import ParticipantUpdateProfileRequest from '../../Evoshare/Site/IAdmin/Models/Participant/Request/ParticipantUpdateProfileRequest';
import ParticipantPersonalAccount from '../../Evoshare/Site/IAdmin/Models/Participant/Common/ParticipantPersonalAccount';
import ParticipantBankAccountViews from '../../Evoshare/Site/IAdmin/Models/Participant/Response/ParticipantBankAccountViews';
import ParticipantChangeRoleRequest from '../../Evoshare/IParticipant/Models/Request/ParticipantChangeRoleRequest';
import AddCardRequest from '../../Evoshare/IParticipant/Models/Request/AddCardRequest';
import EmpyrRqs from '../../Evoshare/IEmpyrService/Models/Response/EmpyrRqs';
import GetLocalStoreRequest from '../../Evoshare/IParticipant/Models/Request/GetLocalStoreRequest';
import StoreOnlineGetRequest from '../../Evoshare/IDictionary/Models/OnlineStore/StoreOnlineGetRequest';
import GetStoreOnlineByIdRequest from '../../Evoshare/IDictionary/Models/OnlineStore/GetStoreOnlineByIdRequest';
import PlaidRequest from '../../Evoshare/IRightFoot/Models/Request/PlaidRequest';
import TransactionHistoryGetRequest from '../../Evoshare/IParticipant/Models/Request/TransactionHistoryGetRequest';
import GetTripsActiveGetRequest from '../../Evoshare/IParticipant/Models/Request/GetTripsActiveGetRequest';
import ActivateOnlineStoreRequest from '../../Evoshare/IParticipant/Models/Request/ActivateOnlineStoreRequest';
import ActivateCashBackRequest from '../../Evoshare/IBalance/Models/Request/ActivateCashBackRequest';
import OnlineStoreFavoriteRequest from '../../Evoshare/IParticipant/Models/Request/OnlineStoreFavoriteRequest';
import ContributionsHistoryRequest from '../../Evoshare/IParticipant/Models/Request/ContributionsHistoryRequest';
import CreateTicketSupportRequest from '../../Evoshare/IParticipant/Models/Request/CreateTicketSupportRequest';
import ParticipantMissingCashBackAdd from '../../Evoshare/IParticipant/Models/Request/ParticipantMissingCashBackAdd';
import AutocompleteRequest from '../../Evoshare/Utilites/Models/AutocompleteRequest';
import ParticipantShoppingTripAutocompleteRequest from '../../Evoshare/IParticipant/Models/Request/ParticipantShoppingTripAutocompleteRequest';
import ParticipantRedeemRequest from '../../Evoshare/IParticipant/Models/Request/ParticipantRedeemRequest';
import MicrosavigsAddRequest from '../../Evoshare/IParticipant/Models/Request/MicrosavigsAddRequest';
import SendMobileAppRequest from '../../Evoshare/IParticipant/Models/Request/SendMobileAppRequest';
import GetProvidersRequest from '../../Evoshare/IDictionary/Models/Providers/GetProvidersRequest';
import AddProviderRequest from '../../Evoshare/IDictionary/Models/Providers/AddProviderRequest';
import EvosharePaginationRequest from '../../Evoshare/Utilites/Extension/Models/EvosharePaginationRequest';
import NotificationSettingsModel from '../../Evoshare/DomainModel/sqlhelper/NotificationSettingsModel';
import TerminatedAddressSaveRequest from '../../Evoshare/IParticipant/Models/Request/TerminatedAddressSaveRequest';
import WsResponseModel from '../../SchemaBuilderServer/Models/WsResponseModel';
import ParticipantProfileInfo from '../../Evoshare/IParticipant/Models/Response/ParticipantProfileInfo';
import AddCardResponse from '../../Evoshare/IParticipant/Models/Response/AddCardResponse';
import EmpyrUserCard from '../../Evoshare/IEmpyrService/Models/Response/EmpyrUserCard';
import ParticipantValidationPasswordResponse from '../../Evoshare/IParticipant/Models/Response/ParticipantValidationPasswordResponse';
import LocalStoreListResponse from '../../Evoshare/IParticipant/Models/Response/LocalStoreListResponse';
import LocalStoreResponse from '../../Evoshare/IParticipant/Models/Response/LocalStoreResponse';
import EvosharePaginationResponse from '../../Evoshare/Utilites/Extension/Models/EvosharePaginationResponse';
import StoreOnlineResponse from '../../Evoshare/IDictionary/Models/OnlineStore/StoreOnlineResponse';
import StoreOnlineCategory from '../../Evoshare/IDictionary/Models/OnlineStore/StoreOnlineCategory';
import PlaidApiResponse from '../../Evoshare/IRightFoot/Models/Response/PlaidApiResponse';
import ParticipantBalanceResponse from '../../Evoshare/IParticipant/Models/Response/ParticipantBalanceResponse';
import ParticipantTransactionResponse from '../../Evoshare/IBalance/Models/Response/ParticipantTransactionResponse';
import ParticipantTripsResponse from '../../Evoshare/IBalance/Models/Response/ParticipantTripsResponse';
import ActivateCashBackResponse from '../../Evoshare/IBalance/Models/Response/ActivateCashBackResponse';
import ParticipantContributionHistoryResponse from '../../Evoshare/IBalance/Models/Response/ParticipantContributionHistoryResponse';
import StoreOnlineAutocomplite from '../../Evoshare/IDictionary/Models/Autocomplite/StoreOnlineAutocomplite';
import StoreMaxCashBackResponse from '../../Evoshare/IBalance/Models/Response/StoreMaxCashBackResponse';
import BalanceInfoResponse from '../../Evoshare/IBalance/Models/Response/BalanceInfoResponse';
import AutocompleteResponse from '../../Evoshare/Utilites/Models/AutocompleteResponse';
import BaseResponse from '../../Tirscript/Common/ResponseModels/BaseResponse';
import ProviderInfoAutocomplite from '../../Evoshare/IDictionary/Models/Providers/ProviderInfoAutocomplite';
import ProviderResponse from '../../Evoshare/IDictionary/Models/Providers/ProviderResponse';
import TerminatedAddressResponse from '../../Evoshare/IParticipant/Models/Response/TerminatedAddressResponse';

export default class ParticipantService {
	webApiService: WebApiService;
	UpdateProfileEvent = new Events<WsResponseModel<Boolean>>();
	GetPersonalAccountEvent = new Events<WsResponseModel<ParticipantPersonalAccount>>();
	ClearPersonalAccountEvent = new Events<WsResponseModel<Boolean>>();
	UpdatePersonalAccountEvent = new Events<WsResponseModel<Boolean>>();
	GetBankAccountEvent = new Events<WsResponseModel<ParticipantBankAccountViews>>();
	UpdateBankAccountInfoEvent = new Events<WsResponseModel<Boolean>>();
	GetProfileInfoEvent = new Events<WsResponseModel<ParticipantProfileInfo>>();
	ChangeTowardEvent = new Events<WsResponseModel<Boolean>>();
	AddCardEvent = new Events<WsResponseModel<AddCardResponse>>();
	GetCardEvent = new Events<WsResponseModel<Array<EmpyrUserCard>>>();
	RemoveCardEvent = new Events<WsResponseModel<Boolean>>();
	ParticipantValidationPasswordEvent = new Events<WsResponseModel<ParticipantValidationPasswordResponse>>();
	GetStoreCoordEmpyrEvent = new Events<WsResponseModel<LocalStoreListResponse>>();
	GetLocalStoreEvent = new Events<WsResponseModel<LocalStoreResponse>>();
	GetOnlineStoreEvent = new Events<WsResponseModel<EvosharePaginationResponse<StoreOnlineResponse>>>();
	GetOnlineStoreCategoryEvent = new Events<WsResponseModel<Array<StoreOnlineCategory>>>();
	GetOnlineStoreByIdEvent = new Events<WsResponseModel<StoreOnlineResponse>>();
	ConnectPlaidLoanEvent = new Events<WsResponseModel<PlaidApiResponse>>();
	GetParticipantBalanceInfoEvent = new Events<WsResponseModel<ParticipantBalanceResponse>>();
	GetTransactionHistoryEvent = new Events<WsResponseModel<EvosharePaginationResponse<ParticipantTransactionResponse>>>();
	GetActivateTripsListEvent = new Events<WsResponseModel<EvosharePaginationResponse<ParticipantTripsResponse>>>();
	ActivateOnlineStoreEvent = new Events<WsResponseModel<ActivateCashBackResponse>>();
	ActivateLocalShopEvent = new Events<WsResponseModel<Boolean>>();
	AddOnlineStoreFavoritEvent = new Events<WsResponseModel<Boolean>>();
	RemoveOnlineStoreFavoritEvent = new Events<WsResponseModel<Boolean>>();
	ContributionHistoryEvent = new Events<WsResponseModel<EvosharePaginationResponse<ParticipantContributionHistoryResponse>>>();
	ContactUsEvent = new Events<WsResponseModel<Task>>();
	ContributionsHistoryEvent = new Events<WsResponseModel<Task>>();
	MissingCashBackEvent = new Events<WsResponseModel<Task>>();
	StoreOnlineAutocompleteEvent = new Events<WsResponseModel<EvosharePaginationResponse<StoreOnlineAutocomplite>>>();
	GetStoreMaxCashBackEvent = new Events<WsResponseModel<StoreMaxCashBackResponse>>();
	GetBalanceInfoEvent = new Events<WsResponseModel<BalanceInfoResponse>>();
	ShoppingTripAutocompleteEvent = new Events<WsResponseModel<EvosharePaginationResponse<AutocompleteResponse<number>>>>();
	MissingCashBackShoppingTripAutocompleteEvent = new Events<WsResponseModel<EvosharePaginationResponse<AutocompleteResponse<number>>>>();
	RedeemEvent = new Events<WsResponseModel<BaseResponse>>();
	MicrosavigsAddEvent = new Events<WsResponseModel<BaseResponse>>();
	SendMobileAppEvent = new Events<WsResponseModel<BaseResponse>>();
	GetProviderEvent = new Events<WsResponseModel<EvosharePaginationResponse<ProviderInfoAutocomplite>>>();
	StudentLoanAddProviderEvent = new Events<WsResponseModel<ProviderResponse>>();
	IraAddProviderEvent = new Events<WsResponseModel<ProviderResponse>>();
	CollegeLoanAddProviderEvent = new Events<WsResponseModel<ProviderResponse>>();
	GetBankTransactionsEvent = new Events<WsResponseModel<EvosharePaginationResponse<ParticipantTransactionResponse>>>();
	NotificationSettingsGetEvent = new Events<WsResponseModel<NotificationSettingsModel>>();
	NotificationSettingsUpdateEvent = new Events<WsResponseModel<NotificationSettingsModel>>();
	TerminatedAddressSaveEvent = new Events<WsResponseModel<Task>>();
	TerminatedAddressGetEvent = new Events<WsResponseModel<TerminatedAddressResponse>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('ParticipantService', 'UpdateProfile', (res: WsResponseModel<Boolean>) => {
			self.UpdateProfileEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'GetPersonalAccount', (res: WsResponseModel<ParticipantPersonalAccount>) => {
			self.GetPersonalAccountEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'ClearPersonalAccount', (res: WsResponseModel<Boolean>) => {
			self.ClearPersonalAccountEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'UpdatePersonalAccount', (res: WsResponseModel<Boolean>) => {
			self.UpdatePersonalAccountEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'GetBankAccount', (res: WsResponseModel<ParticipantBankAccountViews>) => {
			self.GetBankAccountEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'UpdateBankAccountInfo', (res: WsResponseModel<Boolean>) => {
			self.UpdateBankAccountInfoEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'GetProfileInfo', (res: WsResponseModel<ParticipantProfileInfo>) => {
			self.GetProfileInfoEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'ChangeToward', (res: WsResponseModel<Boolean>) => {
			self.ChangeTowardEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'AddCard', (res: WsResponseModel<AddCardResponse>) => {
			self.AddCardEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'GetCard', (res: WsResponseModel<Array<EmpyrUserCard>>) => {
			self.GetCardEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'RemoveCard', (res: WsResponseModel<Boolean>) => {
			self.RemoveCardEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'ParticipantValidationPassword', (res: WsResponseModel<ParticipantValidationPasswordResponse>) => {
			self.ParticipantValidationPasswordEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'GetStoreCoordEmpyr', (res: WsResponseModel<LocalStoreListResponse>) => {
			self.GetStoreCoordEmpyrEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'GetLocalStore', (res: WsResponseModel<LocalStoreResponse>) => {
			self.GetLocalStoreEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'GetOnlineStore', (res: WsResponseModel<EvosharePaginationResponse<StoreOnlineResponse>>) => {
			self.GetOnlineStoreEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'GetOnlineStoreCategory', (res: WsResponseModel<Array<StoreOnlineCategory>>) => {
			self.GetOnlineStoreCategoryEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'GetOnlineStoreById', (res: WsResponseModel<StoreOnlineResponse>) => {
			self.GetOnlineStoreByIdEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'ConnectPlaidLoan', (res: WsResponseModel<PlaidApiResponse>) => {
			self.ConnectPlaidLoanEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'GetParticipantBalanceInfo', (res: WsResponseModel<ParticipantBalanceResponse>) => {
			self.GetParticipantBalanceInfoEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'GetTransactionHistory', (res: WsResponseModel<EvosharePaginationResponse<ParticipantTransactionResponse>>) => {
			self.GetTransactionHistoryEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'GetActivateTripsList', (res: WsResponseModel<EvosharePaginationResponse<ParticipantTripsResponse>>) => {
			self.GetActivateTripsListEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'ActivateOnlineStore', (res: WsResponseModel<ActivateCashBackResponse>) => {
			self.ActivateOnlineStoreEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'ActivateLocalShop', (res: WsResponseModel<Boolean>) => {
			self.ActivateLocalShopEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'AddOnlineStoreFavorit', (res: WsResponseModel<Boolean>) => {
			self.AddOnlineStoreFavoritEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'RemoveOnlineStoreFavorit', (res: WsResponseModel<Boolean>) => {
			self.RemoveOnlineStoreFavoritEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'ContributionHistory', (res: WsResponseModel<EvosharePaginationResponse<ParticipantContributionHistoryResponse>>) => {
			self.ContributionHistoryEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'ContactUs', (res: WsResponseModel<Task>) => {
			self.ContactUsEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'ContributionsHistory', (res: WsResponseModel<Task>) => {
			self.ContributionsHistoryEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'MissingCashBack', (res: WsResponseModel<Task>) => {
			self.MissingCashBackEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'StoreOnlineAutocomplete', (res: WsResponseModel<EvosharePaginationResponse<StoreOnlineAutocomplite>>) => {
			self.StoreOnlineAutocompleteEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'GetStoreMaxCashBack', (res: WsResponseModel<StoreMaxCashBackResponse>) => {
			self.GetStoreMaxCashBackEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'GetBalanceInfo', (res: WsResponseModel<BalanceInfoResponse>) => {
			self.GetBalanceInfoEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'ShoppingTripAutocomplete', (res: WsResponseModel<EvosharePaginationResponse<AutocompleteResponse<number>>>) => {
			self.ShoppingTripAutocompleteEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'MissingCashBackShoppingTripAutocomplete', (res: WsResponseModel<EvosharePaginationResponse<AutocompleteResponse<number>>>) => {
			self.MissingCashBackShoppingTripAutocompleteEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'Redeem', (res: WsResponseModel<BaseResponse>) => {
			self.RedeemEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'MicrosavigsAdd', (res: WsResponseModel<BaseResponse>) => {
			self.MicrosavigsAddEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'SendMobileApp', (res: WsResponseModel<BaseResponse>) => {
			self.SendMobileAppEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'GetProvider', (res: WsResponseModel<EvosharePaginationResponse<ProviderInfoAutocomplite>>) => {
			self.GetProviderEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'StudentLoanAddProvider', (res: WsResponseModel<ProviderResponse>) => {
			self.StudentLoanAddProviderEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'IraAddProvider', (res: WsResponseModel<ProviderResponse>) => {
			self.IraAddProviderEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'CollegeLoanAddProvider', (res: WsResponseModel<ProviderResponse>) => {
			self.CollegeLoanAddProviderEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'GetBankTransactions', (res: WsResponseModel<EvosharePaginationResponse<ParticipantTransactionResponse>>) => {
			self.GetBankTransactionsEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'NotificationSettingsGet', (res: WsResponseModel<NotificationSettingsModel>) => {
			self.NotificationSettingsGetEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'NotificationSettingsUpdate', (res: WsResponseModel<NotificationSettingsModel>) => {
			self.NotificationSettingsUpdateEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'TerminatedAddressSave', (res: WsResponseModel<Task>) => {
			self.TerminatedAddressSaveEvent.trigger(res);
		});
		webApiService.on('ParticipantService', 'TerminatedAddressGet', (res: WsResponseModel<TerminatedAddressResponse>) => {
			self.TerminatedAddressGetEvent.trigger(res);
		});
	}
	UpdateProfile(request: ParticipantUpdateProfileRequest = null) { 	
        this.webApiService.send('ParticipantService', 'UpdateProfile' , request);
    }
	GetPersonalAccount() { 	
        this.webApiService.send('ParticipantService', 'GetPersonalAccount' );
    }
	ClearPersonalAccount() { 	
        this.webApiService.send('ParticipantService', 'ClearPersonalAccount' );
    }
	UpdatePersonalAccount(request: ParticipantPersonalAccount = null) { 	
        this.webApiService.send('ParticipantService', 'UpdatePersonalAccount' , request);
    }
	GetBankAccount() { 	
        this.webApiService.send('ParticipantService', 'GetBankAccount' );
    }
	UpdateBankAccountInfo(request: ParticipantBankAccountViews = null) { 	
        this.webApiService.send('ParticipantService', 'UpdateBankAccountInfo' , request);
    }
	GetProfileInfo() { 	
        this.webApiService.send('ParticipantService', 'GetProfileInfo' );
    }
	ChangeToward(request: ParticipantChangeRoleRequest = null) { 	
        this.webApiService.send('ParticipantService', 'ChangeToward' , request);
    }
	AddCard(request: AddCardRequest = null) { 	
        this.webApiService.send('ParticipantService', 'AddCard' , request);
    }
	GetCard() { 	
        this.webApiService.send('ParticipantService', 'GetCard' );
    }
	RemoveCard(request: AddCardRequest = null) { 	
        this.webApiService.send('ParticipantService', 'RemoveCard' , request);
    }
	ParticipantValidationPassword() { 	
        this.webApiService.send('ParticipantService', 'ParticipantValidationPassword' );
    }
	GetStoreCoordEmpyr(request: EmpyrRqs = null) { 	
        this.webApiService.send('ParticipantService', 'GetStoreCoordEmpyr' , request);
    }
	GetLocalStore(request: GetLocalStoreRequest = null) { 	
        this.webApiService.send('ParticipantService', 'GetLocalStore' , request);
    }
	GetOnlineStore(request: StoreOnlineGetRequest = null) { 	
        this.webApiService.send('ParticipantService', 'GetOnlineStore' , request);
    }
	GetOnlineStoreCategory() { 	
        this.webApiService.send('ParticipantService', 'GetOnlineStoreCategory' );
    }
	GetOnlineStoreById(request: GetStoreOnlineByIdRequest = null) { 	
        this.webApiService.send('ParticipantService', 'GetOnlineStoreById' , request);
    }
	ConnectPlaidLoan(request: PlaidRequest = null) { 	
        this.webApiService.send('ParticipantService', 'ConnectPlaidLoan' , request);
    }
	GetParticipantBalanceInfo() { 	
        this.webApiService.send('ParticipantService', 'GetParticipantBalanceInfo' );
    }
	GetTransactionHistory(request: TransactionHistoryGetRequest = null) { 	
        this.webApiService.send('ParticipantService', 'GetTransactionHistory' , request);
    }
	GetActivateTripsList(request: GetTripsActiveGetRequest = null) { 	
        this.webApiService.send('ParticipantService', 'GetActivateTripsList' , request);
    }
	ActivateOnlineStore(request: ActivateOnlineStoreRequest = null) { 	
        this.webApiService.send('ParticipantService', 'ActivateOnlineStore' , request);
    }
	ActivateLocalShop(request: ActivateCashBackRequest = null) { 	
        this.webApiService.send('ParticipantService', 'ActivateLocalShop' , request);
    }
	AddOnlineStoreFavorit(request: OnlineStoreFavoriteRequest = null) { 	
        this.webApiService.send('ParticipantService', 'AddOnlineStoreFavorit' , request);
    }
	RemoveOnlineStoreFavorit(request: OnlineStoreFavoriteRequest = null) { 	
        this.webApiService.send('ParticipantService', 'RemoveOnlineStoreFavorit' , request);
    }
	ContributionHistory(request: ContributionsHistoryRequest = null) { 	
        this.webApiService.send('ParticipantService', 'ContributionHistory' , request);
    }
	ContactUs(request: CreateTicketSupportRequest = null) { 	
        this.webApiService.send('ParticipantService', 'ContactUs' , request);
    }
	ContributionsHistory(request: CreateTicketSupportRequest = null) { 	
        this.webApiService.send('ParticipantService', 'ContributionsHistory' , request);
    }
	MissingCashBack(request: ParticipantMissingCashBackAdd = null) { 	
        this.webApiService.send('ParticipantService', 'MissingCashBack' , request);
    }
	StoreOnlineAutocomplete(request: AutocompleteRequest = null) { 	
        this.webApiService.send('ParticipantService', 'StoreOnlineAutocomplete' , request);
    }
	GetStoreMaxCashBack() { 	
        this.webApiService.send('ParticipantService', 'GetStoreMaxCashBack' );
    }
	GetBalanceInfo() { 	
        this.webApiService.send('ParticipantService', 'GetBalanceInfo' );
    }
	ShoppingTripAutocomplete(request: AutocompleteRequest = null) { 	
        this.webApiService.send('ParticipantService', 'ShoppingTripAutocomplete' , request);
    }
	MissingCashBackShoppingTripAutocomplete(request: ParticipantShoppingTripAutocompleteRequest = null) { 	
        this.webApiService.send('ParticipantService', 'MissingCashBackShoppingTripAutocomplete' , request);
    }
	Redeem(request: ParticipantRedeemRequest = null) { 	
        this.webApiService.send('ParticipantService', 'Redeem' , request);
    }
	MicrosavigsAdd(request: MicrosavigsAddRequest = null) { 	
        this.webApiService.send('ParticipantService', 'MicrosavigsAdd' , request);
    }
	SendMobileApp(request: SendMobileAppRequest = null) { 	
        this.webApiService.send('ParticipantService', 'SendMobileApp' , request);
    }
	GetProvider(request: GetProvidersRequest = null) { 	
        this.webApiService.send('ParticipantService', 'GetProvider' , request);
    }
	StudentLoanAddProvider(request: AddProviderRequest = null) { 	
        this.webApiService.send('ParticipantService', 'StudentLoanAddProvider' , request);
    }
	IraAddProvider(request: AddProviderRequest = null) { 	
        this.webApiService.send('ParticipantService', 'IraAddProvider' , request);
    }
	CollegeLoanAddProvider(request: AddProviderRequest = null) { 	
        this.webApiService.send('ParticipantService', 'CollegeLoanAddProvider' , request);
    }
	GetBankTransactions(request: EvosharePaginationRequest = null) { 	
        this.webApiService.send('ParticipantService', 'GetBankTransactions' , request);
    }
	NotificationSettingsGet() { 	
        this.webApiService.send('ParticipantService', 'NotificationSettingsGet' );
    }
	NotificationSettingsUpdate(request: NotificationSettingsModel = null) { 	
        this.webApiService.send('ParticipantService', 'NotificationSettingsUpdate' , request);
    }
	TerminatedAddressSave(request: TerminatedAddressSaveRequest = null) { 	
        this.webApiService.send('ParticipantService', 'TerminatedAddressSave' , request);
    }
	TerminatedAddressGet() { 	
        this.webApiService.send('ParticipantService', 'TerminatedAddressGet' );
    }
	 // async methods
	async updateProfileAsync(request: ParticipantUpdateProfileRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.UpdateProfile.bind(this), this.UpdateProfileEvent)(request);
	}
	async getPersonalAccountAsync(): Promise<ParticipantPersonalAccount> {
		return EventToAsyncDecorator.getInstance().bind(this.GetPersonalAccount.bind(this), this.GetPersonalAccountEvent)();
	}
	async clearPersonalAccountAsync(): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ClearPersonalAccount.bind(this), this.ClearPersonalAccountEvent)();
	}
	async updatePersonalAccountAsync(request: ParticipantPersonalAccount = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.UpdatePersonalAccount.bind(this), this.UpdatePersonalAccountEvent)(request);
	}
	async getBankAccountAsync(): Promise<ParticipantBankAccountViews> {
		return EventToAsyncDecorator.getInstance().bind(this.GetBankAccount.bind(this), this.GetBankAccountEvent)();
	}
	async updateBankAccountInfoAsync(request: ParticipantBankAccountViews = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.UpdateBankAccountInfo.bind(this), this.UpdateBankAccountInfoEvent)(request);
	}
	async getProfileInfoAsync(): Promise<ParticipantProfileInfo> {
		return EventToAsyncDecorator.getInstance().bind(this.GetProfileInfo.bind(this), this.GetProfileInfoEvent)();
	}
	async changeTowardAsync(request: ParticipantChangeRoleRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ChangeToward.bind(this), this.ChangeTowardEvent)(request);
	}
	async addCardAsync(request: AddCardRequest = null): Promise<AddCardResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.AddCard.bind(this), this.AddCardEvent)(request);
	}
	async getCardAsync(): Promise<Array<EmpyrUserCard>> {
		return EventToAsyncDecorator.getInstance().bind(this.GetCard.bind(this), this.GetCardEvent)();
	}
	async removeCardAsync(request: AddCardRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.RemoveCard.bind(this), this.RemoveCardEvent)(request);
	}
	async participantValidationPasswordAsync(): Promise<ParticipantValidationPasswordResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.ParticipantValidationPassword.bind(this), this.ParticipantValidationPasswordEvent)();
	}
	async getStoreCoordEmpyrAsync(request: EmpyrRqs = null): Promise<LocalStoreListResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetStoreCoordEmpyr.bind(this), this.GetStoreCoordEmpyrEvent)(request);
	}
	async getLocalStoreAsync(request: GetLocalStoreRequest = null): Promise<LocalStoreResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetLocalStore.bind(this), this.GetLocalStoreEvent)(request);
	}
	async getOnlineStoreAsync(request: StoreOnlineGetRequest = null): Promise<EvosharePaginationResponse<StoreOnlineResponse>> {
		return EventToAsyncDecorator.getInstance().bind(this.GetOnlineStore.bind(this), this.GetOnlineStoreEvent)(request);
	}
	async getOnlineStoreCategoryAsync(): Promise<Array<StoreOnlineCategory>> {
		return EventToAsyncDecorator.getInstance().bind(this.GetOnlineStoreCategory.bind(this), this.GetOnlineStoreCategoryEvent)();
	}
	async getOnlineStoreByIdAsync(request: GetStoreOnlineByIdRequest = null): Promise<StoreOnlineResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetOnlineStoreById.bind(this), this.GetOnlineStoreByIdEvent)(request);
	}
	async connectPlaidLoanAsync(request: PlaidRequest = null): Promise<PlaidApiResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.ConnectPlaidLoan.bind(this), this.ConnectPlaidLoanEvent)(request);
	}
	async getParticipantBalanceInfoAsync(): Promise<ParticipantBalanceResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetParticipantBalanceInfo.bind(this), this.GetParticipantBalanceInfoEvent)();
	}
	async getTransactionHistoryAsync(request: TransactionHistoryGetRequest = null): Promise<EvosharePaginationResponse<ParticipantTransactionResponse>> {
		return EventToAsyncDecorator.getInstance().bind(this.GetTransactionHistory.bind(this), this.GetTransactionHistoryEvent)(request);
	}
	async getActivateTripsListAsync(request: GetTripsActiveGetRequest = null): Promise<EvosharePaginationResponse<ParticipantTripsResponse>> {
		return EventToAsyncDecorator.getInstance().bind(this.GetActivateTripsList.bind(this), this.GetActivateTripsListEvent)(request);
	}
	async activateOnlineStoreAsync(request: ActivateOnlineStoreRequest = null): Promise<ActivateCashBackResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.ActivateOnlineStore.bind(this), this.ActivateOnlineStoreEvent)(request);
	}
	async activateLocalShopAsync(request: ActivateCashBackRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ActivateLocalShop.bind(this), this.ActivateLocalShopEvent)(request);
	}
	async addOnlineStoreFavoritAsync(request: OnlineStoreFavoriteRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.AddOnlineStoreFavorit.bind(this), this.AddOnlineStoreFavoritEvent)(request);
	}
	async removeOnlineStoreFavoritAsync(request: OnlineStoreFavoriteRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.RemoveOnlineStoreFavorit.bind(this), this.RemoveOnlineStoreFavoritEvent)(request);
	}
	async contributionHistoryAsync(request: ContributionsHistoryRequest = null): Promise<EvosharePaginationResponse<ParticipantContributionHistoryResponse>> {
		return EventToAsyncDecorator.getInstance().bind(this.ContributionHistory.bind(this), this.ContributionHistoryEvent)(request);
	}
	async contactUsAsync(request: CreateTicketSupportRequest = null): Promise<Task> {
		return EventToAsyncDecorator.getInstance().bind(this.ContactUs.bind(this), this.ContactUsEvent)(request);
	}
	async contributionsHistoryAsync(request: CreateTicketSupportRequest = null): Promise<Task> {
		return EventToAsyncDecorator.getInstance().bind(this.ContributionsHistory.bind(this), this.ContributionsHistoryEvent)(request);
	}
	async missingCashBackAsync(request: ParticipantMissingCashBackAdd = null): Promise<Task> {
		return EventToAsyncDecorator.getInstance().bind(this.MissingCashBack.bind(this), this.MissingCashBackEvent)(request);
	}
	async storeOnlineAutocompleteAsync(request: AutocompleteRequest = null): Promise<EvosharePaginationResponse<StoreOnlineAutocomplite>> {
		return EventToAsyncDecorator.getInstance().bind(this.StoreOnlineAutocomplete.bind(this), this.StoreOnlineAutocompleteEvent)(request);
	}
	async getStoreMaxCashBackAsync(): Promise<StoreMaxCashBackResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetStoreMaxCashBack.bind(this), this.GetStoreMaxCashBackEvent)();
	}
	async getBalanceInfoAsync(): Promise<BalanceInfoResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetBalanceInfo.bind(this), this.GetBalanceInfoEvent)();
	}
	async shoppingTripAutocompleteAsync(request: AutocompleteRequest = null): Promise<EvosharePaginationResponse<AutocompleteResponse<number>>> {
		return EventToAsyncDecorator.getInstance().bind(this.ShoppingTripAutocomplete.bind(this), this.ShoppingTripAutocompleteEvent)(request);
	}
	async missingCashBackShoppingTripAutocompleteAsync(request: ParticipantShoppingTripAutocompleteRequest = null): Promise<EvosharePaginationResponse<AutocompleteResponse<number>>> {
		return EventToAsyncDecorator.getInstance().bind(this.MissingCashBackShoppingTripAutocomplete.bind(this), this.MissingCashBackShoppingTripAutocompleteEvent)(request);
	}
	async redeemAsync(request: ParticipantRedeemRequest = null): Promise<BaseResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.Redeem.bind(this), this.RedeemEvent)(request);
	}
	async microsavigsAddAsync(request: MicrosavigsAddRequest = null): Promise<BaseResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.MicrosavigsAdd.bind(this), this.MicrosavigsAddEvent)(request);
	}
	async sendMobileAppAsync(request: SendMobileAppRequest = null): Promise<BaseResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.SendMobileApp.bind(this), this.SendMobileAppEvent)(request);
	}
	async getProviderAsync(request: GetProvidersRequest = null): Promise<EvosharePaginationResponse<ProviderInfoAutocomplite>> {
		return EventToAsyncDecorator.getInstance().bind(this.GetProvider.bind(this), this.GetProviderEvent)(request);
	}
	async studentLoanAddProviderAsync(request: AddProviderRequest = null): Promise<ProviderResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.StudentLoanAddProvider.bind(this), this.StudentLoanAddProviderEvent)(request);
	}
	async iraAddProviderAsync(request: AddProviderRequest = null): Promise<ProviderResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.IraAddProvider.bind(this), this.IraAddProviderEvent)(request);
	}
	async collegeLoanAddProviderAsync(request: AddProviderRequest = null): Promise<ProviderResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.CollegeLoanAddProvider.bind(this), this.CollegeLoanAddProviderEvent)(request);
	}
	async getBankTransactionsAsync(request: EvosharePaginationRequest = null): Promise<EvosharePaginationResponse<ParticipantTransactionResponse>> {
		return EventToAsyncDecorator.getInstance().bind(this.GetBankTransactions.bind(this), this.GetBankTransactionsEvent)(request);
	}
	async notificationSettingsGetAsync(): Promise<NotificationSettingsModel> {
		return EventToAsyncDecorator.getInstance().bind(this.NotificationSettingsGet.bind(this), this.NotificationSettingsGetEvent)();
	}
	async notificationSettingsUpdateAsync(request: NotificationSettingsModel = null): Promise<NotificationSettingsModel> {
		return EventToAsyncDecorator.getInstance().bind(this.NotificationSettingsUpdate.bind(this), this.NotificationSettingsUpdateEvent)(request);
	}
	async terminatedAddressSaveAsync(request: TerminatedAddressSaveRequest = null): Promise<Task> {
		return EventToAsyncDecorator.getInstance().bind(this.TerminatedAddressSave.bind(this), this.TerminatedAddressSaveEvent)(request);
	}
	async terminatedAddressGetAsync(): Promise<TerminatedAddressResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.TerminatedAddressGet.bind(this), this.TerminatedAddressGetEvent)();
	}
}