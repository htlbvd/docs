// var app4 =new Vue({
//   el: '#app-4',
//   data: {
//     todos: [
//       { text: '学习 JavaScript'},
//       { text: '学习 Vue'},
//       { text: '整个牛项目'}
//     ]
//   }
// })

// Vue.component('todo-item', {
//   props: ['todo'],
//   template: '<li>{{ todo.text }}</li>'
// })

// var app7 = new Vue({
//   el: '#app-7',
//   data: {
//     groceryList: [
//       { id: 0, text: '蔬菜' },
//       { id: 1, text: '奶酪' },
//       { id: 2, text: '随便其它什么人吃的东西' }
//     ]
//   }
// })
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    seen: 'true',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ],
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    },
    numbers: [ 1, 2, 3, 4, 5 ],
    checked: 'false',
    checkedNames: [],
    picked: '',
    selected: '',
    options: [
      { text: 'one', value: 'A' },
      { text: 'two', value: 'B' },
    ]
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    },
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('');
    }
  }
})