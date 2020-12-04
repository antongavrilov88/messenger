import Block from '../../utils/Block.js';
class Form extends Block {
    constructor(props) {
        super("fragment", props);
    }
    render() {
        return `
      <form class={{ className }} id={{ id }}>
      <span class="form__title">Авторизация</span>
      <label class="form__input__name">LOGIN
          <input class="form__input" type="text" name="login" />
      </label>
      <label class="form__input__name">Password
          <input class="form__input" type="password" name="password" />
      </label>
      <button class="form__submit-button" type="submit" onclick="formHandler( 'loginForm' )">Вход</button>
  </form>
      `;
    }
}
export default Form;
//# sourceMappingURL=Form.js.map