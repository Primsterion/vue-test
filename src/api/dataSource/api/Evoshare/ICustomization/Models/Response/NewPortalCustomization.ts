import BannerCustomizationModel from '../../../../Evoshare/ICustomization/Models/Response/BannerCustomizationModel';

export default class NewPortalCustomization  {
	BannerForTablet: BannerCustomizationModel = null;
	Baner: BannerCustomizationModel = null;
	Mobile: BannerCustomizationModel = null;
	Logo: BannerCustomizationModel = null;
	MainColor?: string = '';
	FramesColor?: string = '';
	FramesHooverColor?: string = '';
	constructor(obj?: Partial<NewPortalCustomization>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
