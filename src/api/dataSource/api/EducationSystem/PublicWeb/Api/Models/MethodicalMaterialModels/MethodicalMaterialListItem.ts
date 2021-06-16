import EmployeeIdName from '../../../../../EducationSystem/PublicWeb/Api/Models/EmployeeModels/EmployeeIdName';
import MethodicalMaterialTagListItem from '../../../../../EducationSystem/PublicWeb/Api/Models/MethodicalMaterialModels/MethodicalMaterialTagListItem';

export default class MethodicalMaterialListItem  {
	Id: number;
	Name?: String;
	Date: Date;
	Teacher: EmployeeIdName;
	Tags: Array<MethodicalMaterialTagListItem>;
}
