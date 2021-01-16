/* eslint-disable guard-for-in */
export function cloneDeep(objArr: any[]) {
	function cloneObj(obj: any) {
		let clonedObj: any = {};
		for (let key in obj) {
			let valueType = typeof obj[key];
			if (valueType === 'string' ||
				valueType === 'number' ||
				valueType === 'boolean' ||
				obj[key] === null) {
				clonedObj[key] = obj[key];
			} else if (valueType === 'object' && obj[key] !== null) {
				if (Array.isArray(obj[key])) {
					let clonedArr: {}[] = [];
					obj[key].map((value: any) => clonedArr.push(cloneObj(value)));
					clonedObj[key] = clonedArr;
				} else {
					clonedObj[key] = cloneObj(obj[key]);
				}
			}
		}

		return clonedObj;
	}

	let clonedObjArr: {}[] = [];
	objArr.map((obj: any) => clonedObjArr.push(cloneObj(obj)));
	return clonedObjArr;
}
