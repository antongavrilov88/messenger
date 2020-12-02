import render from '../../utils/render';
import Button from './Button';
const button = new Button({
    text: 'Click me',
});
render(".app", button);
setTimeout(() => {
    button.setProps({
        text: 'Click me, please',
    });
}, 1000);
//# sourceMappingURL=index.js.map