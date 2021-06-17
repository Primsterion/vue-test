import RegisterStepSettings from '../../../../Evoshare/IOnboarding/Models/Response/RegisterStepSettings';
import RegisterStepOption from '../../../../Evoshare/IOnboarding/Models/Response/RegisterStepOption';

export default class Step  {
	Id: number = 0;
	StepId: number = 0;
	StepNumber: number = 0;
	JsonSettings: RegisterStepSettings = null;
	JsonOptions: RegisterStepOption = null;
	JsonStepText?: string = '';
	constructor(obj?: Partial<Step>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
