from base_class import Human

class Paladin(Human):
    def __init__(self, name):
        super().__init__(name, True)
        self.dexterity = 20
        self.strength = 15
        self.armor = 22
    
    def heal(self):
        self.health += 33
        print(f"[SUPER HEAL] {self.name} heals for 33 HP")
        print(f"{self.name} now has {self.health} HP")

