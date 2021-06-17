

export default class CreateTicketSupportRequest  {
	Message?: string = '';
	constructor(obj?: Partial<CreateTicketSupportRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
