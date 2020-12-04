import { render } from '../../utils/render.js';
import TestComponent from '../testComponent/TestComponent.js';
const testComponent = new TestComponent({
    text: 'Click me',
});
render(".error-container", testComponent);
setTimeout(() => {
    testComponent.setProps({
        text: 'Click me, please',
    });
}, 1000);
//# sourceMappingURL=index.js.map