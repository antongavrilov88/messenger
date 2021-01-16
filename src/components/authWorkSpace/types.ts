import App from '../app/App';
import ChangePassword from '../changePassword/ChangePassword';
import ChatBlock from '../chatBlock/ChatBlock';
import ChatListBlock from '../chatListBlock/ChatListBlock';
import DummyChatBlock from '../DummyChatBlock/DummyChatBlock';
import Error from '../error/Error';
import Modal from '../modal/Modal';
import ProfileForm from '../profileForm/ProfileForm';
import ReturnBlock from '../returnBlock/ReturnBlock';

export type AuthWorkspaceProps = {
        // eslint-disable-next-line max-len
        content: (Modal | ProfileForm | ReturnBlock | ChangePassword | ChatListBlock | DummyChatBlock | ChatBlock | Error | App)[];
  }
