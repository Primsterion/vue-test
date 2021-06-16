import { WebApiService } from '../../../../plugins/webApiService'
import { Events } from '../../../../plugins/events'
import AlbumsListRequest from '../../../../EducationSystem/PublicWeb/Api/Models/PhotoGalleryModels/AlbumsListRequest';
import PhotoListRequest from '../../../../EducationSystem/PublicWeb/Api/Models/PhotoGalleryModels/PhotoListRequest';
import WsResponseModel from '../../../../SchemaBuilderServer/Models/WsResponseModel';
import AlbumListResponse from '../../../../EducationSystem/PublicWeb/Api/Models/PhotoGalleryModels/AlbumListResponse';
import PhotoListResponse from '../../../../EducationSystem/PublicWeb/Api/Models/PhotoGalleryModels/PhotoListResponse';

export default class PhotoGalleryService {
	webApiService: WebApiService;
	GetAlbumsListEvent = new Events<WsResponseModel<AlbumListResponse>>();
	GetPhotoListEvent = new Events<WsResponseModel<PhotoListResponse>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('PhotoGalleryService', 'GetAlbumsList', (res: WsResponseModel<AlbumListResponse>) => {
			self.GetAlbumsListEvent.trigger(res);
		});
		webApiService.on('PhotoGalleryService', 'GetPhotoList', (res: WsResponseModel<PhotoListResponse>) => {
			self.GetPhotoListEvent.trigger(res);
		});
	}
	GetAlbumsList(request: AlbumsListRequest) { 	
                this.webApiService.send('PhotoGalleryService', 'GetAlbumsList' , request);
        }
	GetPhotoList(request: PhotoListRequest) { 	
                this.webApiService.send('PhotoGalleryService', 'GetPhotoList' , request);
        }
}