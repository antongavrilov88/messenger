import Block from '../../utils/Block.js'
import formHandler from '../../utils/manageForm.js';
import { tpl } from './template.js'

class Form extends Block {
  constructor(props: object) {
    super( 'form', props);
  }


  render() {
    return this.compile(tpl, {
      inputs: this.props.inputs,
      className: this.props.className,
      id: this.props.id
    })
  }
}
export default Form