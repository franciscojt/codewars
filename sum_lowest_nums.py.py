def sum_of_lowest_numbers(numbers):
    numbers.sort()
    return numbers[0] + numbers[1]

print(sum_of_lowest_numbers([-2, 1, 96, 99, 10, -1]))
print(sum_of_lowest_numbers([10,343445353,3453445,3453545353453]))