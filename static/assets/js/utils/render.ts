function render(id, block) {
    const root = document.getElementById(id);
    root.appendChild(block.getContent());
    return root;
 }

 export default render