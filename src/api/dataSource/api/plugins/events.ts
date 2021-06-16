export class Events<T> {
  private _handlers = new Array<((res: T) => any)>();
  private _onceHandlers = new Array<((res: T) => any)>();
  get handlers(){
    return this._handlers.concat(this._onceHandlers);
  }
  once(callback: ((res: T) => any)) {
    if (this._onceHandlers.indexOf(callback) === -1) {
      this._onceHandlers.push(callback)
    }
  }
  on(callback: ((res: T) => any)) {
    if (this.handlers.indexOf(callback) === -1) {
      this._handlers.push(callback)
    }
  }
  removeListener(callback: ((res: T) => any)) {
    const idx = this.handlers.indexOf(callback);
    if (idx !== -1) {
      this._handlers.splice(idx, 1);
    }
  }
  trigger(args: T) {
    this.handlers.forEach(x => x(args));
    this._onceHandlers = new Array<((res: T) => any)>();
  }
} 