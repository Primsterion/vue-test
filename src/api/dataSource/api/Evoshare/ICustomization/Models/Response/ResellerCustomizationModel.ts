import PlanCustomizationModel from '../../../../Evoshare/ICustomization/Models/Response/PlanCustomizationModel';
import NewPortalCustomization from '../../../../Evoshare/ICustomization/Models/Response/NewPortalCustomization';

export default class ResellerCustomizationModel  {
	ResellerName?: string = '';
	IsContributions: boolean = false;
	ResellerDarkLogo?: string = '';
	ResellerLightLogo?: string = '';
	ResellerSearchLogo?: string = '';
	ResellerSettingLogo: number = 0;
	EmployerLogo?: string = '';
	EmployerName?: string = '';
	EmployerAlias?: string = '';
	LandingPageMessage?: string = '';
	SidebarColor?: string = '';
	HeaderColor?: string = '';
	TextColor?: string = '';
	PartnerTowards: number = 0;
	IsAdviserCustomization: boolean = false;
	IsViewImpulseSavings: boolean = false;
	PlanSponsor: PlanCustomizationModel = null;
	PlanParticipant: PlanCustomizationModel = null;
	NewPortal: NewPortalCustomization = null;
	IsCustomisationPartnerActive?: boolean = false;
	constructor(obj?: Partial<ResellerCustomizationModel>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
