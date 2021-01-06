export function toggleActiveClassName(element: HTMLElement, className: string) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        console.log('pisa')
        element.classList.add(className)
        console.log(element.classList)
    }
}