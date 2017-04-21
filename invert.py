'''
Invert a given list of integer values.

Python/JS/PHP:

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers.
'''

def invert(list):
    nlist =[]
    for l in list:
        print(l)        
        nlist.append(l * -1) 
    return nlist
print(invert([1,2]))
