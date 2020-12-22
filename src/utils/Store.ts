import EventBus from './eventBus.js'

class Store {
    protected static _instance: Store = new Store
    static EVENTS = {
        FLOW_SDU: "flow:store-did-update",
        FLOW_SNSTP: "flow:set-new-state-to-props"
    };
    eventBus: () => EventBus;
    state: {
        [key: string]: any
    } = {auth: { title: ''} }
    static state: any;
    static eventBus: any;
    constructor(state = {}) {
        if (Store._instance) {
            throw new Error('Can not create new instance')
        }
        const eventBus = new EventBus
        this.eventBus = () => eventBus
        this._registerEvents(eventBus)
        this.state = this._makeStateProxy(state)
    }

    static getState(): { auth: { "title": any } } {
        return this.state
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Store.EVENTS.FLOW_SDU, this._storeDidUpdate.bind(this));
    }

    static subscribe(callback: (state: any) => void) {
        this.eventBus().on(Store.EVENTS.FLOW_SNSTP, callback)
    }

    _storeDidUpdate(oldState = {}, newState = {}) {
        // organize dictionary of callbacks and think of triggering them
        // trigger all observers
        const response = this.storeDidUpdate(oldState, newState);
        if (!response) {
            return;
        }
        this.eventBus().emit(Store.EVENTS.FLOW_SNSTP, this.state)
    }

    storeDidUpdate(oldState: {}, newState: {}) {
        // add isEqual function
        return true
    }

    _makeStateProxy(obj: {}) {
        const self = this;
        return new Proxy(obj, {
            get(target: { [prop: string]: any }, prop: any) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target: { [prop: string]: any }, prop: any, value: any) {
                target[prop] = value;
                self.eventBus().emit(Store.EVENTS.FLOW_SDU, { ...target }, target);
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            }
        });
    }
}
export default Store