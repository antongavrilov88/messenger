import { render } from '../../utils/render.js';
import SignIn from './SignIn.js';
import Form from '../../components/Form.js';
import { formCTX } from './contexts.js';
const form = new Form(formCTX);
const signInChildren = [
    {
        parentNodeSelector: '.container',
        node: form.getContent()
    }
];
const signIn = new SignIn({}, signInChildren);
render(".app", signIn);
//# sourceMappingURL=index.js.map