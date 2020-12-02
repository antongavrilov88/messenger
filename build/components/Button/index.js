"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const render_1 = require("../../utils/render");
const Button_1 = require("./Button");
const button = new Button_1.default({
    text: 'Click me',
});
render_1.default("#root", button);
setTimeout(() => {
    button.setProps({
        text: 'Click me, please',
    });
}, 1000);
