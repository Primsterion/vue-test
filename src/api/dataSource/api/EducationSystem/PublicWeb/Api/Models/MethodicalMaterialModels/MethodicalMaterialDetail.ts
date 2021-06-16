import MethodicalMaterialCategoryListItem from '../../../../../EducationSystem/PublicWeb/Api/Models/MethodicalMaterialModels/MethodicalMaterialCategoryListItem';
import EmployeeIdName from '../../../../../EducationSystem/PublicWeb/Api/Models/EmployeeModels/EmployeeIdName';
import MethodicalMaterialTagListItem from '../../../../../EducationSystem/PublicWeb/Api/Models/MethodicalMaterialModels/MethodicalMaterialTagListItem';

export default class MethodicalMaterialDetail  {
	Id: number;
	Name?: String;
	Date: Date;
	Text?: String;
	Category: MethodicalMaterialCategoryListItem;
	Teacher: EmployeeIdName;
	Tags: Array<MethodicalMaterialTagListItem>;
}
