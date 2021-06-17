import EmployeesRegistrationFeeModel from '../../Evoshare/DomainModel/EmployeesRegistrationFeeModel';

export default class ChargeEmployeesRegistrationFeeSetting  {
	ChargeEmployeesRegistrationFeeValue?: number = null;
	EmployeesRegistrationFeePlans: Array<EmployeesRegistrationFeeModel> = null;
	constructor(obj?: Partial<ChargeEmployeesRegistrationFeeSetting>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
