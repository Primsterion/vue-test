import ForumThemesListItem from '../../../../../EducationSystem/PublicWeb/Api/Models/ForumModels/ForumThemesListItem';
import PageResponse from '../../../../../PaginationHelper/Lib/PageResponse';

export default class ForumThemesListResponse  {
	Items: Array<ForumThemesListItem>;
	Page: PageResponse;
}
