import PageRequest from '../../../../../PaginationHelper/Lib/PageRequest';

export default class ForumThemesListRequest extends PageRequest {
	CategoryId?: number;
	Search?: String;
}
