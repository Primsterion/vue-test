import ParticipantRegisterStep from '../../../../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantRegisterStep';

export default class ParticipantStep512 extends ParticipantRegisterStep {
	
	constructor(obj?: Partial<ParticipantStep512>) {
		super(obj);
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
