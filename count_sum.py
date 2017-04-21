def count_positives_sum_negatives(lst):
  if not lst: return[]
  count = 0
  neg = 0
  result =[]
  for i in lst:
    if i > 0:
      count+=1
    else:
      neg+=i
  result.append(count)
  result.append(neg)
  return result

print(count_positives_sum_negatives([]))