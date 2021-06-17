import ConfirmCodeRequest from '../../../../Evoshare/ITwillioService/Models/Request/ConfirmCodeRequest';

export default class ParticipantRedeemRequest extends ConfirmCodeRequest {
	Amount: number = 0;
	Reason?: string = '';
	constructor(obj?: Partial<ParticipantRedeemRequest>) {
		super(obj);
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
