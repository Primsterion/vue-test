import IEnableIndividualFundsType from '../../../../Evoshare/IOnboarding/Models/Response/IEnableIndividualFundsType';

export default class MicrosavingsCustomization  {
	Enable: IEnableIndividualFundsType = null;
	APR: number = 0;
	constructor(obj?: Partial<MicrosavingsCustomization>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
