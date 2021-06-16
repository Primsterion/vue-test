import ForumMessagesListItem from '../../../../../EducationSystem/PublicWeb/Api/Models/ForumModels/ForumMessagesListItem';
import PageResponse from '../../../../../PaginationHelper/Lib/PageResponse';

export default class ForumMessagesListResponse  {
	Items: Array<ForumMessagesListItem>;
	Page: PageResponse;
}
