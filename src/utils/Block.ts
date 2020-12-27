import EventBus from './eventBus.js'
declare let window:any;
declare global {
  interface Window {
    Handlebars: object
  }
}

abstract class Block<Props> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
    FLOW_ADD_LISTENERS: "flow:add-listeners"
  };
  _element: null | Element = null;
  _meta: { tagName: string; props?: object; };
  eventBus: () => EventBus;
  props: {
    [key:string]: any
  } = {}
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
    eventBus.on(Block.EVENTS.FLOW_ADD_LISTENERS, this.addListeners.bind(this));
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
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }
  componentDidMount() {}
  _componentDidUpdate(oldProps: any, newProps: any) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
    this.addListeners()
  }
  componentDidUpdate(oldProps: any = null, newProps: any = null) {
    return true;
  }
  setProps = (nextProps: any) => {
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
    if ( block && this._element ) {
    this._element.innerHTML = block
    }
    // this.eventBus().emit(Block.EVENTS.FLOW_ADD_LISTENERS)
  }
  compile(template: string, ctx: Props) {
    let block = window.Handlebars.compile(template)
    return block(ctx)
  }
  render(): void | string {}
  getContent() {
    return this.element;
  }
  _makePropsProxy(props: object) {
    const self = this;
    return new Proxy(props, {
      get(target: {[prop: string]: any}, prop: any) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target: {[prop: string]: any}, prop: any, value: any) {
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      }
    });
  }
  _createDocumentElement(tagName: any) {
    return document.createElement(tagName);
  }
  show() {}
  addListeners() {}
}
export default Block