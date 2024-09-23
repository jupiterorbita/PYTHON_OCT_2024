# LOOPS
# for loops

# for _iterator_ in _collection_ :

# range() - a function that returns a sequence of numbers
# range(start, stop, end)
    # start - inclusive - optional - default 0
    # stop - EXCLUSIVE, required
    # step - optional, increment or decrement a value (+/-)

# 1 - 10
for a in range(1, 10 + 1):
    print(a)

# 1-10 every 2
for b in range(1, 11, 2):
    print(b)

print("------------")

# 100 - 1
for n in range(100, 0, -1):
    print(n)

start_num = 10
end_num = 20

for batman in range(start_num, end_num + 1):
    print(batman)

# ======== loop over a list =======

anime_list = ['Demon Slayer', "Big O", "Tom & Jerry", "Naruto"]

for anime_title in anime_list:
    print(anime_title)

for i in range(len(anime_list)) :
    print(i)
    print(f"{i+1}. {anime_list[i]}")

# ======= loop over dictionaries =======

user = {
    "name" : "bob",
    "age" : 25,
    "fav_food" : "Pizza",
    "isAdmin": True
}

for each_key in user :
    print(each_key)
    print(user[each_key])
    print("-----")

# for x in user.keys():
#     print(x)

capitals = {
    "Washington":"Olympia",
    "California":"Sacramento",
    "Idaho":"Boise",
    "Illinois":"Springfield",
    "Texas":"Austin",
    "Oklahoma":"Oklahoma City",
    "Virginia":"Richmond"
    }

for state in capitals.keys():
    print(state)

for each_capital in capitals.values():
    print(each_capital)

print(capitals.items())
print("-----------")

for state, capital in capitals.items():
    print(f"{state}'s capital is {capital}")