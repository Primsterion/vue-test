import PageResponse from '../../../../Evoshare/Utilites/Extension/Models/PageResponse';

export default class EvosharePaginationResponse<T>  {
	Items: Array<TRes> = null;
	Page: PageResponse = null;
	constructor(obj?: Partial<EvosharePaginationResponse<T>>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
