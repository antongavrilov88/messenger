/* eslint-disable max-len */
export const tpl = `<div class="profile-info__wrapper">
                        <form class="profile-info-container" id="{{id}}">
                            <span class="profile-info-container__property">Старый пароль</span>
                                <input class="change-input" type="password" name="oldPassword" placeholder="старый пароль" onfocus="{{inputHandler}}" onblur="{{inputHandler}}"/>
                            <hr />
                            <span class="profile-info-container__property">Новый пароль пароль</span>
                            <input class="change-input" type="password" name="newPassword" placeholder="новый пароль"  onfocus="{{inputHandler}}" onblur="{{inputHandler}}"/>
                            {{{submitButton}}}
                        </form>
                    </div>`;
