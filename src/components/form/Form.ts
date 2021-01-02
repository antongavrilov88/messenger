import Block from '../../utils/Block'
import { tpl } from './template'
import { FormProps } from './types'

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