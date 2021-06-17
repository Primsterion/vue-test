enum JpMorganStatus {
	None = 0,
	Pending = 1,
	Rejected = 2,
	Success = 4,
	Progress = 8,
	Failed = 16,
	Managment = 32,
	ManagmentApproval = 64,
	TransactionNotFound = 128,
	TestTransaction = 256
}
export default JpMorganStatus
