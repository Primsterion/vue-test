import VariableNotification from '../../../Evoshare/INotificationVariable/Models/VariableNotification';

export default class VariableNotificationRequest  {
	UserId: string = '';
	Amount: number = 0;
	CashBack: number = 0;
	Balance: number = 0;
	AdditionalParams: Array<VariableNotification> = null;
	constructor(obj?: Partial<VariableNotificationRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
