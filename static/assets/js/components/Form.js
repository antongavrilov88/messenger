import Block from '../utils/Block.js';
const tpl = `<form class={{ className }} id={{ id }}>
<span class="form__title">{{ title }}</span>
{{#each inputs}}
<label class="{{ this.lable.className }}"> {{ this.lable.title }}
    <input class="{{ this.input.className }}" type="{{ this.input.type }}" name="{{ this.input.name }}" />
</label>
{{/each}}
<button class="form__submit-button" type="submit" onclick="window.formHandler( '{{id}}' )">Вход</button>
</form>`;
class Form extends Block {
    constructor(props) {
        super('form', props);
    }
    render() {
        return this.compile(tpl, this.props);
    }
}
export default Form;
//# sourceMappingURL=Form.js.map