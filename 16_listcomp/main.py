# azrael -- Jason Tung
#
# SoftDev2 pd7
#
# K #16: Do You Even List?
#
# 2019-04-12

import functools


# def check_criteria(st):
#     return functools.reduce(lambda x,y: x * y, [2 if x.isupper() else (3 if x.islower() else 5 if x.isdigit() else 1)for x in st] )%(2*3*5) == 0

def check_criteria(st):
    return not st.islower() and not st.isupper() and any(c.isnumeric() for c in st) and any(c.isalpha() for c in st)

def runmen(lu):
    return 10 - 10/(sum([1 if x.islower() else (2 if x.isupper() else (3 if x.isdigit() else 5)) for x in lu]) + (8 if any([not x.isalnum() for x in lu]) else 0) + (4 if any([x.isnumeric() for x in lu]) else 0))**.35

passwords = ["dog", "avVVvvvv", "89898888","password", "AAb888900", "AAb888900!", "AAAAAbbbbbb888900!!"]
for x in passwords:
    print(check_criteria(x))
    # print(check_criteria2(x))
    print(runmen(x))
