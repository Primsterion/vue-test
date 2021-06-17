import IUserIdentifier from '../../../../Evoshare/Site/IAdmin/Models/Enums/IUserIdentifier';
import IEmployerPayrollPeriod from '../../../../Evoshare/Site/IAdmin/Models/Enums/IEmployerPayrollPeriod';
import IRetirementPlanType from '../../../../Evoshare/IOnboarding/Models/Response/IRetirementPlanType';
import IEnableIndividualFundsType from '../../../../Evoshare/IOnboarding/Models/Response/IEnableIndividualFundsType';
import ResellerCustomizationModel from '../../../../Evoshare/ICustomization/Models/Response/ResellerCustomizationModel';

export default class ParticipantCustomizationResponse  {
	UserIdentifier: IUserIdentifier = null;
	IEmployerPayrollPeriod: IEmployerPayrollPeriod = null;
	AllowRetirementPlan: IRetirementPlanType = null;
	RothTraditional: boolean = false;
	SavingToward: number = 0;
	IsFamilyMembers: boolean = false;
	IsWealthMenager: boolean = false;
	Microsavings: IEnableIndividualFundsType = null;
	IsHideTenPointsReached: boolean = false;
	IsContributionHistory: boolean = false;
	IsPersonalChecking: boolean = false;
	Customization: ResellerCustomizationModel = null;
	constructor(obj?: Partial<ParticipantCustomizationResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
