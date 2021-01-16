export type ProfileInputProps = {
    label: string;
    inputType: string;
    inputName: string;
    inputPlaceholder: string;
    handler: string;
}

export type ProfileFormProps = {
    id: string
    profileData: ProfileInputProps[]
    formHandler: string;
    modalHandler: string;
    avatarPath: string;
}
