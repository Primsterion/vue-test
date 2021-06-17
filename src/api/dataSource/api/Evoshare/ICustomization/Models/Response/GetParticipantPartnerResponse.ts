

export default class GetParticipantPartnerResponse  {
	PartnerCompanyName?: string = '';
	PartnerPublicherId?: string = '';
	PartnerEmail?: string = '';
	AdviserPublisherId?: string = '';
	AdviserEmail?: string = '';
	AdviserCompanyName?: string = '';
	EmployerProfileId?: string = '';
	EmployerEmail?: string = '';
	constructor(obj?: Partial<GetParticipantPartnerResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
