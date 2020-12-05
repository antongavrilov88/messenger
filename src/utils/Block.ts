import EventBus from './eventBus.js'
declare let window:any;
declare global {
  interface Window { Handlebars: object; }
}
class Block {
    static EVENTS = {
      INIT: "init",
      FLOW_CDM: "flow:component-did-mount",
      FLOW_CDU: "flow:component-did-update",
      FLOW_RENDER: "flow:render"
    };
    _element = null;
    _meta: {
      tagName: string,
      props: object
    };
    props: {
      [prop: string]: any
    };
    eventBus: () => EventBus;
    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(tagName: string = "div", props: object = {}) {
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
    _registerEvents(eventBus: EventBus) {
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
      this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
    _componentDidMount() {
      // this.componentDidMount();
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    componentDidMount(oldProps?: object) {}
    _componentDidUpdate(oldProps: object, newProps: object) {
      const response = this.componentDidUpdate(oldProps, newProps);
      if (!response) {
        return;
      }
      this._render();
    }
    componentDidUpdate(oldProps: object, newProps: object) {
      return true;
    }
    setProps = (nextProps: object): void | object => {
      if (!nextProps) {
        return;
      }
      Object.assign(this.props, nextProps);
    };
    get element() {
      return this._element;
    }
    _render() {
        const block = this.render();
        const template = window.Handlebars.compile( block )
        const HTML = template( this.props )
        console.log( 'pisa', this.element)
        this._element.innerHTML = HTML

    }
    getHTML() {
      return this.element.innerHTML
    }
    render() {}
    getContent() {
      return this.element;
    }
    _makePropsProxy(props: object) {
      // Можно и так передать this
      // Такой способ больше не применяется с приходом ES6+
      const self = this;
      return new Proxy(props, {
        get(target: { [prop: string]: string | object | number }, prop: string) {
          const value = target[prop];
          return typeof value === "function" ? value.bind(target) : value;
        },
        set(target, prop, value) {
          target[prop] = value;
          // Запускаем обновление компоненты
          // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
          self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
          return true;
        },
        deleteProperty() {
          throw new Error("Нет доступа");
        }
      });
    }
    _createDocumentElement(tagName) {
      // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
      return document.createElement(tagName);
    }
    show() {
      this.getContent().style.display = "block";
    }
    hide() {
      this.getContent().style.display = "none";
    }
  }

export default Block