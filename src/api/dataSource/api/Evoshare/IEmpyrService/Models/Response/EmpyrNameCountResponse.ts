

export default class EmpyrNameCountResponse  {
	Name?: string = '';
	Count: number = 0;
	constructor(obj?: Partial<EmpyrNameCountResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
