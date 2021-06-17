import ITowardOptionsType from '../../../../../../Evoshare/Site/IAdmin/Models/Enums/ITowardOptionsType';
import ClearProfileEdit from '../../../../../../Evoshare/Site/IAdmin/Models/Participant/Request/ClearProfileEdit';
import INotificationSettings from '../../../../../../Evoshare/Site/IAdmin/Models/Enums/INotificationSettings';
import TerminateEmployeeType from '../../../../../../Evoshare/Site/IAdmin/Models/Participant/Request/TerminateEmployeeType';

export default class ParticipantUpdateProfileRequest  {
	UserId?: string = '';
	EmployerId?: string = '';
	FirstName?: string = '';
	LastName?: string = '';
	Email?: string = '';
	PlannedRetirementYear?: number = null;
	Percent?: number = null;
	ZipCode?: string = '';
	Company?: string = '';
	PasswordApiReg?: string = '';
	SMSCommunicationAllowed?: boolean = false;
	SSN?: string = '';
	PhoneNumber?: string = '';
	EmpyrUserId?: string = '';
	EmpyrLogin?: string = '';
	SalesChannelId?: number = null;
	ProviderId?: number = null;
	ReferralUser?: string = '';
	ReferralCode?: string = '';
	DateOfBirth?: Date = null;
	TowardOptionsType: ITowardOptionsType = null;
	SchedulerSuperchargeAmount?: number = null;
	ImpulseSavingsEnable?: boolean = false;
	SchedulerSuperchargeStart?: Date = null;
	Cleal: ClearProfileEdit = null;
	NotificationSettings?: INotificationSettings = null;
	TerminateEmployeeType: TerminateEmployeeType = null;
	constructor(obj?: Partial<ParticipantUpdateProfileRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
