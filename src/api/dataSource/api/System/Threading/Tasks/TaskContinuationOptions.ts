enum TaskContinuationOptions {
	None = 0,
	PreferFairness = 1,
	LongRunning = 2,
	AttachedToParent = 4,
	DenyChildAttach = 8,
	HideScheduler = 16,
	LazyCancellation = 32,
	RunContinuationsAsynchronously = 64,
	NotOnRanToCompletion = 65536,
	NotOnFaulted = 131072,
	OnlyOnCanceled = 196608,
	NotOnCanceled = 262144,
	OnlyOnFaulted = 327680,
	OnlyOnRanToCompletion = 393216,
	ExecuteSynchronously = 524288
}
export default TaskContinuationOptions
