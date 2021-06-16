import MethodicalMaterialListItem from '../../../../../EducationSystem/PublicWeb/Api/Models/MethodicalMaterialModels/MethodicalMaterialListItem';
import PageResponse from '../../../../../PaginationHelper/Lib/PageResponse';

export default class MethodicalMaterialListResponse  {
	Items: Array<MethodicalMaterialListItem>;
	Page: PageResponse;
}
