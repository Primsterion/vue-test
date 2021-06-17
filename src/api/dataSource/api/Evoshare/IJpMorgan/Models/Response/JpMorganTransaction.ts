import Array from '../../../../Evoshare/IJpMorgan/Models/Response/Array';
import JpMorganAccount from '../../../../Evoshare/IJpMorgan/Models/Response/JpMorganAccount';
import JpMorganException from '../../../../Evoshare/IJpMorgan/Models/Response/JpMorganException';

export default class JpMorganTransaction  {
	endToEndId?: string = '';
	transactionStatus?: string = '';
	paymentMethod?: string = '';
	initiationChannel?: string = '';
	accounts: Array<JpMorganAccount> = null;
	originalCreationDtTm: Date = null;
	valueDt?: string = '';
	debitCcy?: string = '';
	creditCcy?: string = '';
	lastUpdatedDtTm: Date = null;
	txnAmount: Single = null;
	exceptions: Array<JpMorganException> = null;
	jpmcRefId?: string = '';
	transactionRef: Object = null;
	messageId: Object = null;
	payDepInd: Object = null;
	debitAmt: Object = null;
	creditAmt: Object = null;
	xchgRate: Object = null;
	charges: Object = null;
	jpmcRefType: Object = null;
	constructor(obj?: Partial<JpMorganTransaction>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
