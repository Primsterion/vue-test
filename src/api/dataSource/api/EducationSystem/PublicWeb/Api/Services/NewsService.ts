import { WebApiService } from '../../../../plugins/webApiService'
import { Events } from '../../../../plugins/events'
import NewsListRequest from '../../../../EducationSystem/PublicWeb/Api/Models/NewsModels/NewsListRequest';
import WsResponseModel from '../../../../SchemaBuilderServer/Models/WsResponseModel';
import NewsListResponse from '../../../../EducationSystem/PublicWeb/Api/Models/NewsModels/NewsListResponse';
import NewsDetail from '../../../../EducationSystem/PublicWeb/Api/Models/NewsModels/NewsDetail';
import NewsCategoryListItem from '../../../../EducationSystem/PublicWeb/Api/Models/NewsModels/NewsCategoryListItem';

export default class NewsService {
	webApiService: WebApiService;
	GetListEvent = new Events<WsResponseModel<NewsListResponse>>();
	GetDetailByIdEvent = new Events<WsResponseModel<NewsDetail>>();
	GetDetailByCodeEvent = new Events<WsResponseModel<NewsDetail>>();
	GetCategoriesListEvent = new Events<WsResponseModel<Array<NewsCategoryListItem>>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('NewsService', 'GetList', (res: WsResponseModel<NewsListResponse>) => {
			self.GetListEvent.trigger(res);
		});
		webApiService.on('NewsService', 'GetDetailById', (res: WsResponseModel<NewsDetail>) => {
			self.GetDetailByIdEvent.trigger(res);
		});
		webApiService.on('NewsService', 'GetDetailByCode', (res: WsResponseModel<NewsDetail>) => {
			self.GetDetailByCodeEvent.trigger(res);
		});
		webApiService.on('NewsService', 'GetCategoriesList', (res: WsResponseModel<Array<NewsCategoryListItem>>) => {
			self.GetCategoriesListEvent.trigger(res);
		});
	}
	GetList(request: NewsListRequest) { 	
                this.webApiService.send('NewsService', 'GetList' , request);
        }
	GetDetailById(id: number) { 	
                this.webApiService.send('NewsService', 'GetDetailById' , id);
        }
	GetDetailByCode(code?: String) { 	
                this.webApiService.send('NewsService', 'GetDetailByCode' , code);
        }
	GetCategoriesList() { 	
                this.webApiService.send('NewsService', 'GetCategoriesList' );
        }
}