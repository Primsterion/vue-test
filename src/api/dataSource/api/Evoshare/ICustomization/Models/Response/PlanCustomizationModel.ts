import BannerCustomizationModel from '../../../../Evoshare/ICustomization/Models/Response/BannerCustomizationModel';

export default class PlanCustomizationModel  {
	BannerDesktop: BannerCustomizationModel = null;
	BannerModile: BannerCustomizationModel = null;
	BannerEmail: BannerCustomizationModel = null;
	BannerExtension: BannerCustomizationModel = null;
	constructor(obj?: Partial<PlanCustomizationModel>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
