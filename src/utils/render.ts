export function render(query, block) {
    // const root = document.querySelector(query);
    // let content = block.getContent()
    // root.appendChild( content.firstChild );
    // return root;
    const root = document.querySelector(query);
    root.appendChild(block.getContent());
    console.log( 'пашет', root )
    return root;
 }