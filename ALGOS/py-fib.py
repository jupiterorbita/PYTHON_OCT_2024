from functools import lru_cache
# LRU 

@lru_cache(maxsize=1000)
def fibonacci(n):
    if n <= 1:
        return n
    
    return fibonacci(n-1) + fibonacci(n-2)

for n in range(1, 500):
    print(f"f({n}) ==> {fibonacci(n)}")