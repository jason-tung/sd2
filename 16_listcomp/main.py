import functools
from random import randint


def check_critera(st):
    return functools.reduce(lambda x,y: x * y, [2 if x.isupper() else (3 if x.islower() else 5 if x.isdigit() else 1)for x in st] )%(2*3*5) == 0

def runmen(lu):
    return 10 - 10/(sum([1 if x.islower() else (2 if x.isupper() else (3 if x.isdigit() else 5)) for x in lu]) + (8 if any([not x.isalnum() for x in lu]) else 0) + (4 if any([x.isnumeric() for x in lu]) else 0))**.35

passwords = ["dog", "avVVvvvv", "password", "AAb888900", "AAb888900!", "AAAAAbbbbbb888900!!"]
for x in passwords:
    print(check_critera(x))
    print(runmen(x))
