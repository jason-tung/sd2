from random import randint


def genpw():
    return ''.join([chr((ord('A') if randint(0,1) == 0 else ord('a')) + randint(0,25)) if randint(0,2) == 0 else str(randint(0,10)) for x in range(20)])

def runmen(lu):
    return sum([1 if x in [chr(ord('a') + lower) for lower in range(26)] else (2 if x in [chr(ord('A') + upper) for upper in range(26)] else (3 if ord(x) <= 9 else 5)) for x in lu])

print(genpw())
print(runmen("quadrakill1234"))