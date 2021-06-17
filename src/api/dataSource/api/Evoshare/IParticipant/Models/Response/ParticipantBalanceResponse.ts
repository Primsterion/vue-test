import GetBalanceCashBackResponse from '../../../../Evoshare/IBalance/Models/Response/GetBalanceCashBackResponse';
import SuperchargesBalanceResponse from '../../../../Evoshare/IBalance/Models/Response/SuperchargesBalanceResponse';

export default class ParticipantBalanceResponse  {
	ProjectFutureValueOnlyEmergency?: number = null;
	MicrosavingsProjectFutureValue?: number = null;
	DateOfBirthTime: Date = null;
	PlannedRetirementYear: number = 0;
	EvoshareBalanceSum: number = 0;
	EvoshareBalanceSumFact: number = 0;
	Percent: number = 0;
	FutureValueForActivateInStoreOffer: number = 0;
	ConvertDolarToPoint: number = 0;
	CashBack: GetBalanceCashBackResponse = null;
	Microsavings: SuperchargesBalanceResponse = null;
	constructor(obj?: Partial<ParticipantBalanceResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
