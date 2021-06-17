import TransactionStatus from '../../../../Evoshare/IBalance/Models/Response/TransactionStatus';

export default class ParticipantTransactionResponse  {
	Id: string = '';
	TransactionDate: Date = null;
	PostedDate: Date = null;
	Store?: string = '';
	Info?: string = '';
	Amount?: number = null;
	CashBack?: number = null;
	Status: TransactionStatus = null;
	IsConfirm: boolean = false;
	IsTravel: boolean = false;
	constructor(obj?: Partial<ParticipantTransactionResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
