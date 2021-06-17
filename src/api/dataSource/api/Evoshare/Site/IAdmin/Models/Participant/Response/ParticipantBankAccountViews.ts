import ITowardOptionsType from '../../../../../../Evoshare/Site/IAdmin/Models/Enums/ITowardOptionsType';

export default class ParticipantBankAccountViews  {
	UserId?: string = '';
	ChangeToward: boolean = false;
	ForTheBenefitOf: boolean = false;
	BeneficiaryYearStart: number = 0;
	TowardOptionsType: ITowardOptionsType = null;
	FirstName?: string = '';
	LastName?: string = '';
	AccountNumber?: string = '';
	RoutingNumber?: string = '';
	IsBenefichiary: boolean = false;
	PlannedRetirementYear?: number = null;
	ForFinalCreditTo?: string = '';
	constructor(obj?: Partial<ParticipantBankAccountViews>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
