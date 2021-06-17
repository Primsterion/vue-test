import RegisterStepSettings from '../../../../Evoshare/IOnboarding/Models/Response/RegisterStepSettings';
import RegisterStepOption from '../../../../Evoshare/IOnboarding/Models/Response/RegisterStepOption';

export default class RegisterStepUpdateRequest  {
	Id?: number = null;
	StepId: number = 0;
	StepNumber: number = 0;
	JsonSettings: RegisterStepSettings = null;
	JsonOptions: RegisterStepOption = null;
	JsonStepText?: string = '';
	constructor(obj?: Partial<RegisterStepUpdateRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
