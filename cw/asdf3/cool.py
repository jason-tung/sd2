word_dict = {}
c = 1
with open("hello.txt") as fp:
    txt = fp.read()
    #print(type(txt))
    txt_stripped = ''.join([i for i in txt if i.isalnum() or i == " " or i == "\n"]).split()
    #print (txt_stripped)
    for x in txt_stripped:
        if x in word_dict.keys():
            word_dict[x]+=1 
        else:
            word_dict[x] = 1
    print(word_dict)
