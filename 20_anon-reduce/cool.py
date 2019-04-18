# mikey_g -- Jason Tung & Imad Belkebir
#
# SoftDev2 pd7
#
# K #20: Reductio ad Absurdum
#
# 2019-04-20

import functools
import sys

c = 1
with open("hello.txt") as fp:
    txt = fp.read()
    # print(type(txt))
    txt_stripped = ''.join([i for i in txt if i.isalnum() or i in " \n"]).lower()
    testy = functools.reduce(lambda d, c: d.update([(c, d.get(c, 0) + 1)]) or d, txt_stripped.split(), {})


def find(stri):
    return testy.get(stri,0)


def find_group(group):
    return txt_stripped.count(group)


def find_max():
    return max(testy, key=testy.get)


def show_all():
    return testy


print("type find ____, show max, show all, or break")
for line in sys.stdin:
    x = line.split()
    if x[0] == "find":
        if len(x) == 2:
            print(find(x[1]))
        else:
            print(find_group(' '.join(x[1:])))
        #print(x)
    elif line == "show max\n":
        print(find_max())
    elif line == "show all\n":
        print(show_all())
    elif line == "break\n":
        exit()
    else:
        print("try find ____, show max, show all, or break")
