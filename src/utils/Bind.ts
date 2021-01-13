function bind(fn: { call: (...arg0: any) => any; }, context: any,  ...boundArgs: any[]) {
    if (typeof fn !== 'function') {
      throw new TypeError('Bind must be called on a function');
    }
    return function (...args: any) {
          // Вызываем fn в контексте context
        return fn.call(context, ...args, ...boundArgs);
    };
} 