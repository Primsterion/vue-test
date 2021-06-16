
export class WebApiService {
  TAG:string = 'WebApiService';
  subscribers = new Array<SocketSubscribersModel>();
  baseUrl:string
  constructor(baseUrl?: string) {
    if(!baseUrl)
      baseUrl = '';

    this.baseUrl = baseUrl;
  }
  
  onMessage(url:string,response: string) {
    const json = JSON.parse(response);
    var controller = json.Class;
    var method = json.Method;
    var data = json.Value;
    if(!json.IsSuccess)    
      console.error(this.TAG,'Unsuccessful Request:',url, json.ErrorMessage, json.Exception);
    var callers = this.subscribers.filter(x=> {
      return x.controller == controller && x.method == method;
    });
    callers.forEach(c=>c.callback(json));
  }
  
  on(controller: string, method: string, callback: Function) {
    this.subscribers.push({
      controller: controller,
      method: method,
      callback: callback
    });
  }
  send(controller: string, method: string, data?: any) {
    var url = `${this.baseUrl}/${controller}/${method}`;
    var body = data?JSON.stringify(data):undefined;
    var self = this;

    let xhr = new XMLHttpRequest();    
    xhr.onload = function() {
      //alert(`Загружено: ${xhr.status} ${xhr.response}`);

      if (xhr.status != 200 && xhr.status != 201) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
        console.error(self.TAG,'Request:',url,xhr.status,xhr.statusText);
        //alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
      } else { // если всё прошло гладко, выводим результат
        var result = xhr.response;
        console.trace(self.TAG,'Request:',url,result);
        self.onMessage(url, result||'');
        //alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
      }
      
    };
    
    xhr.onerror = function(e) { // происходит, только когда запрос совсем не получилось выполнить
      //alert(`Ошибка соединения`);      
      console.error(self.TAG,'Request:',url,e);
    };
    
    xhr.onprogress = function(event) { // запускается периодически
      // event.loaded - количество загруженных байт
      // event.lengthComputable = равно true, если сервер присылает заголовок Content-Length
      // event.total - количество байт всего (только если lengthComputable равно true)
      //alert(`Загружено ${event.loaded} из ${event.total}`);
    };
    xhr.open('POST', url, true);
    xhr.send(body);
    // fetch(url,{
    //   body:body,
    //   method: 'POST',
    //   headers:{
    //     'Content-Type': 'application/json'
    //   }
    // }).then(result=>{
    //   //console.log(this.TAG,'request result',result);
    //   return result.text();
    // })
    // .then(result=>{
    //   console.trace(this.TAG,'Request:',url,result);
    //   self.onMessage(url, result||'');      
    // })
    // .catch((e)=>{
    //   console.error(this.TAG,'Request:',url,e);
    // })   
    
  }
}
interface SocketSubscribersModel {
  controller: string;
  method: string;
  callback: Function;
}