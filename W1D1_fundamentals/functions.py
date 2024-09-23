# Functions
# what is a function?
# a set of instruction
# could take in parameters (ingredients)
# ! ALL FUNCTIONS ALWAYS return something

# print(print("hello"))

# VERBS
def greeting():
    print("hello there!")
    return 3 + 1

# x = greeting()

# print(x)

def name_greeting(some_name):
    print("hello " + str(some_name))

name_greeting("Bob")
name_greeting(-77)


def add(num1, num2):
    return num1 + num2

print(add(567, 1034))

# say hello to a name number times
def say_times(name, num_times):
    for _ in range(num_times):
        print("hello", name)
    

say_times("bob", 5)