import IMembershipPlanType from '../../../Evoshare/IMembershipTransactionServices/Enums/IMembershipPlanType';
import IPaymentSystemType from '../../../Evoshare/IMembershipTransactionServices/Enums/IPaymentSystemType';

export default class MembershipFeeRequest  {
	Plan: IMembershipPlanType = null;
	PymentSystem: IPaymentSystemType = null;
	constructor(obj?: Partial<MembershipFeeRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
