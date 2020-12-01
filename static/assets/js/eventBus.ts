// нужно уточнить с колбэками
type callback = ( args?: undefined[] ) => void | boolean
class EventBus {
  listeners: {};
    constructor() {
      this.listeners = {};
    }
  
    on(event: string, callback: callback) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
  
      this.listeners[event].push(callback);
    }
  
    off(event: string, callback: callback) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
      }
  
      this.listeners[event] = this.listeners[event].filter(
        listener => listener !== callback
      );
    }
  
      emit(event: string, ...args: undefined[]) {
      if (!this.listeners[event]) {
        throw new Error(`Нет события: ${event}`);
      }
      
      this.listeners[event].forEach(function(listener) {
        listener(...args);
      });
    }
  }

  export default EventBus