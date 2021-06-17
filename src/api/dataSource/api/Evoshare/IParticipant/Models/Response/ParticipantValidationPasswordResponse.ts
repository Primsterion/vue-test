

export default class ParticipantValidationPasswordResponse  {
	ZipCode?: string = '';
	FirstName?: string = '';
	LastName?: string = '';
	DateOfBirth?: Date = null;
	Email?: string = '';
	constructor(obj?: Partial<ParticipantValidationPasswordResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
