# def memoize(f):
#     hello = {}
#     def inner(x):
#         if x not in hello:
#             hello[x] = f(x)
#         return hello[x]
#     return inner
#
# def fib(n):
#     if n < 2:
#         return n
#     return fib(n-1) + fib(n-2)
#
# fib = memoize(fib)
# print(fib(52))

def memoize(f):
    hello = {}
    def inner(x):
        if x not in hello:
            hello[x] = f(x)
        return hello[x]
    return inner

@memoize
def fib(n):
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)

print(fib(52))
