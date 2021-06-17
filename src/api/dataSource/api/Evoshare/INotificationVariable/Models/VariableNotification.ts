

export default class VariableNotification  {
	Name?: string = '';
	Value?: string = '';
	constructor(obj?: Partial<VariableNotification>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
