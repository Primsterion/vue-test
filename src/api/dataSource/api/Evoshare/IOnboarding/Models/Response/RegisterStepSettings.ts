import Array from '../../../../Evoshare/IOnboarding/Models/Response/Array';
import Towardlist from '../../../../Evoshare/IOnboarding/Models/Response/Towardlist';
import Participantcustomization from '../../../../Evoshare/IOnboarding/Models/Response/Participantcustomization';
import RegisterFee from '../../../../Evoshare/IOnboarding/Models/Response/RegisterFee';
import MicrosavingsCustomization from '../../../../Evoshare/IOnboarding/Models/Response/MicrosavingsCustomization';
import IRetirementPlanType from '../../../../Evoshare/IOnboarding/Models/Response/IRetirementPlanType';

export default class RegisterStepSettings  {
	TowardList: Array<Towardlist> = null;
	ParticipantCustomization: Participantcustomization = null;
	RegisterFee: RegisterFee = null;
	Microsavings: MicrosavingsCustomization = null;
	AllowRetirementPlan: IRetirementPlanType = null;
	constructor(obj?: Partial<RegisterStepSettings>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
