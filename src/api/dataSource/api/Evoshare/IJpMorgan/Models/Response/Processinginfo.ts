

export default class Processinginfo  {
	StatusCode?: string = '';
	StatusText?: string = '';
	constructor(obj?: Partial<Processinginfo>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
