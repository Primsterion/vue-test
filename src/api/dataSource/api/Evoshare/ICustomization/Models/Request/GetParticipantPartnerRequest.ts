

export default class GetParticipantPartnerRequest  {
	Alias?: string = '';
	UserId?: string = '';
	EmployerId?: string = '';
	ParticipantId?: string = '';
	constructor(obj?: Partial<GetParticipantPartnerRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
