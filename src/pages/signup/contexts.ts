export const formCTX = {
    className: "form-container",
    id: "signUpForm",
    title: "Авторизация",
    inputs: [
        {
            lable: {
                className: "form__input__name",
                title: "ИМЯ"
            },
            input: {
                className: "form__input",
                type: "text",
                name: "first_name"
            }
        },
        {
            lable: {
                className: "form__input__name",
                title: "ФАМИЛИЯ"
            },
            input: {
                className: "form__input",
                type: "text",
                name: "second_name"
            }
        },
        {
            lable: {
                className: "form__input__name",
                title: "ЛОГИН"
            },
            input: {
                className: "form__input",
                type: "text",
                name: "login"
            }
        },
        {
            lable: {
                className: "form__input__name",
                title: "E-MAIL"
            },
            input: {
                className: "form__input",
                type: "email",
                name: "email",
                placeholder: "abcd@efg.hi"
            }
        },
        {
            lable: {
                className: "form__input__name",
                title: "ПАРОЛЬ"
            },
            input: {
                className: "form__input",
                type: "password",
                name: "password"
            }
        },
        {
            lable: {
                className: "form__input__name",
                title: "Телефон"
            },
            input: {
                className: "form__input",
                type: "text",
                name: "phone",
                placeholder: "+7 (777) 777-77-77"
            }
        }
    ]
    }