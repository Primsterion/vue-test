import PageRequest from '../../../../../PaginationHelper/Lib/PageRequest';

export default class MethodicalMaterialListRequest extends PageRequest {
	Search?: String;
	TagId?: number;
	CategoryId?: number;
}
