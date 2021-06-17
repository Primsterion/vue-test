import AutocompleteRequest from '../../../../Evoshare/Utilites/Models/AutocompleteRequest';

export default class ParticipantShoppingTripAutocompleteRequest extends AutocompleteRequest {
	StoreName?: string = '';
	DateCreated?: Date = null;
	constructor(obj?: Partial<ParticipantShoppingTripAutocompleteRequest>) {
		super(obj);
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
