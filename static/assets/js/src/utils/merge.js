export function merge(lhs, rhs) {
    for (let key in rhs) {
        if (typeof lhs[key] != 'object') {
            lhs[key] = rhs[key];
        }
        else if (typeof rhs[key] == 'object') {
            lhs[key] = merge(lhs[key], rhs[key]);
        }
    }
    return lhs;
}
;
//# sourceMappingURL=merge.js.map