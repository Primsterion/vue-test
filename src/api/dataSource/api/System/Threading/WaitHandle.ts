import SafeWaitHandle from '../../Microsoft/Win32/SafeHandles/SafeWaitHandle';

export default class WaitHandle  {
	Handle: IntPtr = null;
	SafeWaitHandle: SafeWaitHandle = null;
	constructor(obj?: Partial<WaitHandle>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
