import NewsCategoryListItem from '../../../../../EducationSystem/PublicWeb/Api/Models/NewsModels/NewsCategoryListItem';

export default class NewsCategoryListItem  {
	Id: number;
	Name?: String;
	ParentId?: number;
	ChildrenCategories: Array<NewsCategoryListItem>;
}
