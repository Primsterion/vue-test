import LocalStoreResponse from '../../../../Evoshare/IParticipant/Models/Response/LocalStoreResponse';
import EmpyrNameCountResponse from '../../../../Evoshare/IEmpyrService/Models/Response/EmpyrNameCountResponse';

export default class LocalStoreListResponse  {
	List: Array<LocalStoreResponse> = null;
	CategoryMogl: Array<EmpyrNameCountResponse> = null;
	CategoryMoglRest: Array<EmpyrNameCountResponse> = null;
	PageSize: number = 0;
	PageCount: number = 0;
	Hits: number = 0;
	constructor(obj?: Partial<LocalStoreListResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
