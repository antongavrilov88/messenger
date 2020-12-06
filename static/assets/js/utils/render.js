export function render(query, block) {
    console.log(query, block);
    const root = document.querySelector(query);
    root.appendChild(block.getContent());
    return root;
}
//# sourceMappingURL=render.js.map