

export default class EmailNotification  {
	GeneralAccountUpdates: boolean = false;
	CashBackNotifications: boolean = false;
	ReferralNotifications: boolean = false;
	constructor(obj?: Partial<EmailNotification>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
