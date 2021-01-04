function isArray(value: unknown): value is [] {
    return Array.isArray(value);
}

export type PlainObject<T = unknown> = {
    [k in string]: T;
};

export function isPlainObject(value: unknown): value is PlainObject {
    return typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]';
}

export function isArrayOrObject(value: unknown): value is ([] | PlainObject) {
    return isPlainObject(value) || isArray(value);
}

// export function isEqual(a: any | string | any[] | null | undefined, b: any | string | RegExp | any[] | null | undefined): boolean {
//     // Код здесь
//     if (a === null || a === undefined || b === null || b === undefined) { return a === b; }
//     // after this just checking type of one would be enough
//     if (a.constructor !== b.constructor) { return false; }
//     // if they are functions, they should exactly refer to same one (because of closures)
//     // if (a instanceof Function) { return a === b; }
//     // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)
//     // if (a instanceof RegExp) { return a === b; }
//     if (a === b || a.valueOf() === b.valueOf()) { return true; }
//     if (Array.isArray(a) && Array.isArray(b) && a.length !== b.length) { return false; }

//     // if they are dates, they must had equal valueOf
//     // if (a instanceof Date) { return false; }

//     // if they are strictly equal, they both need to be object at least
//     if (!(a instanceof Object)) { return false; }
//     if (!(b instanceof Object)) { return false; }

//     // recursive object equality check
//     var p = Object.keys(a);
//     return Object.keys(b).every(function (i: string) { return p.indexOf(i) !== -1; }) &&
//         p.every(function (i) { return isEqual(a[i], b[i]); });
// }

export function isEqual(lhs: any | [] | PlainObject, rhs: any | [] | PlainObject) {
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

export function isEqualPrim(lhs: string | number | boolean, rhs: string | number | boolean) {
    return lhs === rhs;
}