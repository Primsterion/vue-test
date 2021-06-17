import ParticipantRegisterStep from '../../../../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantRegisterStep';

export default class ParticipantStep2 extends ParticipantRegisterStep {
	FirstName?: string = '';
	LastName?: string = '';
	DateOfBirth: Date = null;
	SSN?: string = '';
	PhoneNumber?: string = '';
	Email?: string = '';
	ZipCode?: string = '';
	Password?: string = '';
	constructor(obj?: Partial<ParticipantStep2>) {
		super(obj);
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
