import Block from '../utils/Block.js';
class Form extends Block {
    constructor(props) {
        super('div', props);
    }
    render() {
        return (`<form class={{ className }} id={{ id }}>
        <span class="form__title">{{ title }}</span>
        {{#each inputs}}
        <label class="{{ this.lable.className }}"> {{ this.lable.title }}
            <input class="{{ this.input.className }}" type="{{ this.input.type }}" name="{{ this.input.name }}" />
        </label>
        {{/each}}
        <button class="form__submit-button" type="submit" onclick="window.formHandler( '{{id}}' )">Вход</button>
      </form>`);
    }
}
export default Form;
//# sourceMappingURL=Form.js.map