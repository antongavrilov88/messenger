import { render } from '../../utils/render.js';
import Button from './Button.js';
const button = new Button({
    text: 'Click me',
    buttonText: "I'm sooooooo cool",
    className: "form__submit-button"
});
render(".app", button);
setTimeout(() => {
    button.setProps({
        text: 'Click me, please',
    });
}, 1000);
//# sourceMappingURL=index.js.map