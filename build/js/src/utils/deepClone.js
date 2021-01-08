export function cloneDeep(objArr) {
    function cloneObj(obj) {
        let clonedObj = {};
        for (let key in obj) {
            let valueType = typeof obj[key];
            if (valueType === 'string' || valueType === 'number' || valueType === 'boolean' || obj[key] === null) {
                clonedObj[key] = obj[key];
            }
            else if (valueType === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
                clonedObj[key] = cloneObj(obj[key]);
            }
            else if (valueType === 'object' && Array.isArray(obj[key]) && obj[key] !== null) {
                let clonedArr = [];
                obj[key].map((value) => clonedArr.push(cloneObj(value)));
                clonedObj[key] = clonedArr;
            }
        }
        return clonedObj;
    }
    let clonedObjArr = [];
    objArr.map((obj) => clonedObjArr.push(cloneObj(obj)));
    return clonedObjArr;
}
//# sourceMappingURL=deepClone.js.map