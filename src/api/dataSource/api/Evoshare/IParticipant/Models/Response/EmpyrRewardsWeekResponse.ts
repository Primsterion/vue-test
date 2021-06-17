import EmpyrRewardsResponse from '../../../../Evoshare/IParticipant/Models/Response/EmpyrRewardsResponse';

export default class EmpyrRewardsWeekResponse  {
	Sunday: Array<EmpyrRewardsResponse> = null;
	Monday: Array<EmpyrRewardsResponse> = null;
	Tuesday: Array<EmpyrRewardsResponse> = null;
	Wednesday: Array<EmpyrRewardsResponse> = null;
	Thursday: Array<EmpyrRewardsResponse> = null;
	Friday: Array<EmpyrRewardsResponse> = null;
	Saturday: Array<EmpyrRewardsResponse> = null;
	constructor(obj?: Partial<EmpyrRewardsWeekResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
