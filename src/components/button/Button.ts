import Block  from '../../utils/Block.js'

class Button extends Block {
    constructor(props: object) {
          // Создаём враппер дом-элемент button
      super("button", props);
    }
  
    render() {
          // В проекте должен быть ваш собственный шаблонизатор
      return `<div>${this.props.text}</div>`;
    }
  }
export default Button