export function toggleActiveClassName(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    }
    else {
        console.log('pisa');
        element.classList.add(className);
        console.log(element.classList);
    }
}
//# sourceMappingURL=toggleActiveClassName.js.map