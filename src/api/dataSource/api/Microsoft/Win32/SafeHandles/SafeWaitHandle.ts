import SafeHandleZeroOrMinusOneIsInvalid from '../../../Microsoft/Win32/SafeHandles/SafeHandleZeroOrMinusOneIsInvalid';

export default class SafeWaitHandle extends SafeHandleZeroOrMinusOneIsInvalid {
	
	constructor(obj?: Partial<SafeWaitHandle>) {
		super(obj);
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
