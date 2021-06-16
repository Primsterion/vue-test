import ClassListItem from '../../../../../EducationSystem/PublicWeb/Api/Models/ScheduleModels/ClassListItem';
import ScheduleDay from '../../../../../EducationSystem/PublicWeb/Api/Models/ScheduleModels/ScheduleDay';

export default class ScheduleResponse  {
	Class: ClassListItem;
	Days: Array<ScheduleDay>;
}
