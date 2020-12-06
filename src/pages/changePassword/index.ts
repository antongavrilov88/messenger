import AuthWorkspace from '../../components/AuthWorkspace.js'
import { render } from '../../utils/render.js'
import ReturnBlock from '../../components/ReturnBlock.js'
import ChangePassword from '../../components/ChangePassword.js'

const changePasswordForm = new ChangePassword({})

const passwordReturnBlock = new ReturnBlock({})

const workspaceChildren = [
    {
        parentNodeSelector: '.workspace__container',
        node: passwordReturnBlock.getContent()
    },
    // {
    //     parentNodeSelector: '.workspace__container',
    //     node: .getContent()
    // },
    {
        parentNodeSelector: '.workspace__container',
        node: changePasswordForm.getContent()
    }
]

const workspace = new AuthWorkspace({}, workspaceChildren)

render(".app", workspace)


// <div class="profile-info-container__avatar">

// </div>
// <form class="profile-info-container" id="changePasswordForm">
// <span class="profile-info-container__property">Старый пароль</span>
// <input class="change-input" type="password" name="oldPassword" />
// <hr />
// <span class="profile-info-container__property">Новый пароль пароль</span>
// <input class="change-input" type="password" name="newPassword" />
// <button class="profile-info-container__submit-button" type="submit" onclick="formHandler( 'changePasswordForm' )">Изменить</button>
// </form>