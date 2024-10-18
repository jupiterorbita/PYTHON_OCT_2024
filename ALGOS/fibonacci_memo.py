from functools import lru_cache

# LRU - Least Recently Used Cache


@lru_cache(maxsize=1000)
def fibonacci(n):
    # check that the input is a positive integer
    if type(n) != int:
        raise TypeError("n must be a positive int")
    if n < 1:
        raise ValueError("n must be a positive int")

    if n == 1:
        return 1
    elif n == 2:
        return 1
    elif n > 2:
        return fibonacci(n - 1) + fibonacci(n - 2)


# for n in range(1, 501):
#     print(n, ":", fibonacci(n))

# let's take a final look at the first 50 fib nums
for n in range(1, 51):
    # how quickly do these numbers grow?
    # to see this, let's compute the ratio
    # between consecutive terms
    print(fibonacci(n + 1) / fibonacci(n))
    # print(fibonacci(n))

# 1.61803398875

# print(fibonacci(2.1))
# print(fibonacci(-4))
# print(fibonacci("one"))
