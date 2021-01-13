// function classNames() {
//   const args = Array.prototype.slice.call(arguments)
//   let responseArray: string[] = []
  
//   function argHandler(arg) {
//     if (typeof arg === 'string') {
//       if (arg !== '') {
//       responseArray.push(arg)
//       }
//     }
//     if (typeof arg === 'number' && arg !== 0) {
//       responseArray.push(arg)      
//     }
//     if (Array.isArray(arg)) {
//       arg.map(subArg => argHandler(subArg))
//     }
//     if (typeof arg === 'object' && !Array.isArray(arg)) {
//       for (let key in arg) {
//         if (typeof arg[key] === 'boolean') {
//           if (arg[key]) {
//             responseArray.push(key)
//           }
//         } else {
//           argHandler(arg[key])
//         }
//       }
//     }
//   }
  
//   args.map(arg => argHandler(arg))
  
//   return responseArray.join(' ')
// }