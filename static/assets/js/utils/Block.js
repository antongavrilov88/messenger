import EventBus from './eventBus.js';
class Block {
    constructor(tagName = "div", props = {}, children = []) {
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
        this.children = children;
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
        eventBus.on(Block.EVENTS.FLOW_RC, this._renderChildren.bind(this));
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
        this.eventBus().emit(Block.EVENTS.FLOW_RC);
    }
    componentDidMount(oldProps) { }
    _renderChildren() {
        console.log(this);
        if (this.children) {
            this.children.map(child => {
                let parentNode = this._element.querySelector(child.parentNodeSelector);
                parentNode.appendChild(child.node);
            });
        }
        return;
    }
    _componentDidUpdate(oldProps, newProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this._render();
        console.log('UPDATED');
    }
    componentDidUpdate(oldProps, newProps) {
        console.log(JSON.stringify(oldProps) === JSON.stringify(newProps));
        return true;
    }
    get element() {
        return this._element;
    }
    _render() {
        let compiled = this._compile();
        this._element.innerHTML = '';
        this._element.innerHTML = compiled.innerHTML;
        this._element.classList.add(compiled.classList.value);
        if (compiled.id) {
            this._element.id = compiled.id;
        }
        console.log('компайлед', compiled, compiled.innerHTML);
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
    _compile() {
        const block = this.render();
        const template = window.Handlebars.compile(block);
        const HTML = template(this.props);
        let tempBlock = document.createElement('div');
        tempBlock.innerHTML = '';
        tempBlock.innerHTML = HTML;
        console.log('piskaaaa', tempBlock.innerHTML, tempBlock, HTML);
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
    FLOW_RENDER: "flow:render",
    FLOW_RC: "flow:render-children"
};
export default Block;
//# sourceMappingURL=Block.js.map