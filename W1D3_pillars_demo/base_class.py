class Human:
    def __init__(self, name, magic):
        self.name = name
        self.strength = 10
        self.dexterity = 10
        self.health = 100
        self.intelligence = 10
        self.has_magic = magic
    
    def attack(self, enemy):
        enemy.health = enemy.health - self.strength
        print(f"[ATTACK] {self.name} attacks {enemy.name} for {self.strength} DAMAGE")
        print(f"{enemy.name} now has {enemy.health} HP left")
    
    def heal(self):
        self.health += 10
        print(f"[HEAL] {self.name} heals for 10 HP")
        print(f"{self.name} now has {self.health} HP")

