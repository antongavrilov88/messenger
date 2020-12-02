"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function render(id, block) {
    const root = document.getElementById(id);
    root.appendChild(block.getContent());
    return root;
}
exports.default = render;
