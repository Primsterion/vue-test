

export default class TaskFactory  {
	DefaultScheduler: TaskScheduler = null;
	CancellationToken: CancellationToken = null;
	Scheduler: TaskScheduler = null;
	CreationOptions: TaskCreationOptions = null;
	ContinuationOptions: TaskContinuationOptions = null;
	constructor(obj?: Partial<TaskFactory>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
