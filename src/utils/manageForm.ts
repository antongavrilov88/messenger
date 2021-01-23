import validateForm from './validateForm';

function formHandler(formID: string): object | void {
	if (!document.getElementById(formID)) {
		return
	}
	let form = document.getElementById(formID) as HTMLFormElement;

	let myFormFields = form.getElementsByTagName('input');
	let requestObject: { [formFieldName: string]: string } = {};
	for (let i = 0; i < myFormFields.length; i++) {
		requestObject[`${myFormFields[i].name}`] = myFormFields[i].value;
	}

	if (validateForm(form)) {
		const obj = {
			data: JSON.stringify(requestObject)
		};
		return obj;
	}
}

export default formHandler;
