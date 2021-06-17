import TypeTransaction from '../../../Evoshare/DomainModel/TypeTransaction';
import PageRequest from '../../../Evoshare/Utilites/Extension/Models/PageRequest';

export default class BankTransactionSearchRequest  {
	Debit?: boolean = false;
	DateStart?: Date = null;
	DateEnd?: Date = null;
	Type?: TypeTransaction = null;
	IncludeTest?: boolean = false;
	Search?: string = '';
	Page: PageRequest = null;
	constructor(obj?: Partial<BankTransactionSearchRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
