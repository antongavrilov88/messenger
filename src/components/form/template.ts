/* eslint-disable max-len */
export const tpl = `<form class={{className}} id={{id}}>
                        <span class="form__title">{{title}}</span>
                        {{#each inputs}}
                            <label class="{{this.lable.className}}"> {{this.lable.title}}
                                <input class="{{this.input.className}}" type="{{this.input.type}}" name="{{this.input.name}}" placeholder="{{this.input.placeholder}}" onfocus="{{this.handler}}" onblur="{{this.handler}}"/>
                            </label>
                        {{/each}}
                        {{{submitButton}}}
                    </form>`;
