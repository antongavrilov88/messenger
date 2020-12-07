import Block from '../utils/Block.js'


class DummyChatBlock extends Block {
    constructor(props, children) {
        super("div", props)
    }

    render() {
        return(
            `<div class="chat-container">
                <div class="chat-container__dummy__content">
                    <span>{{ text }}</span>
                </div>
            </div>`
        )
    }
}
export default DummyChatBlock