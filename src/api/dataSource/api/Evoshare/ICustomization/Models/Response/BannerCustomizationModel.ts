

export default class BannerCustomizationModel  {
	BannerUrl?: string = '';
	SiteUrl?: string = '';
	constructor(obj?: Partial<BannerCustomizationModel>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
