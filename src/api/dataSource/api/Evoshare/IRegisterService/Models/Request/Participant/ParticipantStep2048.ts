import ParticipantRegisterStep from '../../../../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantRegisterStep';

export default class ParticipantStep2048 extends ParticipantRegisterStep {
	
	constructor(obj?: Partial<ParticipantStep2048>) {
		super(obj);
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
