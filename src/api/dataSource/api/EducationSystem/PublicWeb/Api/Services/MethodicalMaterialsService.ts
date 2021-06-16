import { WebApiService } from '../../../../plugins/webApiService'
import { Events } from '../../../../plugins/events'
import MethodicalMaterialListRequest from '../../../../EducationSystem/PublicWeb/Api/Models/MethodicalMaterialModels/MethodicalMaterialListRequest';
import WsResponseModel from '../../../../SchemaBuilderServer/Models/WsResponseModel';
import MethodicalMaterialListResponse from '../../../../EducationSystem/PublicWeb/Api/Models/MethodicalMaterialModels/MethodicalMaterialListResponse';
import MethodicalMaterialDetail from '../../../../EducationSystem/PublicWeb/Api/Models/MethodicalMaterialModels/MethodicalMaterialDetail';
import MethodicalMaterialCategoryListItem from '../../../../EducationSystem/PublicWeb/Api/Models/MethodicalMaterialModels/MethodicalMaterialCategoryListItem';
import MethodicalMaterialTagListItem from '../../../../EducationSystem/PublicWeb/Api/Models/MethodicalMaterialModels/MethodicalMaterialTagListItem';

export default class MethodicalMaterialsService {
	webApiService: WebApiService;
	GetListEvent = new Events<WsResponseModel<MethodicalMaterialListResponse>>();
	GetDetailEvent = new Events<WsResponseModel<MethodicalMaterialDetail>>();
	GetCategoriesListEvent = new Events<WsResponseModel<Array<MethodicalMaterialCategoryListItem>>>();
	GetCategoryByIdEvent = new Events<WsResponseModel<MethodicalMaterialCategoryListItem>>();
	GetTagByIdEvent = new Events<WsResponseModel<MethodicalMaterialTagListItem>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('MethodicalMaterialsService', 'GetList', (res: WsResponseModel<MethodicalMaterialListResponse>) => {
			self.GetListEvent.trigger(res);
		});
		webApiService.on('MethodicalMaterialsService', 'GetDetail', (res: WsResponseModel<MethodicalMaterialDetail>) => {
			self.GetDetailEvent.trigger(res);
		});
		webApiService.on('MethodicalMaterialsService', 'GetCategoriesList', (res: WsResponseModel<Array<MethodicalMaterialCategoryListItem>>) => {
			self.GetCategoriesListEvent.trigger(res);
		});
		webApiService.on('MethodicalMaterialsService', 'GetCategoryById', (res: WsResponseModel<MethodicalMaterialCategoryListItem>) => {
			self.GetCategoryByIdEvent.trigger(res);
		});
		webApiService.on('MethodicalMaterialsService', 'GetTagById', (res: WsResponseModel<MethodicalMaterialTagListItem>) => {
			self.GetTagByIdEvent.trigger(res);
		});
	}
	GetList(request: MethodicalMaterialListRequest) { 	
                this.webApiService.send('MethodicalMaterialsService', 'GetList' , request);
        }
	GetDetail(id: number) { 	
                this.webApiService.send('MethodicalMaterialsService', 'GetDetail' , id);
        }
	GetCategoriesList() { 	
                this.webApiService.send('MethodicalMaterialsService', 'GetCategoriesList' );
        }
	GetCategoryById(id: number) { 	
                this.webApiService.send('MethodicalMaterialsService', 'GetCategoryById' , id);
        }
	GetTagById(id: number) { 	
                this.webApiService.send('MethodicalMaterialsService', 'GetTagById' , id);
        }
}