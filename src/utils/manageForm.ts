import validateForm from './validateForm.js'

function formHandler(formID: string): object | void {
  let form: any = document.getElementById(formID) 

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