

export default class AddTransactionRequest  {
	CurrentUserId?: string = '';
	SellerId: string = '';
	BuyerId: string = '';
	IsConfirmFile: boolean = false;
	FullCashBack: boolean = false;
	AffiliateTransactionId?: string = '';
	StoreName?: string = '';
	AffiliateNetwork?: string = '';
	TripId?: string = '';
	OrderNumber?: string = '';
	Description?: string = '';
	HotelName?: string = '';
	CashBack: number = 0;
	Amount: number = 0;
	DatePay: Date = null;
	DateCreated: Date = null;
	constructor(obj?: Partial<AddTransactionRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
