import Block from '../../utils/Block';
import {tpl} from './template';
import {ChatUsersListProps} from './types';

class ChatUsersList extends Block<ChatUsersListProps> {
	constructor(props: ChatUsersListProps) {
		super('div', props);
	}

	render() {
		return this.compile(tpl, {
			users: this.props.users,
			usersToAdd: this.props.usersToAdd,
			addUserButton: this.props.addUserButton.render()
		});
	}
}
export default ChatUsersList;
