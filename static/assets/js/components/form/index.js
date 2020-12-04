import { render } from '../../utils/render.js';
import Form from './Form.js';
const testComponent = new Form({
    text: 'Click me',
});
render(".error-container", testComponent);
setTimeout(() => {
    testComponent.setProps({
        text: 'Click me, please',
    });
}, 1000);
//# sourceMappingURL=index.js.map