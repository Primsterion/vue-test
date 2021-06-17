

export default class TaskScheduler  {
	MaximumConcurrencyLevel: number = 0;
	RequiresAtomicStartTransition: boolean = false;
	Default: TaskScheduler = null;
	Current: TaskScheduler = null;
	InternalCurrent: TaskScheduler = null;
	Id: number = 0;
	constructor(obj?: Partial<TaskScheduler>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
