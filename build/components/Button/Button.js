"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = require("../../Block");
class Button extends Block_1.default {
    constructor(props) {
        super("button", props);
    }
    render() {
        return `<div>${this.props.text}</div>`;
    }
}
exports.default = Button;
