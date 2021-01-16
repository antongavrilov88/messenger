import Route from './Rout';

class Router {
	_rootQuery: any;
	static __instance: any;
	routes: (Route | string)[];
	history: History;
	_currentRoute: null | Route;
	constructor(rootQuery: any) {
		if (Router.__instance) {
			return Router.__instance;
		}

		this.routes = [];
		this.history = window.history;
		this._currentRoute = null;
		this._rootQuery = rootQuery;

		Router.__instance = this;
	}

	use(pathname: any, block: any) {
		const route = new Route(pathname, block, {rootQuery: this._rootQuery});
		this.routes.push(route);
		return this;
	}

	start() {
		window.onpopstate = (event: any) => {
			this._onRoute(event.currentTarget.location.pathname);
		};

		this._onRoute(window.location.pathname);
	}

	_onRoute(pathname: string) {
		let route: any;
		if (this.getRoute(pathname)) {
			route = this.getRoute(pathname);
		}

		if (this._currentRoute) {
			this._currentRoute.leave();
		}

		this._currentRoute = route;
		route.render(route, pathname);
	}

	go(pathname: any) {
		this.history.pushState({}, '', pathname);
		this._onRoute(pathname);
	}

	back() {
		window.history.back();
	}

	forward() {
		window.history.forward();
	}

	getRoute(pathname: any) {
		return this.routes.find((route: string) => route.match(pathname));
	}
}
export default Router;
