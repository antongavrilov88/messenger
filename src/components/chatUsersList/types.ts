import Button from "../button/Button"

export type UserProps = {
    name: string;
}

export type UserToAddProps = {
    name: string;
}

export type ChatUsersListProps = {
    users: UserProps[];
    usersToAdd: UserToAddProps[],
    addUserButton: Button;
}