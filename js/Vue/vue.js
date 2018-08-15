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
    selected: [],
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
var todoApp=new Vue({
  el: '#todo-app',
  data: {
    todo: '',
    items: ['q','w'
    ]
  },
  methods: {
    add: function () {
      if (this.todo) {
        this.items.push(this.todo);
        this.todo = "";
      }
    },
    rm: function (i) {
      this.items.splice(i,1);
    }
  }
})

Vue.component('blog-post', {
  props: ['post'],

  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">大</button>
      <div v-html="post.content"></div>
    </div>
  `
})

var blogPost=new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue',content:'<p>文章</p>' },
      { id: 2, title: 'Blogging with Vue' }
    ],
    postFontSize: 1
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount;
    }
  }
})
