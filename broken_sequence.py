'''
You have a sequence of positive numbers starting with 1, but one number is missing!

Find out the missing number; if the sequence is not broken, you should return 0. Each sequence always increments by 1.

In short: an invalid sequence (a string with non numeric character) must return 1, an already complete (or empty) sequence must return 0; a broken sequence with more than one number missing should return the lowest missing number; otherwise return the missing number.

Note that the input may be with random order.

E.g.

find_missing_number("1 3 2 5") # returns 4, because 4 is missing
find_missing_number("1 2 3 4") # returns 0, because the sequence isn't broken
find_missing_number("1 5") # returns 2, because the sequence is missing more than one number and 2 is the lowest between 2, 3 and 4
find_missing_number("2 1 4 3 a") # returns 1, because it's an invalid sequence. in this case, it's invalid because contain a non numerical character
'''

def find_missing_number(sequence):
    if len(sequence) == 0: return 0
    number = []
    seq = sequence.split(" ")
    count = 1
    print seq
    length = len(seq)    
    for s in seq:
        try:
            number.append(int(s))
        except ValueError:
            return 1
    for i in number:
        if not count in number: return count
        count +=1
    return 0

print(find_missing_number("8 12 2 13 9 7 18 11 19 10 6 5 16 22 15 20 3 21 14 4 1"))
