import Block from '../utils/Block.js';
class Profile extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return (`<div class="profile-info__wrapper">
                <div class="profile-info-container">
                    <form id="changeProfileForm" class="profile-info-container__form">
                        <div class="profile-info-container__avatar" onclick="window.openModal('change-avatar-modal')">
                            <input hidden=true name="avatar" />
                        </div>
                        {{#each profileData}}
                        <div class="profile-info-container__item">
                            <div class="profile-info-container__item__prop-name">
                                <span class="profile-info-container__property">{{ this.label }}</span>
                            </div>
                            <div class="profile-info-container__item__prop-input">
                                <input class="change-input" type="{{ this.inputType }}" name="{{ this.inputName }}" placeholder="{{ this.inputPlaceholder }}" />
                            </div>
                        </div>
                        <hr />
                        {{/each}}
                        <button class="profile-info-container__submit-button" type="submit" onclick="{{handler}}">Изменить</button>
                    </form>
                </div>
            </div>`);
    }
}
export default Profile;
//# sourceMappingURL=Profile.js.map