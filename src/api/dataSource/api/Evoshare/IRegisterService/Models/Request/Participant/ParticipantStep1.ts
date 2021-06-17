import IUserRole from '../../../../../Evoshare/Site/IAdmin/Models/Enums/IUserRole';
import ITowardOptionsType from '../../../../../Evoshare/Site/IAdmin/Models/Enums/ITowardOptionsType';
import ParticipantRegisterStep from '../../../../../Evoshare/IRegisterService/Models/Request/Participant/ParticipantRegisterStep';

export default class ParticipantStep1 extends ParticipantRegisterStep {
	Role: IUserRole = null;
	TowardOptions: ITowardOptionsType = null;
	constructor(obj?: Partial<ParticipantStep1>) {
		super(obj);
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
