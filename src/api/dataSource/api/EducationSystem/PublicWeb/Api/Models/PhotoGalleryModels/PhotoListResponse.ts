import AlbumListItem from '../../../../../EducationSystem/PublicWeb/Api/Models/PhotoGalleryModels/AlbumListItem';
import PhotoListItem from '../../../../../EducationSystem/PublicWeb/Api/Models/PhotoGalleryModels/PhotoListItem';
import PageResponse from '../../../../../PaginationHelper/Lib/PageResponse';

export default class PhotoListResponse  {
	Album: AlbumListItem;
	Items: Array<PhotoListItem>;
	Page: PageResponse;
}
