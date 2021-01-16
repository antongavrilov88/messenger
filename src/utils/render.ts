export function render(query: string, block: any) {
	const root = document.querySelector(query);
	if (root) {
		root.appendChild(block.getContent());
	}

	block.addListeners();
	return root;
}
