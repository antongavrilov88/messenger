enum METHOD {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
};

type Options = {
    method: METHOD;
    headers?: any
    data?: any;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

class HTTP {
    _baseURL: string = 'https://ya-praktikum.tech/api/v2'
    _subURL: string = ''
    constructor(subURL: string) {
        this._subURL = subURL
    }
    get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        return this.request(url, { ...options, method: METHOD.GET });
    };

    post(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        return this.request(url, { ...options, method: METHOD.POST })
    }

    put(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        return this.request(url, { ...options, method: METHOD.PUT })
    }

    delete(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        return this.request(url, { ...options, method: METHOD.DELETE })
    }

    request(url: string, options: Options): Promise<XMLHttpRequest> {
        const { method, data, headers } = options;
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, `${this._baseURL}${this._subURL}${url}`);
            
            if (headers) {
                xhr.setRequestHeader('Content-Type', 'multipart/form-data;')
            } else {
                xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
            }
            
            xhr.withCredentials = true
        
            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === METHOD.GET || !data) {
                console.log('таааак бля')
                xhr.send();
            } else {
                console.log(data)
                xhr.send(data);
            }
        });
    };
} 
export default HTTP