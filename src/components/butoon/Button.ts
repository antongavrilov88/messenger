import Block from '../../utils/Block.js'

class Button extends Block {
    constructor(props) {
        super("div", props)
    }

    render() {
        return(
            `<button href='{{ url }}' class='{{ className }}'>
            {{ text }}
            </button>`
        )
    }
}
export default Button