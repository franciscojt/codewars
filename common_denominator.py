'''
Common denominators

You will have a list of rationals in the form

 { {numer_1, denom_1} , ... {numer_n, denom_n} }
or

 [ [numer_1, denom_1] , ... [numer_n, denom_n] ]
or

 [ (numer_1, denom_1) , ... (numer_n, denom_n) ]
where all numbers are positive ints.

You have to produce a result in the form

 (N_1, D) ... (N_n, D)
or

 [ [N_1, D] ... [N_n, D] ]
or

 [ (N_1', D) , ... (N_n, D) ]
or

{{N_1, D} ... {N_n, D}}
depending on the language (See Example tests)

in which D is as small as possible and

 N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
Example:

convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]

'''

def convertFracts(lst):
    common = lst[0][1]
    denom =[]
    for fraction in lst:
        common = 0
        count = 0
        for denominator in lst:
            if denominator[1] == fraction[1]:
                count +=1
            if denominator[1] % fraction[1] == 0:
                count +=1
                if denominator[1] > fraction[1]:
                    denom.append(denominator[1])
            if count == 1:
                denom.append(denominator[1])

    return denom

print(convertFracts([[2,9],[1,2],[2,5],[3,4],[2,3],[1,4],[1,6]])) # 9 4 5