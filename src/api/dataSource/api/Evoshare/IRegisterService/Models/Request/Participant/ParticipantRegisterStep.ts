

export default class ParticipantRegisterStep  {
	Alias?: string = '';
	Action?: string = '';
	constructor(obj?: Partial<ParticipantRegisterStep>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
