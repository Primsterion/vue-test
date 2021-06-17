enum TransactionStatus {
	None = 0,
	Pending = 1,
	Completed = 2,
	Fail = 4,
	PastDate = 8,
	Sent = 16,
	IneligibleforCashback = 32
}
export default TransactionStatus
