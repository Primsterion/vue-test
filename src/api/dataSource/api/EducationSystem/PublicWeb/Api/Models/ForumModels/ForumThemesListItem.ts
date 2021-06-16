import ForumLastMessageInfo from '../../../../../EducationSystem/PublicWeb/Api/Models/ForumModels/ForumLastMessageInfo';

export default class ForumThemesListItem  {
	Id: number;
	UrlCode?: String;
	Name?: String;
	MessagesCount: number;
	LastMessage: ForumLastMessageInfo;
}
