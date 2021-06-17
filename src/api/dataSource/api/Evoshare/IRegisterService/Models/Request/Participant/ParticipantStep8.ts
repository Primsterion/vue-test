import ParticipantRegisterStep from '../../../../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantRegisterStep';

export default class ParticipantStep8 extends ParticipantRegisterStep {
	AccountNumber?: string = '';
	RoutingNumber?: string = '';
	FirstName?: string = '';
	LastName?: string = '';
	constructor(obj?: Partial<ParticipantStep8>) {
		super(obj);
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
