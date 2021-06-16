import { WebApiService } from '../../../../plugins/webApiService'
import { Events } from '../../../../plugins/events'
import EmployeesListRequest from '../../../../EducationSystem/PublicWeb/Api/Models/EmployeeModels/EmployeesListRequest';
import WsResponseModel from '../../../../SchemaBuilderServer/Models/WsResponseModel';
import EmployeesListResponse from '../../../../EducationSystem/PublicWeb/Api/Models/EmployeeModels/EmployeesListResponse';
import EmployeeInfo from '../../../../EducationSystem/PublicWeb/Api/Models/EmployeeModels/EmployeeInfo';
import DepartmentListItem from '../../../../EducationSystem/PublicWeb/Api/Models/EmployeeModels/DepartmentListItem';

export default class EmployeeService {
	webApiService: WebApiService;
	GetEmployeesListEvent = new Events<WsResponseModel<EmployeesListResponse>>();
	GetEmployeeDetailEvent = new Events<WsResponseModel<EmployeeInfo>>();
	GetDepartmentsEvent = new Events<WsResponseModel<Array<DepartmentListItem>>>();
	GetDepartmentEvent = new Events<WsResponseModel<DepartmentListItem>>();
	GetEmployeePhotoByIdEvent = new Events<WsResponseModel<Array<number>>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('EmployeeService', 'GetEmployeesList', (res: WsResponseModel<EmployeesListResponse>) => {
			self.GetEmployeesListEvent.trigger(res);
		});
		webApiService.on('EmployeeService', 'GetEmployeeDetail', (res: WsResponseModel<EmployeeInfo>) => {
			self.GetEmployeeDetailEvent.trigger(res);
		});
		webApiService.on('EmployeeService', 'GetDepartments', (res: WsResponseModel<Array<DepartmentListItem>>) => {
			self.GetDepartmentsEvent.trigger(res);
		});
		webApiService.on('EmployeeService', 'GetDepartment', (res: WsResponseModel<DepartmentListItem>) => {
			self.GetDepartmentEvent.trigger(res);
		});
		webApiService.on('EmployeeService', 'GetEmployeePhotoById', (res: WsResponseModel<Array<number>>) => {
			self.GetEmployeePhotoByIdEvent.trigger(res);
		});
	}
	GetEmployeesList(request: EmployeesListRequest) { 	
                this.webApiService.send('EmployeeService', 'GetEmployeesList' , request);
        }
	GetEmployeeDetail(id: number) { 	
                this.webApiService.send('EmployeeService', 'GetEmployeeDetail' , id);
        }
	GetDepartments() { 	
                this.webApiService.send('EmployeeService', 'GetDepartments' );
        }
	GetDepartment(id: number) { 	
                this.webApiService.send('EmployeeService', 'GetDepartment' , id);
        }
	GetEmployeePhotoById(id: number) { 	
                this.webApiService.send('EmployeeService', 'GetEmployeePhotoById' , id);
        }
}