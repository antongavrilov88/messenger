import Button from "../button/Button"

export type InputProps = {
    lable: {
        className: string;
        title: string;
    },
    input: {
        className: string;
        type: string;
        name: string;
    },
    handler: string;
}

export type FormProps = {
    className: string;
    id: string;
    title: string;
    submitButton: Button;
    inputs: InputProps[];
}