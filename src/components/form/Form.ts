import Block from '../../utils/Block.js'
import formHandler from '../../utils/manageForm.js';

class Form extends Block {
  constructor(props: object) {
    super( 'div', props);
  }


  render() {
    console.log( window.formHandler, formHandler )
    return (
      `<form class={{ className }} id={{ id }}>
        <span class="form__title">{{ title }}</span>
        {{#each inputs}}
        <label class="{{ this.lable.className }}"> {{ this.lable.title }}
            <input class="{{ this.input.className }}" type="{{ this.input.type }}" name="{{ this.input.name }}" />
        </label>
        {{/each}}
        <button class="form__submit-button" type="submit" onclick="window.formHandler( '{{id}}' )">Вход</button>
      </form>`
    );
  }
}
export default Form