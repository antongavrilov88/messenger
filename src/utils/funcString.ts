function funcString(fn, arg = null) {
    return "window." + fn.name + `(${arg})`
}
export default funcString