import ProviderType from '../../../../Evoshare/DomainModel/ProviderType';

export default class AddProviderRequest  {
	ProviderName?: string = '';
	ProviderUrl?: string = '';
	StreetAddress?: string = '';
	Zip?: string = '';
	City?: string = '';
	State?: string = '';
	PhoneContactInfo?: string = '';
	PayToTheOrderOf?: string = '';
	UserAdd?: string = '';
	IsConfirm: boolean = false;
	Type: ProviderType = null;
	constructor(obj?: Partial<AddProviderRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
