from odoo import models, fields, api


class Pokemon(models.Model):
    _name = 'pokemon'
    _description = 'Pokemon Type'

    name = fields.Char('name')
    description = fields.Text('description')
    height = fields.Float('size in dm')
    weight = fields.Float('weight in hectograms')
    types = fields.Many2many('pokemon.type', string='types')
    sprites = fields.One2many('pokemon.sprite', inverse_name='pokemon', string='sprites')
    moves = fields.One2many('pokemon.learned.move', inverse_name='pokemon', string="moves")


class PokemonSprite(models.Model):
    _name = 'pokemon.sprite'
    _description = 'Pokemon Sprite Type'

    name = fields.Char('name')
    side = fields.Selection([
        ('front', 'Front side'),
        ('back', 'Back side')
    ], "Sides")
    file = fields.Binary('file')
    pokemon = fields.Many2one('pokemon', string='pokemons')


class PokemonType(models.Model):
    _name = 'pokemon.type'
    _description = 'Pokemon Type Type'

    name = fields.Char('name')
    pokemons = fields.Many2many('pokemon', string='pokemons')
    moves = fields.Many2many('pokemon.move', string='moves')


class PokemonMove(models.Model):
    _name = 'pokemon.move'
    _description = 'Pokemon Move Type'    


    name = fields.Char('name')
    accuracy = fields.Integer('accuracy')
    power = fields.Integer('power')
    pp = fields.Integer('mana')
    types = fields.Many2many('pokemon.type', string='types')
    learned_moves = fields.One2many('pokemon.learned.move', inverse_name='move')


class PokemonLearnedMove(models.Model):
    _name = 'pokemon.learned.move'
    _description = 'Pokemon Learned move by level'

    level = fields.Integer('name')
    move = fields.Many2one('pokemon.move', string="move")
    pokemon = fields.Many2one('pokemon', string="pokemon")
