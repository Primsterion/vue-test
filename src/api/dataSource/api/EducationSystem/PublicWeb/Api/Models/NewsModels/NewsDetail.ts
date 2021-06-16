import NewsCategoryListItem from '../../../../../EducationSystem/PublicWeb/Api/Models/NewsModels/NewsCategoryListItem';

export default class NewsDetail  {
	Id: number;
	UrlCode?: String;
	Name?: String;
	ImageUrl?: String;
	Description?: String;
	Date: Date;
	Category: NewsCategoryListItem;
}
