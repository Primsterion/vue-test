import ParticipantRegisterStep from '../../../../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantRegisterStep';

export default class ParticipantStep128 extends ParticipantRegisterStep {
	ClickRegisterFee: boolean = false;
	constructor(obj?: Partial<ParticipantStep128>) {
		super(obj);
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
