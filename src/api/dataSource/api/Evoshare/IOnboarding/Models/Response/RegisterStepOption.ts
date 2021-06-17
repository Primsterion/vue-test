import StepComment from '../../../../Evoshare/IOnboarding/Models/Response/StepComment';

export default class RegisterStepOption  {
	IsShow: boolean = false;
	StepComment: StepComment = null;
	PersonalCheckingSkipable: boolean = false;
	CompanyName?: string = '';
	PartnerPortalUrl?: string = '';
	UrlCaption?: string = '';
	constructor(obj?: Partial<RegisterStepOption>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
