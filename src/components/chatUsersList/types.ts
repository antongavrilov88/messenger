import Button from '../button/Button';

export type UserProps = {
    name: string;
    avatarPath: string;
}

export type UserToAddProps = {
    name: string;
    avatarPath: string;
}

export type ChatUsersListProps = {
    users: UserProps[];
    usersToAdd: UserToAddProps[],
    addUserButton: Button;
}
