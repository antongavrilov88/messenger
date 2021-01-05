import Route from "./Rout.js";
class Router {
    constructor(rootQuery) {
        if (Router.__instance) {
            return Router.__instance;
        }
        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;
        Router.__instance = this;
    }
    use(pathname, block) {
        const route = new Route(pathname, block, { rootQuery: this._rootQuery });
        this.routes.push(route);
        return this;
    }
    start() {
        window.onpopstate = (event) => {
            this._onRoute(event.currentTarget.location.pathname);
        };
        this._onRoute(window.location.pathname);
    }
    _onRoute(pathname) {
        let route;
        if (this.getRoute(pathname)) {
            route = this.getRoute(pathname);
        }
        if (this._currentRoute) {
            this._currentRoute.leave();
        }
        this._currentRoute = route;
        route.render(route, pathname);
    }
    go(pathname) {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }
    back() {
        window.history.back();
    }
    forward() {
        window.history.forward();
    }
    getRoute(pathname) {
        return this.routes.find((route) => route.match(pathname));
    }
}
export default Router;
//# sourceMappingURL=Router.js.map