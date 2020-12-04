import Block from '../../utils/Block.js'

class TestComponent extends Block {
    constructor(props: object) {
          // Создаём враппер дом-элемент button
      super("button", props);
    }
  
    render() {
          // В проекте должен быть ваш собственный шаблонизатор
      return `<button>{{ text }}</button>`;
    }
  }
export default TestComponent