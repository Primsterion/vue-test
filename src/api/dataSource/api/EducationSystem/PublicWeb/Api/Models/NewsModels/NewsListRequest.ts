import PageRequest from '../../../../../PaginationHelper/Lib/PageRequest';

export default class NewsListRequest extends PageRequest {
	CategoryId?: number;
	Search?: String;
}
