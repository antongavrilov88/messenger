import EventBus from "./eventBus.js";
class Store {
    constructor(state = {}) {
        this.state = { auth: { title: '' }, reg: { title: '' } };
        if (Store._instance) {
            throw new Error('Can not create new instance');
        }
        Store._instance = this;
        const eventBus = new EventBus;
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        this.state = this._makeStateProxy(state);
    }
    static getInstance() {
        if (!Store._instance) {
            Store._instance = new Store;
        }
        return Store._instance;
    }
    _registerEvents(eventBus) {
        eventBus.on(Store.EVENTS.FLOW_SDU, this._storeDidUpdate.bind(this));
    }
    subscribe(callback) {
        this.eventBus().on(Store.EVENTS.FLOW_SNSTP, callback);
    }
    _storeDidUpdate(oldState = {}, newState = {}) {
        const response = this.storeDidUpdate(oldState, newState);
        if (!response) {
            return;
        }
        this.eventBus().emit(Store.EVENTS.FLOW_SNSTP, newState);
    }
    storeDidUpdate(oldState, newState) {
        return true;
    }
    _makeStateProxy(obj) {
        const self = this;
        return new Proxy(obj, {
            get(target, prop) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target, prop, value) {
                target[prop] = value;
                self.eventBus().emit(Store.EVENTS.FLOW_SDU, Object.assign({}, target), target);
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            }
        });
    }
}
Store.EVENTS = {
    FLOW_SDU: "flow:store-did-update",
    FLOW_SNSTP: "flow:set-new-state-to-props"
};
Store.setState = (nextState) => {
    if (!nextState) {
        return;
    }
    const store = Store.getInstance();
    Object.assign(store.state, nextState);
};
export default Store;
//# sourceMappingURL=Store.js.map