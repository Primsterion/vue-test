import { WebApiService } from '../../../../plugins/webApiService'
import { Events } from '../../../../plugins/events'
import ForumCategoriesListRequest from '../../../../EducationSystem/PublicWeb/Api/Models/ForumModels/ForumCategoriesListRequest';
import ForumThemesListRequest from '../../../../EducationSystem/PublicWeb/Api/Models/ForumModels/ForumThemesListRequest';
import ForumMessagesListRequest from '../../../../EducationSystem/PublicWeb/Api/Models/ForumModels/ForumMessagesListRequest';
import WsResponseModel from '../../../../SchemaBuilderServer/Models/WsResponseModel';
import ForumCategoriesListResponse from '../../../../EducationSystem/PublicWeb/Api/Models/ForumModels/ForumCategoriesListResponse';
import ForumCategoriesListItem from '../../../../EducationSystem/PublicWeb/Api/Models/ForumModels/ForumCategoriesListItem';
import ForumThemesListResponse from '../../../../EducationSystem/PublicWeb/Api/Models/ForumModels/ForumThemesListResponse';
import ForumMessagesListResponse from '../../../../EducationSystem/PublicWeb/Api/Models/ForumModels/ForumMessagesListResponse';

export default class ForumService {
	webApiService: WebApiService;
	GetCategoriesListEvent = new Events<WsResponseModel<ForumCategoriesListResponse>>();
	GetCategoryByCodeEvent = new Events<WsResponseModel<ForumCategoriesListItem>>();
	GetCategoryByIdEvent = new Events<WsResponseModel<ForumCategoriesListItem>>();
	GetThemesListEvent = new Events<WsResponseModel<ForumThemesListResponse>>();
	GetThemeMessagesListEvent = new Events<WsResponseModel<ForumMessagesListResponse>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('ForumService', 'GetCategoriesList', (res: WsResponseModel<ForumCategoriesListResponse>) => {
			self.GetCategoriesListEvent.trigger(res);
		});
		webApiService.on('ForumService', 'GetCategoryByCode', (res: WsResponseModel<ForumCategoriesListItem>) => {
			self.GetCategoryByCodeEvent.trigger(res);
		});
		webApiService.on('ForumService', 'GetCategoryById', (res: WsResponseModel<ForumCategoriesListItem>) => {
			self.GetCategoryByIdEvent.trigger(res);
		});
		webApiService.on('ForumService', 'GetThemesList', (res: WsResponseModel<ForumThemesListResponse>) => {
			self.GetThemesListEvent.trigger(res);
		});
		webApiService.on('ForumService', 'GetThemeMessagesList', (res: WsResponseModel<ForumMessagesListResponse>) => {
			self.GetThemeMessagesListEvent.trigger(res);
		});
	}
	GetCategoriesList(request: ForumCategoriesListRequest) { 	
                this.webApiService.send('ForumService', 'GetCategoriesList' , request);
        }
	GetCategoryByCode(code?: String) { 	
                this.webApiService.send('ForumService', 'GetCategoryByCode' , code);
        }
	GetCategoryById(id: number) { 	
                this.webApiService.send('ForumService', 'GetCategoryById' , id);
        }
	GetThemesList(request: ForumThemesListRequest) { 	
                this.webApiService.send('ForumService', 'GetThemesList' , request);
        }
	GetThemeMessagesList(request: ForumMessagesListRequest) { 	
                this.webApiService.send('ForumService', 'GetThemeMessagesList' , request);
        }
}