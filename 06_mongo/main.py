# azrael -- Jason Tung and Jiayang Chen
#
# SoftDev2 pd7
#
# K06 -- Yummy Mongo Py
#
# 2019-02-29

import pymongo

server_addr = "jayy.mooo.com"
connection = pymongo.MongoClient(server_addr)
db = connection.test
connection = db.restaurants

def check_magnitude(target, test):
    if target == 0:
        return test == 0
    if target < 0:
        return test <= target
    return target <= test

def find_restaurants(**kwargs):
    zip = kwargs.get("zipcode", None)
    if zip == None:
        zip = kwargs.get("zip", None)
    grade = kwargs.get("grade", None)
    score = kwargs.get("score", None)
    borough = kwargs.get("borough", None)
    slope = kwargs.get("slope", None)
    find_query = {}
    if zip is not None:
        find_query.update({'address.zipcode': zip})
    if borough is not None:
        find_query.update({'borough': borough})
    if grade is not None:
        find_query.update({'grades.0.grade': grade})
    if score is not None:
        find_query.update({'grades.0.score': {'$lt': score}})
    args = [zip, grade, score, borough, slope]
    args_match = ["zipcode", "grade", "score", "borough", "slope"]
    if slope is not None:
        find_query.update({'grades.1.score': {"$exists" : 1}})
    print(find_query)
    raw_out = connection.find(find_query)
    for x in raw_out:
        if slope is None or check_magnitude(slope, x['grades'][0]['score'] - x['grades'][1]['score']):
            print(x)
            print("")
            print("name: " + str(x['name']))
            for y in range(len(args)):
                if args[y] is not None:
                    if "zipcode" == args_match[y]:
                        print("zipcode: " + str(x['address']['zipcode']))
                    elif "grade" == args_match[y]:
                        print("grade: " + str(x['grades'][0]['grade']))
                    elif "score" == args_match[y]:
                        print("score (most recent): " + str(x['grades'][0]['score']))
                        print("score (second most recent): " + str(x['grades'][1]['score']))
                    elif "slope" == args_match[y]:
                        print("slope: " + str(x['grades'][0]['score'] - x['grades'][1]['score']))
                    else:
                        print(args_match[y] + ": " + str(x[args_match[y]]))
            print("- - - - - - - - - - - - - - -")



find_restaurants(zip="11358", borough="Queens",grade="A",score=10, slope=3)



