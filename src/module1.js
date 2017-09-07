import Controller from './Controller'
import  $ from 'jquery'
new Controller({
  element: '.module1',
  template: `
    <input type="text" name="number1" value="{{output}}">
    <button name="button1">点 我</button>
    <div class="output">{{output}}</div>
  `,
  data: {
    output: ''
  },
  events: {
    'change input': 'onChangeInput',
    'click button': 'onClickButton'
  },
  onChangeInput(e) {
    let input = e.currentTarget
    console.log(input.value)
  },
  onClickButton() {
    let value = this.$element.find('input').val()
    this.data.output = value
    this.render()
  }
})