import random

# Fundamentals
# this is a comment, it does not get read by the interperter
"""
now this technically a string
but also 
a multi line comment
"""

# === VARIABLES ===
# PRIMITIVES

number_of_days_days = 22
vactation_destination = "Hawaii"
is_admin = False
has_roles = True
percision_number = 3.14
my_name = "Bob"

# get a random runber between 2 numbers
print(random.randint(3, 9))


"Bob went to Hawaii for 22 days"
message = my_name + " went to " + vactation_destination + " for " + str(number_of_days_days) + " days"

formatted_message = f"{my_name} went to {vactation_destination} for {number_of_days_days} days"

print(message)
print(formatted_message)

# == COMPOSITE TYPE ==
#  -- LIST 
# aka Array in JS
my_nums = [11,22,33,44]
#               0        1       2
rsvp_names = ["bob", "alice", "carter"]

"Bob"
print(rsvp_names[2])
print(len(rsvp_names)) # 3 - 1

# print the last element of the rsvp_names list
print(rsvp_names[len(rsvp_names) - 1])

# sort a list
rsvp_names.sort()
print(rsvp_names)

# remove the last element
rsvp_names.pop(1)
print(rsvp_names)

# add an element to the list
rsvp_names.append("David")
print(rsvp_names)

# DICTIONARIES
# AKA Objects in JS
# are not indexed
# they have key - value pairs
# all keys are comma separated
# all keys are 'strings'

hobbies = ["chewing", "goes on walks"]

doggo = {
    "name" : 'Everest',
    "age" : 4,
    "is_a_good_girl" : True,
    "hobbies" : ["chewing", "goes on walks"]
}

# change an attribute of the dictonary
doggo["age"] = 5
doggo["owner"] = "Cory"

print("=================")
# print the first hobby of doggo
print(
    doggo["hobbies"][0]
)

# print(doggo)

doggo2 = {
    "name" : "mochi",
    "age" : 7,
    "is_a_good_boi": True  ,
    "hobbies" : ["fetch", "swim"]
}

# Everest
# print the name of the doggo
# print(doggo["name"])
# print(doggo["age"])
# print(doggo2["name"])

# remove a key - value from a dictionary
# remove 'hobbies' from doggo2
doggo2.pop("hobbies")
print(doggo2)

# Tuple
dog = ('Bruce', 'cocker spaniel', 19, False)
# dog[1] = "lab"
print(dog[1])

pet_shelter = [doggo, doggo2]
# get the "name" of the first element in this list
print(
    pet_shelter[0]["name"]
)