export type ProfileInputProps = {
    label: string;
    inputType: string;
    inputName: string;
    inputPlaceholder: string;
    handler: string;
}

export type ProfileFormProps = {
    profileData: ProfileInputProps[]
    formHandler: string;
    modalHandler: string;
}