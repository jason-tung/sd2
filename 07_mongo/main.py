# azrael -- Jason Tung and Mohammed Uddin
#
# SoftDev2 pd7
#
# K #07: Import/Export Bank
#
# 2019-03-01

# --------DB INFO--------
# NAME: POKEMON GO POKEDEX
# CONTAINS INFORMATION FOR EACH POKEMON IN POKEMON GO
# NOTE: WE ONLY PARSED INFORMATION PERTAINING TO REAL POKEMON GAMES!!!
# LINK: https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json
# IMPORT MECHANISM: TOOK THE LIST INSIDE OF "pokemon" AND GENERATED THE JSON WITH THAT INSTEAD!!! FILE IMPORTED FOR PROJECT: POKEDEX_PARSED.JSON

import pymongo

server_addr = "jayy.mooo.com"
connection = pymongo.MongoClient(server_addr)
db = connection.test
connection = db.azrael

ary_len = len(connection.find_one({})["pokemon"])

def find_pokemans(**kwargs):
    #POSSIBLE ARGS: num, name, type, height, height_updown, weight, weight_updown, weaknesses, evolutions
    ntl_num = kwargs.get("num", None)
    name = kwargs.get("name", None)
    pk_type = kwargs.get("type", None)
    height = kwargs.get("height", None)
    height_updown = kwargs.get("height_updown", "up")
    weight = kwargs.get("weight", None)
    weight_updown = kwargs.get("weight_updown", "up")
    weaknesses = kwargs.get("weaknesses", None)
    evolutions = kwargs.get("type", None)
    find_query = {}

    




