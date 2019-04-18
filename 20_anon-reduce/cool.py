# mikey_g -- Jason Tung & Imad Belkebir
#
# SoftDev2 pd7
#
# K #20: Reductio ad Absurdum
#
# 2019-04-20

word_dict = {}
c = 1
with open("hello.txt") as fp:
    txt = fp.read()
    #print(type(txt))
    txt_stripped = ''.join([i for i in txt if i.isalnum() or i in " \n"])
    
def find(stri):
    testy= reduce( lambda d, c: d.update([(c, d.get(c,0)+1)]) or d, txt_stripped.strip(), {})
    return testy[stri]

def find_group(group):
    with open("hello.txt") as fp:
        txt = fp.read()
        #print(type(txt))
        return txt_stripped.count(group)
        
