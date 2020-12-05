import { render } from '../../utils/render.js';
import SignIn from './SignIn.js';
import Form from '../../components/form/Form.js';
import { formCTX } from './contexts';
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