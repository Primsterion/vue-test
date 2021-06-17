

export default class RegisterStepGetRequest  {
	Alias?: string = '';
	EmployerProfileId?: string = '';
	constructor(obj?: Partial<RegisterStepGetRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
