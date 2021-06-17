import TransactionType from '../../../../Evoshare/IBalance/Models/Request/TransactionType';
import TransactionHistoryOrderBy from '../../../../Evoshare/IBalance/Models/Request/TransactionHistoryOrderBy';
import PageRequest from '../../../../Evoshare/Utilites/Extension/Models/PageRequest';

export default class TransactionHistoryGetRequest  {
	DateStart?: Date = null;
	DateEnd?: Date = null;
	TransactionType: TransactionType = null;
	OrderBy: TransactionHistoryOrderBy = null;
	Acceding: boolean = false;
	Fee: boolean = false;
	EmergencyWithdrawals: boolean = false;
	Page: PageRequest = null;
	constructor(obj?: Partial<TransactionHistoryGetRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
