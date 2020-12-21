import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { FormProps } from './types.js'

class Form extends Block<FormProps> {
  constructor(props: FormProps) {
    super( 'form', props);
  }

  render() {
    return this.compile(tpl, {
      title: this.props.title,
      inputs: this.props.inputs,
      className: this.props.className,
      id: this.props.id,
      submitButton: this.props.submitButton.render()
    })
  }
}
export default Form