

export default class ParticipantValidationRequest  {
	Alias?: string = '';
	constructor(obj?: Partial<ParticipantValidationRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
