odoo.define('pokemon.App', function(require) {
    const { Component, tags, useState, hooks } = owl
    const { xml } = tags
    const { useRef, useDispatch, useStore } = hooks


    const APP_TEMPLATE = xml /*xml*/ `
    <div class="todo-app">
       HELLO WORLd
    </div>
    `

    class App extends Component {
        static template = APP_TEMPLATE
    }

    return App
})
