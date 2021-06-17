import ParticipantRegisterStep from '../../../../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantRegisterStep';

export default class ParticipantStep256 extends ParticipantRegisterStep {
	NotFullRegister: boolean = false;
	constructor(obj?: Partial<ParticipantStep256>) {
		super(obj);
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
