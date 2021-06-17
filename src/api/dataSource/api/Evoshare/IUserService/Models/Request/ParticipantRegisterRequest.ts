import IUserRole from '../../../../Evoshare/Site/IAdmin/Models/Enums/IUserRole';
import ITowardOptionsType from '../../../../Evoshare/Site/IAdmin/Models/Enums/ITowardOptionsType';
import ConfirmCodeRequest from '../../../../Evoshare/ITwillioService/Models/Request/ConfirmCodeRequest';

export default class ParticipantRegisterRequest  {
	Alias?: string = '';
	FirstName?: string = '';
	LastName?: string = '';
	EmailAddress?: string = '';
	ZipCode?: string = '';
	DateOfBirth?: Date = null;
	PhoneNumber?: string = '';
	Password?: string = '';
	ConfirmPassword?: string = '';
	RetirementYear?: number = null;
	SSN?: string = '';
	Role: IUserRole = null;
	TowardOptions: ITowardOptionsType = null;
	TwillioCode: ConfirmCodeRequest = null;
	constructor(obj?: Partial<ParticipantRegisterRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
