import TextMessage from '../../../Evoshare/DomainModel/sqlhelper/TextMessage';
import EmailNotification from '../../../Evoshare/DomainModel/sqlhelper/EmailNotification';
import NewslettersDeals from '../../../Evoshare/DomainModel/sqlhelper/NewslettersDeals';

export default class NotificationSettingsModel  {
	TextMessage: TextMessage = null;
	EmailNotification: EmailNotification = null;
	NewslettersDeals: NewslettersDeals = null;
	constructor(obj?: Partial<NotificationSettingsModel>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
