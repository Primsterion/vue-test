

export default class SendSmsRequest  {
	Number?: string = '';
	Body?: string = '';
	constructor(obj?: Partial<SendSmsRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
