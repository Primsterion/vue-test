import RegistrationFeePeriodType from '../../Evoshare/DomainModel/RegistrationFeePeriodType';

export default class EmployeesRegistrationFeeModel  {
	Price?: number = null;
	RegistrationFeePeriodType: RegistrationFeePeriodType = null;
	ChargeBeePlanId?: string = '';
	constructor(obj?: Partial<EmployeesRegistrationFeeModel>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
