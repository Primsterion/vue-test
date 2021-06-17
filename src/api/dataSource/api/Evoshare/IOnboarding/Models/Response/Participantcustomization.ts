import IUserIdentifier from '../../../../Evoshare/Site/IAdmin/Models/Enums/IUserIdentifier';

export default class Participantcustomization  {
	IsFamilyMembers: boolean = false;
	IsWealthMenager: boolean = false;
	RothTraditional: boolean = false;
	SavingToward: number = 0;
	UserIdentifier: IUserIdentifier = null;
	constructor(obj?: Partial<Participantcustomization>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
