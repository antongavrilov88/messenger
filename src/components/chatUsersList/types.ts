import Button from "../button/Button"

export type UserProps = {
    name: string;
}

export type ChatUsersListProps = {
    users: UserProps[];
    addUserButton: Button;
}