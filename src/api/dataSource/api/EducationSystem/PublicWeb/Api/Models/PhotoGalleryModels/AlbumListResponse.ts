import AlbumListItem from '../../../../../EducationSystem/PublicWeb/Api/Models/PhotoGalleryModels/AlbumListItem';
import PageResponse from '../../../../../PaginationHelper/Lib/PageResponse';

export default class AlbumListResponse  {
	Items: Array<AlbumListItem>;
	Page: PageResponse;
}
