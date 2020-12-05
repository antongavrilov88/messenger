import Block from '../../utils/Block.js'
import formHandler from '../../utils/manageForm.js';

class Form extends Block {
  constructor(props: object) {
    super( 'div', props);
    this.formHandler = this.formHandler.bind(this)
  }

  formHandler = id => formHandler(id)

  render() {
    return (
      `<form class={{ className }} id={{ id }}>
        <span class="form__title">{{ title }}</span>
        {{#each inputs}}
        <label class="{{ this.lable.className }}"> {{ this.lable.title }}
            <input class="{{ this.input.className }}" type="{{ this.input.type }}" name="{{ this.input.name }}" />
        </label>
        {{/each}}
        <label class="form__input__name">Password
            <input class="form__input" type="password" name="password" />
        </label>
        <button class="form__submit-button" type="submit" onclick="this.formHandler( '{{id}}' )">Вход</button>
      </form>`
    );
  }
}
export default Form