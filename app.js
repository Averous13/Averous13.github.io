Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }} </li>'
})

var app1 = new Vue({
    el:' #app-1',
    data: {
        bukus: [
            {id: 1, text: 'buku tulis 1'},
            {id: 2, text: 'buku tulis 2'},
            {id: 3, text: 'buku tulis 3'}
        ],
        clicked: false
    }
})