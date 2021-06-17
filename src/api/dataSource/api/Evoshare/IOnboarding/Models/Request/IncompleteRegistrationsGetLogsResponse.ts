import ParticipantRegisterStep from '../../../../Evoshare/IOnboarding/Models/Request/ParticipantRegisterStep';

export default class IncompleteRegistrationsGetLogsResponse  {
	StepNumber: ParticipantRegisterStep = null;
	Model: Object = null;
	constructor(obj?: Partial<IncompleteRegistrationsGetLogsResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
