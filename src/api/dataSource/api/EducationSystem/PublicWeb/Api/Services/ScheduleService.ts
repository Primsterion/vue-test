import { WebApiService } from '../../../../plugins/webApiService'
import { Events } from '../../../../plugins/events'
import WsResponseModel from '../../../../SchemaBuilderServer/Models/WsResponseModel';
import ClassListItem from '../../../../EducationSystem/PublicWeb/Api/Models/ScheduleModels/ClassListItem';
import ScheduleResponse from '../../../../EducationSystem/PublicWeb/Api/Models/ScheduleModels/ScheduleResponse';

export default class ScheduleService {
	webApiService: WebApiService;
	GetClassesEvent = new Events<WsResponseModel<Array<ClassListItem>>>();
	GetScheduleEvent = new Events<WsResponseModel<ScheduleResponse>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('ScheduleService', 'GetClasses', (res: WsResponseModel<Array<ClassListItem>>) => {
			self.GetClassesEvent.trigger(res);
		});
		webApiService.on('ScheduleService', 'GetSchedule', (res: WsResponseModel<ScheduleResponse>) => {
			self.GetScheduleEvent.trigger(res);
		});
	}
	GetClasses() { 	
                this.webApiService.send('ScheduleService', 'GetClasses' );
        }
	GetSchedule(classId: number) { 	
                this.webApiService.send('ScheduleService', 'GetSchedule' , classId);
        }
}