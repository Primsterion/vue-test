import NotificationType from '../../../Evoshare/ServiceBusModels/Models/Topic/EmailTrigger/NotificationType';
import VariableNotificationRequest from '../../../Evoshare/INotificationVariable/Models/VariableNotificationRequest';

export default class TriggerMessageRequest extends VariableNotificationRequest {
	EventName?: string = '';
	IsCheckEmployer: boolean = false;
	NotificationType: NotificationType = null;
	constructor(obj?: Partial<TriggerMessageRequest>) {
		super(obj);
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
