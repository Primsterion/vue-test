import MethodicalMaterialCategoryListItem from '../../../../../EducationSystem/PublicWeb/Api/Models/MethodicalMaterialModels/MethodicalMaterialCategoryListItem';

export default class MethodicalMaterialCategoryListItem  {
	Id: number;
	Name?: String;
	Date: Date;
	Children: Array<MethodicalMaterialCategoryListItem>;
	ParentId?: number;
}
