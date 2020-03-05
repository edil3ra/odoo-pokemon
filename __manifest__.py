# -*- coding: utf-8 -*-
{
    'name': "pokemon",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "My Company",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/13.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'website'],
    'application': True,
    # always loaded
    'data': [
        'security/pokemon_security.xml',
        'security/ir.model.access.csv',
        'data/pokemon_data.xml',
        'views/pokemon.xml',
        'views/pokemon_view.xml',
        'views/pokemon_menuitem.xml',
        'views/pokemon_website_view.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'data/pokemon_demo.xml'
    ],
}
