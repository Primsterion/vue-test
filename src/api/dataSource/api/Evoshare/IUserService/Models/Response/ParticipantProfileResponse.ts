import ProviderInfo from '../../../../Evoshare/Utilites/ProviderInfo';
import BankAccountCorectType from '../../../../Evoshare/DomainModel/BankAccountCorectType';
import TerminateEmployeeType from '../../../../Evoshare/DomainModel/TerminateEmployeeType';

export default class ParticipantProfileResponse  {
	PhoneNumber?: string = '';
	RegisterComplited: boolean = false;
	FirstName?: string = '';
	LastName?: string = '';
	EmployerAlias?: string = '';
	ZipCode?: string = '';
	LinkedCardCount: number = 0;
	Percent: number = 0;
	MicrosavingsAmount?: number = null;
	MicrosavingsEnable: boolean = false;
	EmployerName?: string = '';
	IsTerminate: boolean = false;
	DateOfBirth?: Date = null;
	Provider: ProviderInfo = null;
	IsEmployeesRegisterFee: boolean = false;
	IsPersonalBankAccountInfoCorrect: BankAccountCorectType = null;
	PedndigMicrosavingsOverLimit: boolean = false;
	TerminateEmployeeType: TerminateEmployeeType = null;
	TerminatedDate?: Date = null;
	constructor(obj?: Partial<ParticipantProfileResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
