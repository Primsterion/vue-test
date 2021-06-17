import Step from '../../../../Evoshare/IOnboarding/Models/Response/Step';

export default class RegisterStepResponse  {
	Count: number = 0;
	Steps: Array<Step> = null;
	constructor(obj?: Partial<RegisterStepResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
