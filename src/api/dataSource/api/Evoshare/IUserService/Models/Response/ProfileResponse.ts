import IUserExtensionType from '../../../../Evoshare/Site/IAdmin/Models/Enums/IUserExtensionType';
import IUserRole from '../../../../Evoshare/Site/IAdmin/Models/Enums/IUserRole';
import ParticipantProfileResponse from '../../../../Evoshare/IUserService/Models/Response/ParticipantProfileResponse';

export default class ProfileResponse  {
	Id: string = '';
	Email?: string = '';
	IsAuthorized: boolean = false;
	IsTempPassword: boolean = false;
	IsApi: boolean = false;
	IsFamily: boolean = false;
	ExtensionToken?: string = '';
	ExtensionType: IUserExtensionType = null;
	Role: IUserRole = null;
	Roles: Array<string> = null;
	Participant: ParticipantProfileResponse = null;
	constructor(obj?: Partial<ProfileResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
