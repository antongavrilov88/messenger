function rangeRight(start, end, step) {
    return range(start, end, step, true);
}

function range(start, end, step, isRight) {
            let arr = []
let arguments = [start, end, step]
if (arguments[1] == undefined) {
  if ( start > 0 ) {
    for ( let i = 0; i < start; i++ ) {
      arr.push( i )
    }
  }
  if ( start < 0 ) {
  for ( let i = 0; i > start; i-- ) {
    arr.push( i )
  }
}
if ( start = 0 ) {
return !isRight ? arr : arr.reverse()
}
return !isRight ? arr : arr.reverse()
} else {
  if ( step != 0 ) {
     for ( let i = 0; i < Math.abs((end - start) / step) - ((end - start) % step); i++ ) {
     arr.push(start + i*step)
    }
 return !isRight ? arr : arr.reverse()
  } else {
    for ( let i = 0; i < Math.abs(end - start); i++ )  {
    arr.push( start )
    }
 return !isRight ? arr : arr.reverse()
  }
}
}