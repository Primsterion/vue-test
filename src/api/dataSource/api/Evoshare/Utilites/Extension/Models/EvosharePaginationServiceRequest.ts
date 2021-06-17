import EvosharePaginationRequest from '../../../../Evoshare/Utilites/Extension/Models/EvosharePaginationRequest';

export default class EvosharePaginationServiceRequest extends EvosharePaginationRequest {
	UserId: string = '';
	ParticipantId: string = '';
	constructor(obj?: Partial<EvosharePaginationServiceRequest>) {
		super(obj);
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
