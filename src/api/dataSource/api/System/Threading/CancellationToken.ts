

export default class CancellationToken  {
	None: CancellationToken = null;
	IsCancellationRequested: boolean = false;
	CanBeCanceled: boolean = false;
	WaitHandle: WaitHandle = null;
	constructor(obj?: Partial<CancellationToken>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
