import ForumCategoriesListItem from '../../../../../EducationSystem/PublicWeb/Api/Models/ForumModels/ForumCategoriesListItem';
import PageResponse from '../../../../../PaginationHelper/Lib/PageResponse';

export default class ForumCategoriesListResponse  {
	Items: Array<ForumCategoriesListItem>;
	Page: PageResponse;
}
