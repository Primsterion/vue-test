import TypeSendMobileApp from '../../../../Evoshare/IParticipant/Models/Request/TypeSendMobileApp';

export default class SendMobileAppRequest  {
	Type: TypeSendMobileApp = null;
	constructor(obj?: Partial<SendMobileAppRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
