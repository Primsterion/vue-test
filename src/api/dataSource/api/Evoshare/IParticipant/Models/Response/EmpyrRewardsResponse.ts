

export default class EmpyrRewardsResponse  {
	Id: number = 0;
	StartsAt?: string = '';
	EndsAt?: string = '';
	Discount: number = 0;
	Active?: string = '';
	DayOfWeek?: string = '';
	constructor(obj?: Partial<EmpyrRewardsResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
