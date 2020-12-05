import EventBus from './eventBus.js';
class Block {
    constructor(tagName = "div", props = {}) {
        this._element = null;
        this.setProps = (nextProps) => {
            if (!nextProps) {
                return;
            }
            Object.assign(this.props, nextProps);
        };
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props
        };
        this.props = this._makePropsProxy(props);
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }
    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    _componentDidMount() {
        this.componentDidMount();
    }
    componentDidMount(oldProps) { }
    _componentDidUpdate(oldProps, newProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this._render();
        console.log('UPDATED');
    }
    componentDidUpdate(oldProps, newProps) {
        return true;
    }
    get element() {
        return this._element;
    }
    _render() {
        let elem = this._compile();
        this._element.appendChild(elem);
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
    _compile() {
        const block = this.render();
        const template = window.Handlebars.compile(block);
        const HTML = template(this.props);
        let tempBlock = document.createElement('div');
        tempBlock.innerHTML = HTML;
        return tempBlock.firstElementChild;
    }
    render() { }
    getContent() {
        return this.element;
    }
    _makePropsProxy(props) {
        const self = this;
        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target, prop, value) {
                target[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, Object.assign({}, target), target);
                console.log('proxyUpdated');
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            }
        });
    }
    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }
    show() {
        this.getContent().style.display = "block";
    }
    hide() {
        this.getContent().style.display = "none";
    }
}
Block.EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
};
export default Block;
//# sourceMappingURL=Block.js.map