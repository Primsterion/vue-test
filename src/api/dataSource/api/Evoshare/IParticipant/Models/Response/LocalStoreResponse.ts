import EmpyrAdressReponse from '../../../../Evoshare/IParticipant/Models/Response/EmpyrAdressReponse';
import EmpyrMediasResponse from '../../../../Evoshare/IParticipant/Models/Response/EmpyrMediasResponse';
import EmpyrRewardsResponse from '../../../../Evoshare/IParticipant/Models/Response/EmpyrRewardsResponse';
import EmpyrRewardsWeekResponse from '../../../../Evoshare/IParticipant/Models/Response/EmpyrRewardsWeekResponse';
import EmpyrSimpleHoursResponse from '../../../../Evoshare/IParticipant/Models/Response/EmpyrSimpleHoursResponse';
import EmpyrOfferResponse from '../../../../Evoshare/IParticipant/Models/Response/EmpyrOfferResponse';

export default class LocalStoreResponse  {
	Id: number = 0;
	Name?: string = '';
	Latitude: number = 0;
	Longitude: number = 0;
	Distance: number = 0;
	Phone?: string = '';
	ThumbnailUrl?: string = '';
	PrimaryCategory?: string = '';
	Description?: string = '';
	Website?: string = '';
	AcceptedCards: Array<string> = null;
	Categories: Array<string> = null;
	RatingCount: number = 0;
	Closed: boolean = false;
	Status?: string = '';
	PriceRange?: string = '';
	Rating: number = 0;
	Address: EmpyrAdressReponse = null;
	Medias: Array<EmpyrMediasResponse> = null;
	AddressLine?: string = '';
	DefaultDiscount: number = 0;
	Rewards: Array<EmpyrRewardsResponse> = null;
	RewardsSchedule: EmpyrRewardsWeekResponse = null;
	SimpleHours: EmpyrSimpleHoursResponse = null;
	ScheduleText?: string = '';
	IsSchedulExist: boolean = false;
	Offers: Array<EmpyrOfferResponse> = null;
	constructor(obj?: Partial<LocalStoreResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
