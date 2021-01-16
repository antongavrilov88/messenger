import Block from '../../utils/Block';
import {tpl} from './template';
import {ChatListProps} from './types';

class ChatList extends Block<ChatListProps> {
	constructor(props: ChatListProps) {
		super('div', props);
	}

	render() {
		return this.compile(tpl, {
			chats: this.props.chats,
			createButton: this.props.createButton.render()
		});
	}
}
export default ChatList;
