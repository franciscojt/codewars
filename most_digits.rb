def find_longest(arr)
    max = 0
    number = 0 
    for digit in arr
        if max < digit.to_s.length
            max = digit.to_s.length
            number = digit
        end
    end
    number
end

p find_longest([20,30, 700, 300])