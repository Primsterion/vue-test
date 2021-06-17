

export default class EmpyrSimpleHoursResponse  {
	Sunday?: string = '';
	Monday?: string = '';
	Tuesday?: string = '';
	Wednesday?: string = '';
	Thursday?: string = '';
	Friday?: string = '';
	Saturday?: string = '';
	constructor(obj?: Partial<EmpyrSimpleHoursResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
