import ParticipantRegisterStep from '../../../../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantRegisterStep';

export default class ParticipantStep32 extends ParticipantRegisterStep {
	ClickInstallBrowser: boolean = false;
	constructor(obj?: Partial<ParticipantStep32>) {
		super(obj);
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
