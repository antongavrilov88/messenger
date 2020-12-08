import Block from '../../utils/Block.js'
import { tpl } from './template.js'

class Form extends Block {
  constructor(props: object) {
    super( 'form', props);
  }

  componentDidMount() {
    console.log( this.getContent() )
    let form = this.getContent()
    console.log( form.getElementsByTagName( "input" ) )
    form.onsubmit = function(e) {
      e.preventDefault()
    }
  }

  render() {
    return this.compile(tpl, {
      inputs: this.props.inputs,
      className: this.props.className,
      id: this.props.id,
      inputHandler: this.props.inputHandler
    })
  }
}
export default Form