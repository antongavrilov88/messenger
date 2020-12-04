import { render } from '../../utils/render.js'
import Form from './Form.js'

const testComponent = new Form({
    text: 'Click me',
});

// app — это id дива в корне DOM
render(".error-container", testComponent);

// Через секунду контент изменится сам, достаточно обновить пропсы
setTimeout(() => {
testComponent.setProps({
text: 'Click me, please',
});
}, 1000);