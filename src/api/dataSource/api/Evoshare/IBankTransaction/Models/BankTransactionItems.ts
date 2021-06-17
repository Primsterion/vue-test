import JpMorganStatus from '../../../Evoshare/DomainModel/JpMorganStatus';
import TypeTransaction from '../../../Evoshare/DomainModel/TypeTransaction';

export default class BankTransactionItems  {
	Id: string = '';
	DateCreated: Date = null;
	Email?: string = '';
	Status: JpMorganStatus = null;
	Type: TypeTransaction = null;
	Ammount: number = 0;
	SentAmmount?: number = null;
	DateLastCheck?: Date = null;
	IsDebit: boolean = false;
	TraceResponse?: string = '';
	constructor(obj?: Partial<BankTransactionItems>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
