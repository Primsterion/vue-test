

export default class WsResponseModel<T>  {
	Method?: string = '';
	Class?: string = '';
	ErrorMessage?: string = '';
	ErrorStackTrace?: string = '';
	ErrorCode: number = 0;
	RequestId: string = '';
	Value: T = null;
	IsSuccess: boolean = false;
	constructor(obj?: Partial<WsResponseModel<T>>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
