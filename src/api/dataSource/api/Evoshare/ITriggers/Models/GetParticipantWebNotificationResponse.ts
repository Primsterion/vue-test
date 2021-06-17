import WebNotificationResponse from '../../../Evoshare/ITriggers/Models/WebNotificationResponse';
import PageResponse from '../../../Evoshare/Utilites/Extension/Models/PageResponse';

export default class GetParticipantWebNotificationResponse  {
	CountNewNotification: number = 0;
	Items: Array<WebNotificationResponse> = null;
	Page: PageResponse = null;
	constructor(obj?: Partial<GetParticipantWebNotificationResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
