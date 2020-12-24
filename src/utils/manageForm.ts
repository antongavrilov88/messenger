import validateForm from './validateForm.js'
// import FormHandlerFactory from '../API/FormHandlerFactory.js'

declare global {
  interface Window {
    formHandler: (form: HTMLFormElement) => void
  }
}

// function formHandler(form: HTMLFormElement): object {
  // let myForm = form
  // let responseObj = {}
//   myForm.onsubmit = (e): Record<string, any> | null | void => {
//     e.preventDefault()
    // let myFormFields = myForm.getElementsByTagName("input")
    // let requestObject: { [formFieldName: string]: string } = {}
    // for (let i = 0; i < myFormFields.length; i++) {
    //   requestObject[`${myFormFields[i].name}`] = myFormFields[i].value
    // }
  //   if (validateForm(form)) {
  //     console.log(requestObject)

  //     const obj = {
  //       data: JSON.stringify(requestObject)
  //     }
  //     console.log( obj )
  //     responseObj = {...responseObj, obj}
  //   }
  // }
  // return responseObj
// }
// window.formHandler = formHandler


function formHandler(formID: string): object | void {
  let form: any = document.getElementById(formID) 

  // let requestObject = new FormData(form)
  let myFormFields = form.getElementsByTagName("input")
  let requestObject: { [formFieldName: string]: string } = {}
  for (let i = 0; i < myFormFields.length; i++) {
    requestObject[`${myFormFields[i].name}`] = myFormFields[i].value
  }

  if (validateForm(form)) {
    console.log(requestObject)

    const obj = {
      data: JSON.stringify(requestObject)
    }
    console.log( obj )
    return obj
  }
}
export default formHandler