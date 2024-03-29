import {isEqualPrim} from './isEqual';
import {render} from './render';

class Route {
	_pathname: string
	_blockClass: any
	_block: any
	_props: any
	constructor(pathname: string, view: any, props: any) {
		this._pathname = pathname;
		this._blockClass = view;
		this._block = null;
		this._props = props;
	}

	navigate(pathname: string) {
		if (this.match(pathname)) {
			this._block.show();
		}
	}

	leave() {
		this._block.hide();
	}

	match(pathname: string) {
		return isEqualPrim(pathname, this._pathname);
	}

	render() {
		if (!this._block) {
			this._block = new this._blockClass();
			render(this._props.rootQuery, this._block);
			return;
		}

		this._block.show();
	}
}
export default Route;
