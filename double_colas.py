"""
Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

For example, Penny drinks the third can of cola and the queue will look like this:

Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
Write a program that will return the name of a man who will drink the n-th cola.

Note that in the very beginning the queue looks like that:

Sheldon, Leonard, Penny, Rajesh, Howard
##Input

The input data consist of an array which contains five names, and single integer n.


##Output / Examples Return the single line the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1. Please note that you should spell the names like this: "Sheldon", "Leonard", "Penny", "Rajesh", "Howard" (without the quotes). In that order precisely the friends are in the queue initially.

whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)=="Sheldon"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)=="Penny"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)=="Leonard"

"""

def whoIsNext(names, r):
    length = len(names)
    names2 = []
    if r < 1:
        return "error"
    if r <= length:
        return names[r-1]
    if r > length:
        for n in names:
            names2.append(n)
            names2.append(n)
        length2= len(names2)
        nxt = (r - length)
        print length2, nxt
        if nxt <= length2:
            print"8"*50
            return names2[nxt]
        nxt = nxt%length2
        print(nxt)
        return names2[] [nxt-2],names2[nxt-1], names2[nxt], names2[nxt+1]

name = [ "Sheldon", "Leonard", "Penny", "Rajesh", "Howard"]

print(whoIsNext(name,52))
print(whoIsNext(name,7230702951))
