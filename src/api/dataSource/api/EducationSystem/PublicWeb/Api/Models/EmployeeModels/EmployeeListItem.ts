import JobListItem from '../../../../../EducationSystem/PublicWeb/Api/Models/EmployeeModels/JobListItem';

export default class EmployeeListItem  {
	Id: number;
	FirstName?: String;
	Name?: String;
	MiddleName?: String;
	Jobs: Array<JobListItem>;
	SchoolExperience: number;
	TeachExperience: number;
	Classes: Array<String>;
}
