import Block  from '../../utils/Block.js'
import TestComponent from '../testComponent/TestComponent.js'

let testComponent = new TestComponent({
    text: "I'm sooooooo cool"
})

class Button extends Block {
    constructor(props: object) {
          // Создаём враппер дом-элемент button
      super("div", props);
    }
  
    render() {
          // В проекте должен быть ваш собственный шаблонизатор
      // return `<div>${this.props.text}</div>`;
      return `<main>
      <div class="workspace__wrapper">
          <div class="workspace__container">
              <div class="error-container">
                  <h1>{{ text }}</h1>
                  <p>Такой страницы нет</p>
                  ${testComponent.render()}
              </div>
          </div>
      </div>
  </main>`
    }
  }
export default Button