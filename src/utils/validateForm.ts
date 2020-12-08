interface formField extends HTMLElement {
    name: string,
    value: number | string
}
declare global {
    interface Window {
      validateForm: (formID: string) => void,
      validateInput: (formID: HTMLInputElement) => void
    }
  }

  function validateInput(elem: any) {
      let value = elem.value
      let status = false
      switch (elem.name) {
          case 'first_name':
          case 'second_name':
          case 'display_name':
          case 'login':
              status = value.length > 4 ? true : false
              break;
          case 'password':
              status = value.length > 6 ? true : false
              break
          case 'email':
              const regexpEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm  
              status = regexpEmail.test(value)
              break
          case 'phone':
              const regexpPhone = /\+\d{1,3}\s?\(\d{3}\)\s?\d{3}(-\d{2}){2}/g
              status = regexpPhone.test(value)
              console.log( value.length, status )
              break
          default:
              break;
      }      
      let validClass =  elem.classList[1]
      if ( validClass ) {
          elem.classList.remove( validClass )
        }
        status ? elem.classList.add( 'form__input_valid' ) : elem.classList.add( 'form__input_invalid' )
    console.log( elem.name, status )
}


function validateForm( formID ) {
    let myForm = document.getElementById( formID )
    let myFormFields: any = myForm.getElementsByTagName( "input" )
    let requestObject = {}
    for ( let i = 0; i < myFormFields.length; i++ ) {
        validateInput(myFormFields[i])
    }
    console.log( requestObject )
}
window.validateForm = validateForm
export default validateForm