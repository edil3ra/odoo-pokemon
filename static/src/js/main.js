
// import { utils, Store, config } from "@odoo/owl"
const { utils, config } = owl
// import { App } from "./components/App"
// import { actions, initialState} from './store'
// import './app.css'


// function makeStore() {
//     const localStorage = window.localStorage.getItem('todoapp')
//     const state = localStorage ? JSON.parse(localStorage) : initialState
//     const store = new Store({actions: actions, state: state})
//     store.on('update', null, () => {
//         window.localStorage.setItem('todoapp', JSON.stringify(store.state))
//     })
//     return store
// }

function setup() {
    config.mode = 'dev'
    // App.env.store = makeStore()
    const app = new App()
    // window.App = App
    // window.app = app
    // window.store = App.env.store
    
    app.mount(document.getElementById('pokemon_application'))
}

utils.whenReady(setup)
