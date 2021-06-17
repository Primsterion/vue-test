import ParticipantRegisterStep from '../../../../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantRegisterStep';

export default class ParticipantStep16 extends ParticipantRegisterStep {
	Nothing: boolean = false;
	MicrosavingsAmount?: number = null;
	RetirementYear: number = 0;
	Percent: number = 0;
	constructor(obj?: Partial<ParticipantStep16>) {
		super(obj);
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
