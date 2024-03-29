/* eslint-disable max-len */
import Block from '../../utils/Block';
import {tpl} from './template';
import {ChatListBlockProps} from './types';

class ChatUsersListBlock extends Block<ChatListBlockProps> {
	constructor(props: ChatListBlockProps) {
		super('div', props);
	}

	render() {
		return this.compile(tpl, {
			content: this.props.content.map((child: { render: () => any }) => child.render()).join('')
		});
	}
}
export default ChatUsersListBlock;
