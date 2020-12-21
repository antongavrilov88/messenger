import validateForm from './validateForm.js'
import HTTP from './HTTP.js'

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
        method: 'GET',
        data: JSON.stringify(requestObject),
        headers: {
          'content-type': 'application/json', // Данные отправляем в формате JSON
        },
        mode: 'cors',
        credentials: 'include'
      }
      const auth = new HTTP('/auth')
      auth.post('/signin', obj)
        .then(res => console.log(res))


      // const host = 'https://ya-praktikum.tech';

      // fetch(`${host}/api/v2/auth/signup`, {
      //   method: 'POST',
      //   credentials: 'include', // Нужно подставлять куки
      //   mode: 'cors', // Работаем с CORS
      //   headers: {
      //     'content-type': 'application/json', // Данные отправляем в формате JSON
      //   },
      //   body: JSON.stringify({
      //     first_name: "Артурт",
      //     second_name: "Морган",
      //     login: `a.morgan`,
      //     email: `a.morgan@rdr2.com`,
      //     phone: "+71234567890",
      //     password: "p@ssw0rd", // Грустный и слабый пароль, можно вот так: oPKzos*1X$uKz$ta
      //   }),
      // })
      //   .then(response => response.text()) // Можно вытащить через .json()
      //   .then(data => {
      //     console.log(data);
      //     return data;
      //   })
      //   .then(data => {
      //     fetch(`${host}/api/v2/auth/user`, { // Получаем подробную информацию о пользователе и проверяем, что куки проставились
      //       method: 'GET',
      //       mode: 'cors',
      //       credentials: 'include',
      //     })
      //       .then(r => r.json())
      //       .then(data => {
      //         console.log('user', data);
      //       });
      //   });



    } else {
      console.log('Invalid values')
    }
  }
}
window.formHandler = formHandler
export default formHandler