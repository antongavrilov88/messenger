import Profile from './Profile.js'
// import { render } from '../../utils/render.js'

const profile = new Profile()
console.log( profile )

// profile.show()

// render(".app", profile)

// let formH: EventListener = profile.avatarFormHandler
// let form: Node = document.getElementById('avatarForm')!
// form.addEventListener('submit', formH)

// let formH2: EventListener = profile.profileFormHandler
// let form2: Node = document.getElementById('changeProfileForm')!
// form2.addEventListener('submit', formH2)
// console.log(form, formH, form2, formH2)

// const host = 'https://ya-praktikum.tech';
// const myUserForm = document.getElementById('avatarForm')!

// myUserForm.addEventListener('submit', event => {
//   event.preventDefault();

//   const avatar = document.getElementById('avatar');
// let form: HTMLFormElement = myUserForm as HTMLFormElement
//   const formObj = new FormData(form);

//   // Можете добавлять свои дополнительные поля или составлять данные полностью из пустой FormData
//   // Если хотите назвать файлы как-то иначе, третий параметр по-вашему усмотрению
//   // form.append('avatar', avatar, 'my-file-name.png');

//   fetch(`${host}/api/v2/user/profile/avatar`, {
//     method: 'PUT',
//     credentials: 'include', // Нам нужно подставлять cookies
//     mode: 'cors', // Работаем с CORS
//     body: formObj,
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       return data;
//     });
//   });