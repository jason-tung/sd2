from random import randint


def genpw():
    return ''.join([chr((ord('A') if randint(0,1) == 0 else ord('a')) + randint(0,25)) if randint(0,2) == 0 else str(randint(0,10)) for x in range(20)])

def genpw2():
    return ''.join([chr(randint(30,126)) for x in range(20)])

def runmen(lu):
    return 10 - 10/(sum([1 if x.islower() else (2 if x.isupper() else (3 if x.isdigit() else 5)) for x in lu]) + (8 if any([not x.isalnum() for x in lu]) else 0) + (4 if any([x.isnumeric() for x in lu]) else 0))**.35

print(genpw())
print(genpw2())
print(runmen("dog"))
print(runmen("avvv"))
print(runmen("password"))
print(runmen("AAAAAbbbbbb888900"))
print(runmen("AAAAAbbbbbb888900!"))
print(runmen("AAAAAbbbbbb888900!!"))
