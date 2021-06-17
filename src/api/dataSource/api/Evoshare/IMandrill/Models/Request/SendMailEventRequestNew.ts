import GetVariableResponse from '../../../../Evoshare/INotificationVariable/Models/GetVariableResponse';

export default class SendMailEventRequestNew  {
	UserId: string = '';
	EventName?: string = '';
	IsCheckEmployer: boolean = false;
	Variable: GetVariableResponse = null;
	constructor(obj?: Partial<SendMailEventRequestNew>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
