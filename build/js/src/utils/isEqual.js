function isArray(value) {
    return Array.isArray(value);
}
export function isPlainObject(value) {
    return typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]';
}
export function isArrayOrObject(value) {
    return isPlainObject(value) || isArray(value);
}
export function isEqual(lhs, rhs) {
    if (Object.keys(lhs).length !== Object.keys(rhs).length) {
        return false;
    }
    for (const [key, value] of Object.entries(lhs)) {
        const rightValue = rhs[key];
        if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
            if (isEqual(value, rightValue)) {
                continue;
            }
            return false;
        }
        if (value !== rightValue) {
            return false;
        }
    }
    return true;
}
export function isEqualPrim(lhs, rhs) {
    return lhs === rhs;
}
//# sourceMappingURL=isEqual.js.map