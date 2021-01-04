var METHOD;
(function (METHOD) {
    METHOD["GET"] = "GET";
    METHOD["POST"] = "POST";
    METHOD["PUT"] = "PUT";
    METHOD["PATCH"] = "PATCH";
    METHOD["DELETE"] = "DELETE";
})(METHOD || (METHOD = {}));
;
class HTTP {
    constructor(subURL) {
        this._baseURL = 'https://ya-praktikum.tech/api/v2';
        this._subURL = '';
        this._subURL = subURL;
    }
    get(url, options = {}) {
        return this.request(url, Object.assign(Object.assign({}, options), { method: METHOD.GET }));
    }
    ;
    post(url, options = {}) {
        return this.request(url, Object.assign(Object.assign({}, options), { method: METHOD.POST }));
    }
    put(url, options = {}) {
        return this.request(url, Object.assign(Object.assign({}, options), { method: METHOD.PUT }));
    }
    delete(url, options = {}) {
        return this.request(url, Object.assign(Object.assign({}, options), { method: METHOD.DELETE }));
    }
    request(url, options) {
        let { method, data, headers } = options;
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, `${this._baseURL}${this._subURL}${url}`);
            if (headers) {
                data = options.data;
            }
            else {
                xhr.setRequestHeader('Content-Type', 'application/json');
            }
            xhr.withCredentials = true;
            xhr.onload = function () {
                resolve(xhr);
            };
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;
            if (method === METHOD.GET || !data) {
                xhr.send();
            }
            else {
                xhr.send(data);
            }
        });
    }
    ;
}
export default HTTP;
//# sourceMappingURL=HTTP.js.map