export function toggleActiveClassName(element: HTMLElement, className: string) {
	if (element.classList.contains(className)) {
		element.classList.remove(className);
	} else {
		element.classList.add(className);
	}
}
