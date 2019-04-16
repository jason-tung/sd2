print(sorted(list({(x,y,z) for y in range(1,101) for x in range(1,y+1) for z in range(1,x+1) if y**2 == z**2 + x**2})))


m = [5,7,2,3,3,999,5,5,5,513]
owned = lambda l: owned([x for x in l[1:] if x < l[0]]) + [l[0]] + owned([x for x in l[1:] if x >= l[0]]) if len(l) > 1 else l
print(owned(m))
