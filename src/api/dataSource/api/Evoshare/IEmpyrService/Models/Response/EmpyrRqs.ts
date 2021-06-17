

export default class EmpyrRqs  {
	EmpyrLogin?: string = '';
	Query?: string = '';
	QueryLocation?: string = '';
	City?: string = '';
	Find: Array<string> = null;
	PriceRange: Array<string> = null;
	Status: boolean = false;
	PageSize: number = 0;
	PageCurrent: number = 0;
	Sort?: string = '';
	DateTimeClient: Date = null;
	Latitude?: number = null;
	Longitude?: number = null;
	Distance: number = 0;
	AllRecord: boolean = false;
	constructor(obj?: Partial<EmpyrRqs>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
