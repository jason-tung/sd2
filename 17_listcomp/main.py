# mikey_g -- Jason Tung & anag kazi
#
# SoftDev2 pd7
#
# K #17: PPFTLCW
#
# 2019-04-12

one = [str(x*22) for x in range(5)]
print("1.-----")
l = []
for x in range(5):
    l.append(x*22)
print(l)
print(one)


two = [x*10+7 for x in range(5)]
print("2.-----")
l = []
for x in range(5):
    l.append(x*10 + 7)
print(l)
print(two)

three = [x//3 * (x % 3) for x in range(9)]
print("3.-----")
l = []
for x in range(9):
    l.append(x//3 * (x%3))
print(l)
print(three)

four = list({composite for maybe_prime in range(2,8) for composite in range(2*maybe_prime,101,maybe_prime)})
print("4.-----")
l = set()
for x in range(2,8):
    for y in range(2*x, 101, x):
        l.add(y)
print(sorted(list(l)))
print(sorted(four))

# five = [x for x in range(100) if not (any([x % y == 0 for y in range(3,int(x**.5)+2,2)]) or x%2==0)]
# prime = five
# print("5.-----")
# print(five)

five = [x for x in range(2,101) if x not in four]
print("5.-----")
l = []
for x in range(2,101):
    if x not in four:
        l.append(x)
print(l)
print(five)

def six(num):
    return sorted([k for x in range(1,int(num**.5) + 1) for k in [x,num//x] if num % x == 0])
print("6.-----")
def banana(num):
    l = []
    for x in range(1,int(num**.5) + 1):
        if num % x == 0:
            l.append(x)
    for x in range(len(l))[::-1]:
        l.append(num//l[x])
    return l
print(banana(12))
print(six(12))

def seven(m):
    return [[m[y][x] for y in range(len(m))] for x in range(len(m[0]))]
def banana2(m):
    l = []
    for x in range(len(m[0])):
        wasd = []
        for y in range(len(m)):
             wasd.append(m[y][x])
        l.append(wasd)
    return l
print("7.-----")
m= [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
print(m)
print(banana2(m))
print(seven(m))


