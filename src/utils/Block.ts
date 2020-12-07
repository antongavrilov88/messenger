import EventBus from './eventBus.js'
declare let window:any;
declare global {
  interface Window {
    Handlebars: object,
    formHandler: ( id: string ) => void
  }
}
type child = {
  [prop: string]: string | HTMLElement,
}
class Block {
    static EVENTS = {
      INIT: "init",
      FLOW_CDM: "flow:component-did-mount",
      FLOW_CDU: "flow:component-did-update",
      FLOW_RENDER: "flow:render",
      FLOW_RC: "flow:render-children" 
    };
    _element = null;
    _meta: {
      tagName: string,
      props: object
    };
    props: {
      [prop: string]: any
    };
    children: child[]
    eventBus: () => EventBus;
    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(tagName: string = "div", props: object = {}, children: child[] = []) {
      const eventBus = new EventBus();
      this._meta = {
        tagName,
        props
      };
      this.children = children
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
      eventBus.on(Block.EVENTS.FLOW_RC, this._renderChildren.bind(this))
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
      this.eventBus().emit(Block.EVENTS.FLOW_RC)
    }
    componentDidMount(oldProps?: object) {}
    _renderChildren() {
      console.log( this )
      if ( this.children ) {
      this.children.map( child => {
          let parentNode = this._element.querySelector( child.parentNodeSelector )
          parentNode.appendChild( child.node )
      })
      }
      return
    }
    _componentDidUpdate(oldProps: object, newProps: object) {
      const response = this.componentDidUpdate(oldProps, newProps);
      if (!response) {
        return;
      }
      this._render();
    }
    componentDidUpdate(oldProps: object, newProps: object) {
      console.log( JSON.stringify(oldProps) === JSON.stringify(newProps)  )
      return true
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
        let compiled = this.render()
        this._element.innerHTML = ''
        this._element.innerHTML = compiled
        // if (compiled.classList.value) {
        // this._element.classList.add( compiled.classList.value )
        // }
        // if (compiled.id) {
        //   this._element.id = compiled.id
        // }
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
    compile(tpl, ctx) {
      return this._compile(tpl, ctx)
    }
    _compile(tpl, props) {
      // const block = this.render();
      const template = window.Handlebars.compile( tpl )
      const HTML = template( props )
      let tempBlock = document.createElement('div')
      tempBlock.innerHTML = ''
      tempBlock.innerHTML = HTML
      return tempBlock.firstElementChild
    }
    render() {}
    getContent() {
      return this.element;
    }
    _makePropsProxy(props: object) {
      const self = this;
      return new Proxy(props, {
        get(target: { [prop: string]: string | object | number }, prop: string) {
          const value = target[prop];
          return typeof value === "function" ? value.bind(target) : value;
        },
        set(target, prop, value) {
          target[prop] = value;
          self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
          console.log( 'proxyUpdated' )
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

export default Block