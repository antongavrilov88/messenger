import { render } from '../../utils/render.js'
import Workspace from './Workspace.js'

const workspace = new Workspace({
    text: 'Click me',
    buttonText: "I'm sooooooo cool",
    className: "form__submit-button",
    content: 'pisa'
});

render(".app", workspace)

// Через секунду контент изменится сам, достаточно обновить пропсы
// setTimeout(() => {
// button.setProps({
// text: 'Click me, please',
// });
// }, 1000);