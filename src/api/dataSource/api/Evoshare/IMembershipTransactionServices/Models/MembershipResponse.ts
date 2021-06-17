import IMembershipPlanType from '../../../Evoshare/IMembershipTransactionServices/Enums/IMembershipPlanType';
import IPaymentSystemType from '../../../Evoshare/IMembershipTransactionServices/Enums/IPaymentSystemType';
import MembershipSubscriptionType from '../../../Evoshare/IMembershipTransactionServices/Enums/MembershipSubscriptionType';

export default class MembershipResponse  {
	DateStart: Date = null;
	DateEnd: Date = null;
	Plan: IMembershipPlanType = null;
	PaymentSystem: IPaymentSystemType = null;
	SubscriptionType: MembershipSubscriptionType = null;
	Amount: number = 0;
	constructor(obj?: Partial<MembershipResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
