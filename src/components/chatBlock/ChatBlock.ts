import Block from '../../utils/Block';
import {tpl} from './template';
import {ChatBlockProps} from './types';

class ChatBlock extends Block<ChatBlockProps> {
	constructor(props: ChatBlockProps) {
		super('div', props);
	}

	render() {
		return this.compile(tpl, {
			messageHandler: this.props.messageHandler,
			currentChatTitle: this.props.currentChatTitle,
			currentChatAvatar: this.props.currentChatAvatar,
			currentChatMessages: this.props.currentChatMessages
		});
	}
}
export default ChatBlock;
