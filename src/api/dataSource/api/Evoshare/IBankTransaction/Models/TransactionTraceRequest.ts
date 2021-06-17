

export default class TransactionTraceRequest  {
	TransactionTraceId: Array<string> = null;
	constructor(obj?: Partial<TransactionTraceRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
