import { render } from '../../utils/render.js'
import Button from './Button.js'

const button = new Button({
    text: 'Click me',
});

// app — это id дива в корне DOM
render(".app", button);

// Через секунду контент изменится сам, достаточно обновить пропсы
setTimeout(() => {
button.setProps({
text: 'Click me, please',
});
}, 1000);