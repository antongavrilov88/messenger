export function render(query, block) {
    const root = document.querySelector(query);
    let content = block.getContent();
    root.appendChild(content.firstChild);
    return root;
}
//# sourceMappingURL=render.js.map