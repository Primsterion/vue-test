import ConfirmCodeRequest from '../../../Evoshare/ITwillioService/Models/Request/ConfirmCodeRequest';

export default class SendRefundRequest  {
	TransactionId: string = '';
	CodeConfirm: ConfirmCodeRequest = null;
	constructor(obj?: Partial<SendRefundRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
