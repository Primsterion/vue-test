

export default class GetBalanceCashBackResponse  {
	EvoshareBalanceFact: number = 0;
	EvoshareBalance: number = 0;
	Pending: number = 0;
	Approved: number = 0;
	constructor(obj?: Partial<GetBalanceCashBackResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
