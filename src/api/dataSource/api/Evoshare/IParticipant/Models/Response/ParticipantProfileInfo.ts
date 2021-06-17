

export default class ParticipantProfileInfo  {
	FirstName?: string = '';
	LastName?: string = '';
	Email?: string = '';
	PhoneNumber?: string = '';
	ZipCode?: string = '';
	DateOfBirth?: Date = null;
	SSN?: string = '';
	EmployerCompanyName?: string = '';
	constructor(obj?: Partial<ParticipantProfileInfo>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
