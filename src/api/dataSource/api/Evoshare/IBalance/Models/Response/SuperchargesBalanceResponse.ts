

export default class SuperchargesBalanceResponse  {
	LifeTime: number = 0;
	Balance: number = 0;
	ProjectFutureValue: number = 0;
	constructor(obj?: Partial<SuperchargesBalanceResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
