import EmployeesType from '../../../../../EducationSystem/PublicWeb/Api/Enums/EmployeesType';
import PageRequest from '../../../../../PaginationHelper/Lib/PageRequest';

export default class EmployeesListRequest extends PageRequest {
	Type?: EmployeesType;
	DepartmentId?: number;
}
