import EmpyrRewardsWeekResponse from '../../../../Evoshare/IParticipant/Models/Response/EmpyrRewardsWeekResponse';

export default class EmpyrOfferDetailResponse  {
	EndDate: number = 0;
	DateAdded: number = 0;
	StartDate: number = 0;
	MaxActivations: number = 0;
	HasSchedule: boolean = false;
	ScheduleType?: string = '';
	Schedule: EmpyrRewardsWeekResponse = null;
	HasDefault: boolean = false;
	UserRedemptionRenewalIntervalType?: string = '';
	Cumulative: boolean = false;
	constructor(obj?: Partial<EmpyrOfferDetailResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
