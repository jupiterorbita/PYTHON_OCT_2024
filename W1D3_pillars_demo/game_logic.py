from base_class import Human
from paladin_class import Paladin
import random


paladin_1 = Paladin("Fred")
human_bob = Human("bob", False)

# ---------------------
print(f"you are a great paladin named {paladin_1.name}, and you come across {human_bob.name}")
while paladin_1.health > 0 and human_bob.health > 0:

    response = ""

    # while not response == "1" and not response == "2":
    response = input("what do you do?\n1) Attack?\n2) Heal?\n")

    # player
    if response == "1":
        paladin_1.attack(human_bob)
    elif response == "2":
        paladin_1.heal()
    else:
        print(">>> please type 1 or 2")

    
    # CPU 
    dice_roll = random.randint(1,2)
    if dice_roll == 1:
        human_bob.attack(paladin_1)
    else:
        human_bob.heal()

print(" <<<< thanks for playing >>> ")

