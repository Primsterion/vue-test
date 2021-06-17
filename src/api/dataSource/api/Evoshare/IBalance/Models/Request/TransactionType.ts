enum TransactionType {
	Select = 0,
	MicrosavingsCharge = 1,
	MicrosavingsRedeem = 2,
	DailySavings = 4,
	Offline = 8,
	Online = 16,
	FamilyMember = 32,
	Other = 1024,
	EmergencyWithdrawals = 2048
}
export default TransactionType
