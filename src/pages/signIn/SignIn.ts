import Block from '../../utils/Block.js'
import Form from '../../components/form/Form.js'

class SignIn extends Block {
    constructor(props) {
        super("div", props)
    }

    render() {

        const form = new Form({
            className: "form-container",
            id: "loginForm"
        })

        return(
            `<div class="form-wrapper">
                <div class="container">
                ${ form.element.innerHTML }
                </div>
            </div>`
        )
    }
}
export default SignIn