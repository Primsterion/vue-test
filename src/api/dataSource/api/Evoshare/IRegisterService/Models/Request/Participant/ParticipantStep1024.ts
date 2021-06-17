import ParticipantRegisterStep from '../../../../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantRegisterStep';

export default class ParticipantStep1024 extends ParticipantRegisterStep {
	
	constructor(obj?: Partial<ParticipantStep1024>) {
		super(obj);
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
