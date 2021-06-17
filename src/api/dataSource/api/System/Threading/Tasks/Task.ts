

export default class Task  {
	ParentForDebugger: Task = null;
	StateFlagsForDebugger: number = 0;
	DebuggerDisplayMethodDescription?: string = '';
	Options: TaskCreationOptions = null;
	IsWaitNotificationEnabledOrNotRanToCompletion: boolean = false;
	ShouldNotifyDebuggerOfWaitCompletion: boolean = false;
	IsWaitNotificationEnabled: boolean = false;
	Id: number = 0;
	CurrentId?: number = null;
	InternalCurrent: Task = null;
	Exception: AggregateException = null;
	Status: TaskStatus = null;
	IsCanceled: boolean = false;
	IsCancellationRequested: boolean = false;
	CancellationToken: CancellationToken = null;
	IsCancellationAcknowledged: boolean = false;
	IsCompleted: boolean = false;
	IsCompletedSuccessfully: boolean = false;
	CreationOptions: TaskCreationOptions = null;
	System.IAsyncResult.AsyncWaitHandle: WaitHandle = null;
	AsyncState: Object = null;
	System.IAsyncResult.CompletedSynchronously: boolean = false;
	ExecutingTaskScheduler: TaskScheduler = null;
	Factory: TaskFactory = null;
	CompletedTask: Task = null;
	CompletedEvent: ManualResetEventSlim = null;
	ExceptionRecorded: boolean = false;
	IsFaulted: boolean = false;
	CapturedContext: ExecutionContext = null;
	IsExceptionObservedByParent: boolean = false;
	IsDelegateInvoked: boolean = false;
	constructor(obj?: Partial<Task>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
