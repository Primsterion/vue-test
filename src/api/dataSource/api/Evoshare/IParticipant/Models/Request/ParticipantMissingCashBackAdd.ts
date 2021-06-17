import MissingCashBackType from '../../../../Evoshare/IDictionary/Models/MissingCashBack/MissingCashBackType';

export default class ParticipantMissingCashBackAdd  {
	StoreName?: string = '';
	DateOfPurchase: Date = null;
	OrderNumber?: string = '';
	ShoppingTripNumber?: string = '';
	TransactionCode?: string = '';
	OrderSubtotal: number = 0;
	OrderComments?: string = '';
	CashBackType: MissingCashBackType = null;
	constructor(obj?: Partial<ParticipantMissingCashBackAdd>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
