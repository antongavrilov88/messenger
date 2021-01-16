/* eslint-disable no-unused-expressions */
/* eslint-disable no-case-declarations */
declare global {
    interface Window {
      validateInput: (input: HTMLInputElement) => boolean
    }
  }

function validateInput(elem: HTMLInputElement) {
	let value = elem.value;
	let status = false;
	switch (elem.name) {
		case 'first_name':
		case 'second_name':
		case 'display_name':
		case 'login':
		case 'message':
		case 'title':
			status = value.length > 4;
			break;
		case 'password':
		case 'oldPassword':
		case 'newPassword':
			status = value.length > 6;
			break;
		case 'email':
			const regexpEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
			status = regexpEmail.test(value);
			break;
		case 'phone':
			const regexpPhone = /\+\d{1,3}\s?\(\d{3}\)\s?\d{3}(-\d{2}){2}/g;
			status = regexpPhone.test(value);
			break;
		default:
			break;
	}

	let validClass = elem.classList[1];
	if (validClass) {
		elem.classList.remove(validClass);
	}

	status ? elem.classList.add('form__input_valid') : elem.classList.add('form__input_invalid');
	return status;
}

window.validateInput = validateInput;
export default validateInput;
