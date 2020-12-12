import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import validateInput from '../../utils/validateInput.js'
import { FormProps } from './types.js'

declare global {
  interface Window {
    validateInput: (input: HTMLInputElement) => boolean
  }
}
class Form extends Block {
  constructor(props: FormProps) {
    super( 'form', props);
  }

  componentDidMount() {
    // привязку к window перенес просто, так как я бы в нормальном виде просто привязывал здесь функции к конкретному компаненту. Но так как они поочереди рендеряться
    // в строки внутри друг друга, то мне бы все равно пришлось делать это после всего рендеринга страницы. Все равно что через глобальный объект.
    // Однако, изучаю пространства имен
    window.validateInput = validateInput
}

  render() {
    return this.compile(tpl, {
      title: this.props ? this.props.title : null,
      inputs: this.props ? this.props.inputs : null,
      className: this.props ? this.props.className : null,
      id: this.props ? this.props.id : null,
      inputHandler: this.props ? this.props.inputHandler : null,
      handler: this.props ? this.props.handler : null,
      submitButton: this.props ? this.props.submitButton.render() : null
    })
  }
}
export default Form