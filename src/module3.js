import Controller from './Controller'
new Controller({
  element: '.module3',
  events: {
    'change input': function (e) {
      console.dir('change3')
    },
    'click button': function (e) {
      console.dir('click3')
    }
  }
})