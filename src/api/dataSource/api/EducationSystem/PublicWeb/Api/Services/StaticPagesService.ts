import { WebApiService } from '../../../../plugins/webApiService'
import { Events } from '../../../../plugins/events'
import WsResponseModel from '../../../../SchemaBuilderServer/Models/WsResponseModel';
import RegulatoryDocumentListItem from '../../../../EducationSystem/PublicWeb/Api/Models/StaticPageModels/RegulatoryDocumentListItem';
import StaticPageResponse from '../../../../EducationSystem/PublicWeb/Api/Models/StaticPageModels/StaticPageResponse';

export default class StaticPagesService {
	webApiService: WebApiService;
	GetRegulatoryDocumentsListEvent = new Events<WsResponseModel<Array<RegulatoryDocumentListItem>>>();
	GetByCodeEvent = new Events<WsResponseModel<StaticPageResponse>>();
	GetByIdEvent = new Events<WsResponseModel<StaticPageResponse>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('StaticPagesService', 'GetRegulatoryDocumentsList', (res: WsResponseModel<Array<RegulatoryDocumentListItem>>) => {
			self.GetRegulatoryDocumentsListEvent.trigger(res);
		});
		webApiService.on('StaticPagesService', 'GetByCode', (res: WsResponseModel<StaticPageResponse>) => {
			self.GetByCodeEvent.trigger(res);
		});
		webApiService.on('StaticPagesService', 'GetById', (res: WsResponseModel<StaticPageResponse>) => {
			self.GetByIdEvent.trigger(res);
		});
	}
	GetRegulatoryDocumentsList() { 	
                this.webApiService.send('StaticPagesService', 'GetRegulatoryDocumentsList' );
        }
	GetByCode(code?: String) { 	
                this.webApiService.send('StaticPagesService', 'GetByCode' , code);
        }
	GetById(id: number) { 	
                this.webApiService.send('StaticPagesService', 'GetById' , id);
        }
}