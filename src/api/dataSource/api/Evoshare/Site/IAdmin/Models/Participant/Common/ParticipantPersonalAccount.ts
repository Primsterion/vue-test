

export default class ParticipantPersonalAccount  {
	FirstName?: string = '';
	LastName?: string = '';
	AccountNumber?: string = '';
	RoutingNumber?: string = '';
	IAuthorize: boolean = false;
	constructor(obj?: Partial<ParticipantPersonalAccount>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
