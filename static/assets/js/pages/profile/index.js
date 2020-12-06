import Profile from '../../components/Profile.js';
import { profileCTX } from './contexts.js';
import AuthWorkspace from '../../components/AuthWorkspace.js';
import { render } from '../../utils/render.js';
import ProfileReturnBlock from '../../components/ProfileReturnBlock.js';
const profileForm = new Profile(profileCTX);
const profileReturnBlock = new ProfileReturnBlock({});
const workspaceChildren = [
    {
        parentNodeSelector: '.workspace__container',
        node: profileReturnBlock.getContent()
    },
    {
        parentNodeSelector: '.workspace__container',
        node: profileForm.getContent()
    }
];
const workspace = new AuthWorkspace({}, workspaceChildren);
render(".app", workspace);
//# sourceMappingURL=index.js.map