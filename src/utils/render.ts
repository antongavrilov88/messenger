export function render(query: string, block) {
    console.log( query, block )
    const root: null | Node = document.querySelector(query);
    if ( root ) {
    root.appendChild(block.getContent());
    }
    return root;
 }