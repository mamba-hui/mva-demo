import $ from 'jquery'
import handlebars from "handlebars"

class Controller {
  constructor(options) {
    Object.keys(options).forEach((key) => {
      this[key] = options[key]
    })
    this.$element = $(this.element)
    this.init && this.init()
    if(this.template) {
      this.render()
    }
    this.bindEvents()
  }
  bindEvents() {
    Object.keys(this.events).forEach((key) => {
      let parts = key.split(' ')
      let eventType = parts.shift()
      let selector = parts.join(' ')
      if(typeof this.events[key] === 'function') {
        this.$element.on(eventType, selector, this.events[key])
      }else if(typeof this.events[key] === 'string') {
        this.$element.on(eventType, selector, this[this.events[key]].bind(this))
      }
    })
  }
  render() {
    let template = this.template[0] === '#' ? $(this.template).html() : this.template
    let html = handlebars.compile(template)(this.model.data)
    this.$element.html(html)
  }
}
export default Controller