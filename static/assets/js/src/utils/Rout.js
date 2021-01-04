import { isEqualPrim } from "./isEqual.js";
import { render } from "./render.js";
class Route {
    constructor(pathname, view, props) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }
    navigate(pathname) {
        if (this.match(pathname)) {
            this._block.show();
        }
    }
    leave() {
        this._block.hide();
    }
    match(pathname) {
        return isEqualPrim(pathname, this._pathname);
    }
    render() {
        if (!this._block) {
            this._block = new this._blockClass();
            render(this._props.rootQuery, this._block);
            console.log(this._props.rootQuery, this._block);
            return;
        }
        this._block.show();
    }
}
export default Route;
//# sourceMappingURL=Rout.js.map