

export default class StoreStatisticResponse  {
	OnlineStoreCount?: string = '';
	OfflineStoreCount?: string = '';
	StoreCountTotal?: string = '';
	OnlineCashbackPercentageUpto?: string = '';
	OfflineCashbackPercentageUpto?: string = '';
	constructor(obj?: Partial<StoreStatisticResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
