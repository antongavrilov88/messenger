function isEmpty(value) {
    if ( typeof( value ) == 'number' || typeof( value ) == 'boolean' || value === null || value === undefined || value === '' ) {
      return true
    } else {
      return false
    }
  }