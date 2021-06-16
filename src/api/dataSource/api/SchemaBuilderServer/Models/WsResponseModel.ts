

export default class WsResponseModel<T>  {
	Method?: String;
	Class?: String;
	ErrorMessage?: String;
	Value: T;
	IsSuccess: Boolean;
}
