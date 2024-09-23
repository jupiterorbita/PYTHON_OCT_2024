# Dictionary of lists
resume_data = {
    "skills": ["front-end", "back-end", "database"],
    "languages": ["Python", "JavaScript"],
    "hobbies": ["rock climbing", "knitting"],
}

# print "front-end"
print(resume_data["skills"][0])

resume_data["skills"][0] = "databases"
print(f"******{resume_data}*******")

# print all the skills
def print_skills(some_dict, category):
    for skill in some_dict[category] :
        print(skill)


print_skills(resume_data, "hobbies")

