import TransactionStatus from '../../../../Evoshare/IBalance/Models/Response/TransactionStatus';

export default class ParticipantContributionHistoryResponse  {
	DateCreated: Date = null;
	Amount: number = 0;
	TowardName?: string = '';
	Status: TransactionStatus = null;
	DeductionSystemData?: string = '';
	DateMade?: Date = null;
	DateTransfer?: Date = null;
	constructor(obj?: Partial<ParticipantContributionHistoryResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
