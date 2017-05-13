def xo(s):
    s = s.lower()
    x=0
    o=0
    for l in s:
        if l == "x":
            x+=1
        if l == "o":
            o+=1
    if x == o:
        return True
    return False


print(xo('xo'))