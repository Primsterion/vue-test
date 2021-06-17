import ParticipantRegisterStep from '../../../../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantRegisterStep';

export default class ParticipantStep64 extends ParticipantRegisterStep {
	EmpyrLogin?: string = '';
	EmpyrUserId?: string = '';
	CardNumber?: string = '';
	ConditionsAccept: boolean = false;
	constructor(obj?: Partial<ParticipantStep64>) {
		super(obj);
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
