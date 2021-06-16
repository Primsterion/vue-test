import EmployeeListItem from '../../../../../EducationSystem/PublicWeb/Api/Models/EmployeeModels/EmployeeListItem';
import PageResponse from '../../../../../PaginationHelper/Lib/PageResponse';

export default class EmployeesListResponse  {
	Items: Array<EmployeeListItem>;
	Page: PageResponse;
}
