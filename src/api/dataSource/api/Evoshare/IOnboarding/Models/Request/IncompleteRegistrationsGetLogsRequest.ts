import ParticipantRegisterStep from '../../../../Evoshare/IOnboarding/Models/Request/ParticipantRegisterStep';

export default class IncompleteRegistrationsGetLogsRequest  {
	StepNumber?: ParticipantRegisterStep = null;
	constructor(obj?: Partial<IncompleteRegistrationsGetLogsRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
