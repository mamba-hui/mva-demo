import Controller from './Controller'
import $ from "jquery"
let model = {
  data: {
    number: 0
  },
  get() {
    return $.get('/data.json').then((response) => {
      this.data = response
      return this.data
    })
  },
  increase() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.dir("加一成功了")
        this.data.number++
        resolve(this.data)
      }, 500)
    })
  },
  decrease() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.dir("减一成功了")
        this.data.number--
        resolve(this.data)
      }, 500)
    })
  }
}

new Controller({
  element: '.module2',
  template: '#module2Template',
  model: model,
  data: {
    number: 0
  },
  events: {
    'click button[name="increase"]': 'increase',
    'click button[name="decrease"]': 'decrease'
  },
  init() {
    this.model.get().then(() => {
      this.render()
    })
  },
  increase() {
    this.model.increase().then(() => {
      this.render()
    })
  },
  decrease() {
    this.model.decrease().then(() => {
      this.render()
    })
  }
})