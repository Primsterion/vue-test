import ForumUserShortInfo from '../../../../../EducationSystem/PublicWeb/Api/Models/ForumModels/ForumUserShortInfo';

export default class ForumMessagesListItem  {
	Id: number;
	Message?: String;
	Date: Date;
	User: ForumUserShortInfo;
}
