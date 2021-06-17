import EmpyrOfferDetailResponse from '../../../../Evoshare/IParticipant/Models/Response/EmpyrOfferDetailResponse';
import LocalStoreResponse from '../../../../Evoshare/IParticipant/Models/Response/LocalStoreResponse';

export default class EmpyrOfferResponse  {
	Id: number = 0;
	RewardType?: string = '';
	RewardValue: number = 0;
	RewardMax: number = 0;
	FinePrint?: string = '';
	RequiresActivation: boolean = false;
	Basic: boolean = false;
	Details: EmpyrOfferDetailResponse = null;
	Venue: LocalStoreResponse = null;
	constructor(obj?: Partial<EmpyrOfferResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
