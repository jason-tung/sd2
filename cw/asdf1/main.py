print(sorted(list({(x,y,z) for y in range(1,101) for x in range(1,y+1) for z in range(1,y+1) if y**2 == z**2 + x**2})))

print(sorted([5,7,2,13]))
