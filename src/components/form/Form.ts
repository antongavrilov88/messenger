import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import validateInput from '../../utils/validateInput.js'
import { FormProps } from './types.js'

declare global {
  interface Window {
    validateInput: (input: HTMLInputElement) => boolean
  }
}
class Form extends Block<FormProps> {
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
      title: this.props.title,
      inputs: this.props.inputs,
      className: this.props.className,
      id: this.props.id,
      submitButton: this.props.submitButton.render()
    })
  }
}
export default Form