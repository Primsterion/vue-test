

export default class WebNotificationResponse  {
	Id: string = '';
	Image?: string = '';
	Title?: string = '';
	Body?: string = '';
	DateCreated: Date = null;
	IsView: boolean = false;
	UrlLink?: string = '';
	constructor(obj?: Partial<WebNotificationResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
