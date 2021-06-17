

export default class BaseResponse  {
	IsSuccess: boolean = false;
	ErrorMessage?: string = '';
	constructor(obj?: Partial<BaseResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
