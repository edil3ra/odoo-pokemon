from odoo import http


class Pokemon(http.Controller):
    @http.route('/', auth='user', type='http')
    def index(self, **kw):
        return http.request.render('pokemon.website')
