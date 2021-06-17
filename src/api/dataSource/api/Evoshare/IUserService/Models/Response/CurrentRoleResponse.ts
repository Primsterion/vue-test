import IUserRole from '../../../../Evoshare/Site/IAdmin/Models/Enums/IUserRole';
import ITowardOptionsType from '../../../../Evoshare/Site/IAdmin/Models/Enums/ITowardOptionsType';

export default class CurrentRoleResponse  {
	Role: IUserRole = null;
	TowardOptions: ITowardOptionsType = null;
	constructor(obj?: Partial<CurrentRoleResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
