import ExtensionType from '../../../../Evoshare/IBalance/Models/ExtensionType';

export default class ParticipantTripsResponse  {
	DateCreated: Date = null;
	Merchant?: string = '';
	TripId: number = 0;
	BrowserExtension: ExtensionType = null;
	AffiliateResponse?: string = '';
	CashBackSum: number = 0;
	IsCompleted: boolean = false;
	constructor(obj?: Partial<ParticipantTripsResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
