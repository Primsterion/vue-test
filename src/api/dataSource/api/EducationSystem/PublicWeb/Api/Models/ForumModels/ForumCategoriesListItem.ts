import ForumLastMessageInfo from '../../../../../EducationSystem/PublicWeb/Api/Models/ForumModels/ForumLastMessageInfo';

export default class ForumCategoriesListItem  {
	Id: number;
	UrlCode?: String;
	ThemesCount: number;
	LastMessage: ForumLastMessageInfo;
}
