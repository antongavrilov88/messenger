import Block from '../utils/Block.js'

class ReturnBlock extends Block {
    constructor(props) {
        super("div", props)
    }

    render() {
        return(
            `<div class="return-container">
                <a href="{{likUrl}}">
                    <div class="return-container__button">
                        <h1>❮</h1>
                    </div>
                </a>
            </div>`
        )
    }
}
export default ReturnBlock