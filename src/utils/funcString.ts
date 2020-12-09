function funcString(fn: (arg: string | Node) => void | {}, arg: null | string = null) {
    return "window." + fn.name + `(${arg})`
}
export default funcString