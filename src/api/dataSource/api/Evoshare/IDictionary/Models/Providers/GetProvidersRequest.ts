import ProviderType from '../../../../Evoshare/DomainModel/ProviderType';
import EvosharePaginationRequest from '../../../../Evoshare/Utilites/Extension/Models/EvosharePaginationRequest';

export default class GetProvidersRequest extends EvosharePaginationRequest {
	Type: ProviderType = null;
	constructor(obj?: Partial<GetProvidersRequest>) {
		super(obj);
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
