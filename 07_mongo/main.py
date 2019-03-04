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
#  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!INCLUDE DESCRIPTION OF IMPORT MECHANISM

import pymongo

server_addr = "jayy.mooo.com"
connection = pymongo.MongoClient(server_addr)
db = connection.test
connection = db.azrael

def find_pokemans(**kwargs):
    pk_ntlnum = kwargs.get("num", None)
    
    find_query = {}
    



find_restaurants(zip="11358", borough="Queens",grade="A",score=10, slope=3)



