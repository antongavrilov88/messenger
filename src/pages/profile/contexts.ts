import formHandler from '../../utils/manageForm';
import funcString from '../../utils/funcString';
import validateInput from '../../utils/validateInput';
import {closeModal} from '../../utils/manageModal';
import Form from '../../components/form/Form';
import Button from '../../components/button/Button';

export const submitButtonCTX = {
	className: 'form__submit-button',
	type: 'submit',
	e: 'click',
	handler: funcString(formHandler, 'this.parentNode'),
	text: 'Изменить',
	id: 'submitProfilFormButton'
};

export const profileCTX = {
	id: 'changeProfileForm',
	profileData: [
		{
			label: 'Имя',
			inputType: 'text',
			inputName: 'first_name',
			inputPlaceholder: 'имя',
			handler: funcString(validateInput, 'this')
		},
		{
			label: 'Фамилия',
			inputType: 'text',
			inputName: 'second_name',
			inputPlaceholder: 'Фамилия',
			handler: funcString(validateInput, 'this')
		},
		{
			label: 'Псевдоним',
			inputType: 'text',
			inputName: 'display_name',
			inputPlaceholder: 'ник',
			handler: funcString(validateInput, 'this')
		},
		{
			label: 'Логин',
			inputType: 'text',
			inputName: 'login',
			inputPlaceholder: 'Логин',
			handler: funcString(validateInput, 'this')
		},
		{
			label: 'E-mail',
			inputType: 'email',
			inputName: 'email',
			inputPlaceholder: 'mail',
			handler: funcString(validateInput, 'this')
		},
		{
			label: 'Телефон',
			inputType: 'text',
			inputName: 'phone',
			inputPlaceholder: '+7-925-777-77-77',
			handler: funcString(validateInput, 'this')
		}
	],
	formHandler: funcString(formHandler, 'this.parentNode'),
	modalHandler: ''
};
export const returnBlockCTX = {
	linkUrl: './chat.html'
};

export const modalButtonCTX = {
	className: 'form__submit-button',
	type: 'submit',
	e: 'click',
	handler: funcString(formHandler, 'this.parentNode'),
	text: 'Изменить аватар',
	id: 'modalSubmitButtonCTX'
};

export const modalFormCTX = {
	className: 'form-container',
	id: 'avatarChangeForm',
	title: 'Изменить аватар',
	submitButton: new Button(modalButtonCTX),
	inputs: [
		{
			lable: {
				className: 'form__input__name',
				title: 'Выберите файл'
			},
			input: {
				className: 'form__input',
				type: 'file',
				name: 'avatar'
			},
			handler: funcString(validateInput, 'this')
		}
	]
};

export const modalCTX = {
	id: 'avatarForm',
	modalHandler: funcString(closeModal, '\'changeAvatarModal\''),
	form: new Form(modalFormCTX)
};
