# REVIEW  OOP, classes, attributes, methods
# TODO classmethod, staticmethod

class Ninja:

    # a class attributes or methods() belong to the CLASS - NOT the instance
    all_ninjas = []

    # constructor
    def __init__(self, name_param, weapon_param, hp, age):
        if Ninja.check_age(age):
            self.name = name_param
            self.weapon = weapon_param
            self.health = hp
            self.age = age
            Ninja.all_ninjas.append(self)
        else:
            return
    
    # Methods -----------------
    def display_stats(self):
        print(f"{self.name} has a {self.weapon} with {self.health} HP")
    
    def eat_pizza(self, amount):
        self.health += amount
        print(f"{self.name} ate a pizza for +{amount} HP and they now have {self.health} HP")

    def attack(self, target):
        print(f"{self.name} attacks {target.name}")
        target.health -= 10
        print(f"after the attack {target.name} now has {target.health} HP remaining")
        return self
    
    @classmethod
    def how_many_ninjas(cls):
        return len(cls.all_ninjas)
        
    
    @classmethod
    def have_party(cls):
        print(cls.all_ninjas) # [Object, Object]
        for one_ninja in cls.all_ninjas :
            print(one_ninja.name)
            one_ninja.eat_pizza(10)

    @staticmethod
    def check_age(age_num):
        is_valid = True
        if age_num < 18:
            is_valid = False
            print("you are not old enough to enter the dojo")
        return is_valid



ninja_1 = Ninja("Donatello", "staff", 110, 19)
ninja_1.display_stats()

ninja_2 = Ninja("Raphael", "small trident thingy", 120, 17)
# ninja_2.display_stats()

# ninja_2.eat_pizza(10)
# ninja_2.eat_pizza(5)

# ninja_2.display_stats()

# ninja_1.attack(ninja_2).attack(ninja_2).attack(ninja_2)

# ninja_2.attack(ninja_1)


ninja_3 = Ninja("Jeff", "baseball bat", 120, 22)

# print(len(Ninja.all_ninjas))

# invoking / calling a method
print(Ninja.how_many_ninjas())

print("------------------")
# Class method:
Ninja.have_party()

ninja_3.attack(ninja_1)