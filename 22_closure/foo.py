# azrael -- jason tung
#
# SoftDev2 pd7
#
# K #22: Closure
#
# 2019-05-01


def repeat(st):
    def times(n):
        return st * n

    return times


r1 = repeat("hello")
print(r1(2))
r2 = repeat("goodbye")
print(r2(2))
print(repeat("cool")(3))


def make_counter():
    counter = 0

    def thing():
        nonlocal counter
        counter += 1
        print(counter)

    return thing


class Counter(object):
    def __init__(self):
        self._value = 0
    def increment(self):
        self._value += 1
        return self._value



ctr1 = make_counter()
ctr2 = make_counter()
ctr1()
ctr1()
ctr2()
ctr1()
ctr2()
print("----")
ctr1 = Counter()
ctr2 = Counter()
print(ctr1.increment())
print(ctr1.increment())
print(ctr2.increment())
print(ctr1.increment())
print(ctr2.increment())

# def inc(x):
#     return x + 1
#
# f = inc
#
# print(f)
# print(f(10))
#
# def add(a,b):
#     return a + b
#
# def caller(c):
#     print(c(2,4))
#     print(c(3,5))
#
# caller(add)
#
# def outer(x):
#     def contains(l):
#         return x in l
#     return contains
#
#
# c = outer(15)
#
# print(c([1,2,3,4,5]))
# print(c([12,13,14,15,16,17,18]))
# print(c(range(20)))
# print(outer('3')('3daf'))
#
# if type(c)==type(outer(0)):
#     print("#############")

# def outer1():
#     x = "foo"
#     def inner():
#         x = "bar"
#         print("DSFDSFD" + x)
#     inner()
#     print(x)

# outer1()
#
# def outer():
#     x = "foo"
#     def inner():
#         nonlocal x
#         x = "bar"
#         #print("DSFDSFD" + x)
#     inner()
#     print(x)
#
# outer()
