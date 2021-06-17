import Processinginfo from '../../../../Evoshare/IJpMorgan/Models/Response/Processinginfo';

export default class LowPaymentsResponse  {
	SendTimeStamp: Date = null;
	MessageType?: string = '';
	EndToEndId?: string = '';
	ProcessingInfo: Processinginfo = null;
	JpmcRefId?: string = '';
	constructor(obj?: Partial<LowPaymentsResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
