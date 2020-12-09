export const tpl = `<form class={{className}} id={{id}}>
                        <span class="form__title">{{title}}</span>
                        {{#each inputs}}
                            <label class="{{this.lable.className}}"> {{this.lable.title}}
                                <input class="{{this.input.className}}" type="{{this.input.type}}" name="{{this.input.name}}" placeholder="{{this.input.placeholder}}" onfocus="window.validateInput(this)" onblur="window.validateInput(this)"/>
                            </label>
                        {{/each}}
                        <button class="form__submit-button" id="pisa" type="submit" onclick="{{handler}}">Вход</button>
                    </form>`