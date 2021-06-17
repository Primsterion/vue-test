

export default class StoreOnlineResponse  {
	Id?: number = null;
	Name?: string = '';
	Url?: string = '';
	Description?: string = '';
	UpTo?: string = '';
	SaleDescription?: string = '';
	CategoryId: number = 0;
	CategoryName?: string = '';
	IsFavourite: boolean = false;
	CategoryList?: string = '';
	ImageAlt?: string = '';
	constructor(obj?: Partial<StoreOnlineResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
