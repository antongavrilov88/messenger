import validateForm from './validateForm.js'
import FormHandlerFactory from '../API/FormHandlerFactory.js'

declare global {
  interface Window {
    formHandler: (form: HTMLFormElement) => void
  }
}

function formHandler(form: HTMLFormElement): void {
  let myForm = form
  myForm.onsubmit = function (e): void {
    e.preventDefault()
    let myFormFields = myForm.getElementsByTagName("input")
    let requestObject: { [formFieldName: string]: string } = {}
    for (let i = 0; i < myFormFields.length; i++) {
      requestObject[`${myFormFields[i].name}`] = myFormFields[i].value
    }
    if (validateForm(form)) {
      console.log(requestObject)

      const obj = {
        data: JSON.stringify(requestObject)
      }

      const request = FormHandlerFactory.createHandler(myForm.id) !
      request.create(obj)

    } else {
      console.log('Invalid values')
    }
  }
}
window.formHandler = formHandler
export default formHandler