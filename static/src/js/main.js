odoo.define('pokemon.main', function(require) {
    // import { utils, Store, config } from "@odoo/owl"
    const { utils, config, Store } = owl
    const App = require('pokemon.App')
    const initialState = require('pokemon.initialState')
    const actions = require('pokemon.Store')
    
    function makeStore() {
        const localStorage = window.localStorage.getItem('pokemon')
        const state = localStorage ? JSON.parse(localStorage) : initialState
        const store = new Store({actions: actions, state: state})
        store.on('update', null, () => {
            window.localStorage.setItem('todoapp', JSON.stringify(store.state))
        })
        return store
    }

    function setup() {
        config.mode = 'dev'
        App.env.store = makeStore()
        const app = new App()
        
        app.mount(document.getElementById('pokemon_application'))
    }
    utils.whenReady(setup)
})
