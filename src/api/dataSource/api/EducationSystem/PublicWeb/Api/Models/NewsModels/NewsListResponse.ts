import NewsListItem from '../../../../../EducationSystem/PublicWeb/Api/Models/NewsModels/NewsListItem';
import PageResponse from '../../../../../PaginationHelper/Lib/PageResponse';

export default class NewsListResponse  {
	Items: Array<NewsListItem>;
	Page: PageResponse;
}
