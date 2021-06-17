import UserSystemRole from '../../../Evoshare/INotificationVariable/Models/UserSystemRole';
import VariableNotification from '../../../Evoshare/INotificationVariable/Models/VariableNotification';

export default class GetVariableResponse  {
	AllVariable: Map<UserSystemRole,Array<VariableNotification>> = null;
	constructor(obj?: Partial<GetVariableResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
