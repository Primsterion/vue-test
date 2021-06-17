import PageRequest from '../../../../Evoshare/Utilites/Extension/Models/PageRequest';
import StoreOnlineSortBy from '../../../../Evoshare/IDictionary/Models/OnlineStore/StoreOnlineSortBy';

export default class StoreOnlineGetRequest  {
	ExcludeNonActive: boolean = false;
	Search?: string = '';
	Favorite: Array<number> = null;
	FavoriteOnly: boolean = false;
	IsPopularAdd: boolean = false;
	IsCategoryIgnore: boolean = false;
	CategoryId: Array<number> = null;
	Page: PageRequest = null;
	SortBy: StoreOnlineSortBy = null;
	SortDescending: boolean = false;
	constructor(obj?: Partial<StoreOnlineGetRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
