import { WebApiService } from '../../../../plugins/webApiService'
import { Events } from '../../../../plugins/events'
import WsResponseModel from '../../../../SchemaBuilderServer/Models/WsResponseModel';
import SchoolInfo from '../../../../EducationSystem/PublicWeb/Api/Models/SchoolModels/SchoolInfo';
import SchoolDescription from '../../../../EducationSystem/PublicWeb/Api/Models/SchoolModels/SchoolDescription';
import SchoolSlide from '../../../../EducationSystem/PublicWeb/Api/Models/SchoolModels/SchoolSlide';

export default class SchoolService {
	webApiService: WebApiService;
	GetSchoolInfoEvent = new Events<WsResponseModel<SchoolInfo>>();
	GetSchoolDescriptionEvent = new Events<WsResponseModel<SchoolDescription>>();
	GetSchoolSlidesEvent = new Events<WsResponseModel<Array<SchoolSlide>>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('SchoolService', 'GetSchoolInfo', (res: WsResponseModel<SchoolInfo>) => {
			self.GetSchoolInfoEvent.trigger(res);
		});
		webApiService.on('SchoolService', 'GetSchoolDescription', (res: WsResponseModel<SchoolDescription>) => {
			self.GetSchoolDescriptionEvent.trigger(res);
		});
		webApiService.on('SchoolService', 'GetSchoolSlides', (res: WsResponseModel<Array<SchoolSlide>>) => {
			self.GetSchoolSlidesEvent.trigger(res);
		});
	}
	GetSchoolInfo() { 	
                this.webApiService.send('SchoolService', 'GetSchoolInfo' );
        }
	GetSchoolDescription() { 	
                this.webApiService.send('SchoolService', 'GetSchoolDescription' );
        }
	GetSchoolSlides() { 	
                this.webApiService.send('SchoolService', 'GetSchoolSlides' );
        }
}