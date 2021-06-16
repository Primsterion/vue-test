import JobListItem from '../../../../../EducationSystem/PublicWeb/Api/Models/EmployeeModels/JobListItem';
import TeacherCategory from '../../../../../EducationSystem/PublicWeb/Api/Models/EmployeeModels/TeacherCategory';
import TeacherAcademicDegree from '../../../../../EducationSystem/PublicWeb/Api/Models/EmployeeModels/TeacherAcademicDegree';
import TeacherAward from '../../../../../EducationSystem/PublicWeb/Api/Models/EmployeeModels/TeacherAward';
import TeacherAcademicStatus from '../../../../../EducationSystem/PublicWeb/Api/Models/EmployeeModels/TeacherAcademicStatus';

export default class EmployeeInfo  {
	Id: number;
	FirstName?: String;
	Name?: String;
	MiddleName?: String;
	Jobs: Array<JobListItem>;
	Experience: number;
	TeachExperience: number;
	Biography?: String;
	Classes: Array<String>;
	Categories: Array<TeacherCategory>;
	AcademicDegrees: Array<TeacherAcademicDegree>;
	TeacherAwards: Array<TeacherAward>;
	AcademicStatuses: Array<TeacherAcademicStatus>;
}
