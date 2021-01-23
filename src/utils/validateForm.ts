import validateInput from './validateInput';

function validateForm(form: HTMLFormElement) {
	if (!form) {
		return
	}
	const myForm = form;
	const myFormFields = myForm.getElementsByTagName('input');
	let status: boolean = true;
	for (let i = 0; i < myFormFields.length; i++) {
		if (!validateInput(myFormFields[i])) {
			status = false;
			return status;
		}
	}

	return status;
}

export default validateForm;
