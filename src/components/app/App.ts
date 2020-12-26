import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { AppProps } from './types.js'

class App extends Block<AppProps> {
    constructor(props: AppProps) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            initMessage: this.props.initMessage
        })
    }
}
export default App