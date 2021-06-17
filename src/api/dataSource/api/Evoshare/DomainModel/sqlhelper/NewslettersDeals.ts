

export default class NewslettersDeals  {
	WeekendNews: boolean = false;
	EmmaEmails: boolean = false;
	DailyNewsletter: boolean = false;
	constructor(obj?: Partial<NewslettersDeals>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
