import ParticipantRegisterStep from '../../../../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantRegisterStep';

export default class ParticipantStep4 extends ParticipantRegisterStep {
	SuccescConfirmCode: boolean = false;
	constructor(obj?: Partial<ParticipantStep4>) {
		super(obj);
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
