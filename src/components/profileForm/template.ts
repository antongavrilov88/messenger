export const tpl = `<div class="profile-info__wrapper">
                        <div class="profile-info-container">
                            <form id="{{id}}" class="profile-info-container__form">
                                <div class="profile-info-container__avatar" onclick="{{modalHandler}}">
                                </div>
                                {{#each profileData}}
                                    <div class="profile-info-container__item">
                                        <div class="profile-info-container__item__prop-name">
                                            <span class="profile-info-container__property">{{this.label}}</span>
                                        </div>
                                        <div class="profile-info-container__item__prop-input">
                                            <input class="change-input" type="{{this.inputType}}" name="{{this.inputName}}" placeholder="{{this.inputPlaceholder}}" onfocus="{{this.handler}}" onblur="{{this.handler}}"/>
                                        </div>
                                    </div>
                                    <hr />
                                {{/each}}
                                {{{submitButton}}}
                            </form>
                        </div>
                    </div>`