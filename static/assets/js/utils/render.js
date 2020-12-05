export function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.getContent());
    console.log('пашет', root);
    return root;
}
//# sourceMappingURL=render.js.map