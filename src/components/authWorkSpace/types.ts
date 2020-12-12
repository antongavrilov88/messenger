import Modal from "../modal/Modal";
import ProfileForm from "../profileForm/ProfileForm";
import ReturnBlock from "../returnBlock/ReturnBlock";

export type AuthWorkspaceProps = {
        child: (Modal | ProfileForm | ReturnBlock)[];
  }