import { render } from '../../utils/render.js'
import TestComponent from '../testComponent/TestComponent.js'

const testComponent = new TestComponent({
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