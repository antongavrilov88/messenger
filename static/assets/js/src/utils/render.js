export function render(query, block) {
    const root = document.querySelector(query);
    if (root) {
        root.appendChild(block.getContent());
    }
    block.addListeners();
    return root;
}
//# sourceMappingURL=render.js.map