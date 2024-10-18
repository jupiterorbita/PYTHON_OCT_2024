# python fibonacci memoization
from functools import lru_cache
# LRU Least Recently Used Cache

@lru_cache(maxsize=1000)
def fibonacci(n):
    if n == 1:
        return 1
    elif n == 2:
        return 1
    elif n > 2:
        return fibonacci(n-1) + fibonacci(n-2)

for n in range(1, 500):
    print(f"fib({n}) => {fibonacci(n)}")