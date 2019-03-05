# azrael -- Jason Tung and Mohammed Uddin
#
# SoftDev2 pd7
#
# K #07: Import/Export Bank
#
# 2019-03-01
import json

import pymongo

server_addr = "jayy.mooo.com"
connection = pymongo.MongoClient(server_addr)
db = connection.test
connection = db.pokedex_unparsed

pkmon_list = connection.find_one({})["pokemon"]
with open("pokedex_parsed.json", "w") as f:
    for pkmon in pkmon_list:
        f.write(json.dumps(pkmon))
        f.write("\n")

collection = db.azrael
        
f=open("pokedex_parsed.json","r")
data=json.loads(f.read())
f.close()

collection.insert_many(data)
