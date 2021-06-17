

export default class EmpyrUserCard  {
	Id: number = 0;
	Number?: string = '';
	ExpMonth: number = 0;
	ExpYear: number = 0;
	Primary: boolean = false;
	CardState?: string = '';
	CardType?: string = '';
	ZipCode?: string = '';
	Receiving: boolean = false;
	constructor(obj?: Partial<EmpyrUserCard>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
