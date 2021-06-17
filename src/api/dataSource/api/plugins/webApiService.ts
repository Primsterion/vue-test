import Cookies = require("js-cookie")

enum EnumErrorCodes {
  SessionEnded = 5
}

export class WebApiService {
  websocket: WebSocket;
  subscribers = new Array<SocketSubscribersModel>();
  sendOrder = new Array<string>();
  url: string
  private readonly cookieName = "Auth-Token";
  /**
   *включить реконнекты при потере соединения
   *
   * @type {boolean}
   * @memberof WebApiService
   */
  reconnectEnabled: boolean = true
  /**
   *Время простоя перед реконнектом после потери соединения
   *
   * @type {number}
   * @memberof WebApiService
   */
  reconnectTimeout: number = 10 * 1000;

  /**
   * 
   * @param url url для подключения к вебсокету. должен начинаться с ws:// или с wss://
   */
  constructor(private baseUrl: string) {
    this.initUrl();
    this.connect();    
  }
  private initUrl() {
    this.url = this.addTokenToUrl(this.baseUrl);
  }
  /**
   * Подключиться к вебсокету
   */
  private connect(){    
    this.dispose();
    this.websocket = new WebSocket(this.url);
    this.websocket.onmessage = this.onMessage.bind(this);
    this.websocket.onopen = this.onOpen.bind(this);
    this.websocket.onerror = this.onError.bind(this);    
    this.websocket.onclose = this.onClose.bind(this);
  }
  private clearReconnect() {
    // удалить токен
    this.clearToken();
    // пересоздать урл с новым токеном
    this.initUrl();
    // переподключить
    this.connect();    
  }
  /**
   * уничтожить объект вебсокет
   */
  private dispose(){    
    if(!this.websocket)
      return;    
    this.websocket.onmessage = null;
    this.websocket.onopen = null;
    this.websocket.onerror = null;    
    this.websocket.onclose = null;
    this.websocket = null;
  }
  /**
   * Удаляем токен из куки
   */
  private clearToken() {
    Cookies.remove(this.cookieName);
  }
  private newGuid(): string{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });    
  }
  private getToken():string{
    console.log('cookies',Cookies);
    var token = Cookies.get(this.cookieName);
    if(!token)
      token = this.newGuid(); 
    // 30 days
    Cookies.set(this.cookieName,token, {expires: new Date(new Date().getTime() + 30*24*60*60 * 1000)});
    return token;
  }
  private addTokenToUrl(url: string):string{
    var token = this.getToken();
    if(url.indexOf('?')>=0)
      return url + '&token='+token;
    return url + '?token='+token;
  }
  onMessage(msg: MessageEvent) {
    const json = JSON.parse(msg.data);
    var controller = json.Class;
    var method = json.Method;
    var data = json.Value;
    // if(!json.IsSuccess)
    //   console.error('error response: ',json)
    var callers = this.subscribers.filter(x=> {
      return x.controller == controller && x.method == method;
    });
    callers.forEach(c=>c.callback(json));
    var errorCode = (json || {}).ErrorCode || 0;
    if (errorCode == EnumErrorCodes.SessionEnded) {
      this.clearReconnect();
    }
  }
  onError(e:Event) {
    console.error('Websocket unexpected ERROR',e);
  }
  onClose(e:CloseEvent) {    
    console.error('Websocket CLOSED', e);
    var self = this;
    if(this.reconnectEnabled)
      setTimeout(function(){
        self.connect();
      },self.reconnectTimeout)
  }
  onOpen() {
    if (this.sendOrder) {
      this.sendOrder.forEach(so => this.websocket.send(so))
    }
    this.sendOrder = new Array<string>();
  }
  on(controller: string, method: string, callback: Function) {
    this.subscribers.push({
      controller: controller,
      method: method,
      callback: callback
    });
  }
  send(controller: string, method: string, data?: any) {
    var sendData = JSON.stringify({
      controller: controller,
      method: method,
      value: JSON.stringify(data===undefined|| data===null?'': data)
    });    
    if (this.websocket.readyState != 1) { // open
      this.sendOrder.push(sendData);
      return;
    }
    this.websocket.send(sendData)
  }
}
interface SocketSubscribersModel {
  controller: string;
  method: string;
  callback: Function;
}
