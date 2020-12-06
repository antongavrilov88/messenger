import Block from '../utils/Block.js'

class Button extends Block {
    constructor(props) {
        super("button", props)
    }

    render() {
        return(
            `<button  class='{{ className }}'>
            {{ text }}
            </button>`
        )
    }
}
export default Button