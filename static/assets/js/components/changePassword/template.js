export const tpl = `<div class="profile-info__wrapper">
                        <form class="profile-info-container" id="changePasswordForm">
                            <span class="profile-info-container__property">Старый пароль</span>
                                <input class="change-input" type="password" name="oldPassword" placeholder="старый пароль"/>
                            <hr />
                            <span class="profile-info-container__property">Новый пароль пароль</span>
                            <input class="change-input" type="password" name="newPassword" placeholder="новый пароль"/>
                            <button class="profile-info-container__submit-button" type="submit" onclick="formHandler( 'changePasswordForm' )">Изменить</button>
                        </form>
                    </div>`;
//# sourceMappingURL=template.js.map