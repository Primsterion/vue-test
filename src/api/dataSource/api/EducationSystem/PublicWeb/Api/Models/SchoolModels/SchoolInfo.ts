import Coordinates from '../../../../../EducationSystem/PublicWeb/Api/Models/SchoolModels/Coordinates';

export default class SchoolInfo  {
	SchoolName?: String;
	SchoolNumber?: number;
	SchoolTitle?: String;
	SchoolEmail?: String;
	SchoolPhone?: String;
	SchoolCoordinates: Coordinates;
	IsForumEnabled: Boolean;
	LogoUrl?: String;
	IsShowSchoolNumber: Boolean;
	SchoolAddress?: String;
}
