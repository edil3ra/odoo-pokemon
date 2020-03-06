odoo.define('pokemon.main', function(require) {
    // import { utils, Store, config } from "@odoo/owl"
    const { utils, config } = owl
    const App = require('pokemon.App')
    
    
    function setup() {
        config.mode = 'dev'
        const app = new App()
        
        app.mount(document.getElementById('pokemon_application'))
    }
    utils.whenReady(setup)
})
