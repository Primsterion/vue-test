import _Vue from "vue";
import ApiDataSource from "./apiDataSource";

const install = (Vue: typeof _Vue, url?: string) => {
  const websocket = new ApiDataSource(url);
  Vue.prototype.$api = websocket;
  (Vue as any).$api = websocket;
}
  
  const plugin = {
      install
  }
  
  export default plugin
