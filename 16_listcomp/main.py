from random import randint


def genpw():
    return ''.join([chr((ord('A') if randint(0,1) == 0 else ord('a')) + randint(0,25)) if randint(0,2) == 0 else str(randint(0,10)) for x in range(20)])

def runmen(lu):
    return sum([1 if x.islower() else (2 if x.isupper() else (3 if x.isdigit() else 5)) for x in lu]) + (8 if sum([0 if x.isalnum() else 1 for x in lu]) > 0 else 0)



print(genpw())
print(runmen("AAAAAbbbbbb888900"))
print(runmen("AAAAAbbbbbb888900!"))
print(runmen("AAAAAbbbbbb888900!!"))
