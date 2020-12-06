import Block from '../utils/Block.js';
class ProfileReturnBlock extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return (`<div class="return-container">
                <a href="./chat.html">
                    <div class="return-container__button">
                        <h1>❮</h1>
                    </div>
                </a>
            </div>`);
    }
}
export default ProfileReturnBlock;
//# sourceMappingURL=ProfileReturnBlock.js.map