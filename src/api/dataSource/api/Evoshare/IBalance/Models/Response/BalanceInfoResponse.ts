

export default class BalanceInfoResponse  {
	OneOnlineCashBack: boolean = false;
	OneOfflineCashBack: boolean = false;
	OneMicrosavings: boolean = false;
	constructor(obj?: Partial<BalanceInfoResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
