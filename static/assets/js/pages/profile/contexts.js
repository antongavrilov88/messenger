export const profileCTX = {
    profileData: [
        {
            label: 'Имя',
            inputType: 'text',
            inputName: 'fist_name',
            inputPlaceholder: 'имя'
        },
        {
            label: 'Фамилия',
            inputType: 'text',
            inputName: 'second_name',
            inputPlaceholder: 'Фамилия'
        },
        {
            label: 'Псевдоним',
            inputType: 'text',
            inputName: 'display_name',
            inputPlaceholder: 'ник'
        },
        {
            label: 'Логин',
            inputType: 'text',
            inputName: 'login',
            inputPlaceholder: 'Логин'
        },
        {
            label: 'E-mail',
            inputType: 'email',
            inputName: 'email',
            inputPlaceholder: 'mail'
        },
        {
            label: 'Телефон',
            inputType: 'text',
            inputName: 'phone',
            inputPlaceholder: '+7-925-777-77-77'
        }
    ],
    handler: "window.formHandler( 'changeProfileForm' )"
};
export const returnBlockCTX = {
    linkUrl: "./chat.html"
};
//# sourceMappingURL=contexts.js.map