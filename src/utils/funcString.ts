function funcString(fn: (arg: string | Node) => void | {}, arg: null | string = null) {
    return fn.name + `(${arg})`
}
export default funcString