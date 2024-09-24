# OOP Classes

dog_one = {
    "name" : "Zoy",
    "age" : 4,
    "color": "brown",
    "is_a_good_doggo" : True
}

dog_two = {
    "name" : "Spot",
    "age" : 6,
    "color": "White",
    "is_a_good_doggo" : False
}

# --- CREATE A CLASS of a dog ---
# a class is a blueprint of what the 'Dog' will have and do

class Dog:
    # constructor - creates defaults and builds the instance
    def __init__(self, name, age, pet_color):
        # attributes - what the class HAS
        self.name = name
        self.age = age
        self.color = pet_color
        self.is_a_good_doggo = True
        self.is_hungry = True
    
    # Methods - actions (aka functions inside the class) 'Do'
    def bark(self):
        print(f" {self.name} says WOOF WOOF WOOF!!!")
        return self
    
    def eat(self):
        if self.is_hungry == True:
            print("NOM NOM NOM")
            self.is_hungry = False
        else:
            print("yo dawg i'm full")

    def happy_birthday(self):
        # change an attribute:
        self.age += 1
        print(f"HAPPY BIRTHDAY TO {self.name} you are now {self.age} years old")

    def print_stats(self):
        print(f"name: {self.name}")
        print(f"age: {self.age}")
        print(f"color: {self.color}")
        print(f"is_a_good_doggo: {self.is_a_good_doggo}")
        print(f"is_hungry: {self.is_hungry}")


# ! create an INSTANCE of the class aka (OBJECT)
first_doggo_instance = Dog(pet_color="black", name="Spot", age=6)
second_doggo_instance = Dog("Zoy", 3, "brown")
third_doggo_instance = Dog("Everest", 4, "black and white")


# ! only chain if you have return self in that method()
third_doggo_instance.bark().bark().bark()


# second_doggo_instance.happy_birthday()

# third_doggo_instance.eat()
# third_doggo_instance.eat()

# second_doggo_instance.print_stats()
# first_doggo_instance.print_stats()
# third_doggo_instance.print_stats()


# print(first_doggo_instance.bark())
