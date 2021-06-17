

export default class IncompleteRegistrationsWriteRequest  {
	StepNumber: number = 0;
	Model: Object = null;
	constructor(obj?: Partial<IncompleteRegistrationsWriteRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
