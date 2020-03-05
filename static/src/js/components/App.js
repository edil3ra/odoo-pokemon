const { Component, tags, useState, hooks } = "owl"
const { xml } = tags
const { useRef, useDispatch, useStore } = hooks



const APP_TEMPLATE = xml /*xml*/ `
    <div class="todo-app">
       HELLO
    </div>
    `

class App extends Component {
    static template = APP_TEMPLATE
}

// window.App = app
window.APP_TEMPLATE = APP_TEMPLATE
