import { WebApiService } from './plugins/webApiService';
import EmployeeService from './EducationSystem/PublicWeb/Api/Services/EmployeeService';
import ForumService from './EducationSystem/PublicWeb/Api/Services/ForumService';
import MethodicalMaterialsService from './EducationSystem/PublicWeb/Api/Services/MethodicalMaterialsService';
import NewsService from './EducationSystem/PublicWeb/Api/Services/NewsService';
import PhotoGalleryService from './EducationSystem/PublicWeb/Api/Services/PhotoGalleryService';
import ScheduleService from './EducationSystem/PublicWeb/Api/Services/ScheduleService';
import SchoolService from './EducationSystem/PublicWeb/Api/Services/SchoolService';
import StaticPagesService from './EducationSystem/PublicWeb/Api/Services/StaticPagesService'

export default class ApiDataSource {
	webApiService: WebApiService;
	EmployeeService: EmployeeService;
	ForumService: ForumService;
	MethodicalMaterialsService: MethodicalMaterialsService;
	NewsService: NewsService;
	PhotoGalleryService: PhotoGalleryService;
	ScheduleService: ScheduleService;
	SchoolService: SchoolService;
	StaticPagesService: StaticPagesService;
	constructor(webApiUrl: string) {
		this.webApiService = new WebApiService(webApiUrl);
		this.EmployeeService = new EmployeeService(this.webApiService);
		this.ForumService = new ForumService(this.webApiService);
		this.MethodicalMaterialsService = new MethodicalMaterialsService(this.webApiService);
		this.NewsService = new NewsService(this.webApiService);
		this.PhotoGalleryService = new PhotoGalleryService(this.webApiService);
		this.ScheduleService = new ScheduleService(this.webApiService);
		this.SchoolService = new SchoolService(this.webApiService);
		this.StaticPagesService = new StaticPagesService(this.webApiService);
	}

}
