[
    {
        "id": 1,
        "what": "space party",
        "location": "Mars",
        "date": datetime.date(2024, 10, 5),
        "all_ages": 1,
        "description": "the best party in the solar system",
        "created_at": datetime.datetime(2024, 10, 7, 11, 12, 26),
        "updated_at": datetime.datetime(2024, 10, 7, 11, 12, 26),
        "user_id": 1,
        "users.id": 1,
        "first_name": "alice",
        "last_name": "alisson",
        "email": "a@a.com",
        "password": "$2b$12$nHy5A7mni.HNql4lUb5DzusEGRcCZG5UjmsnnUCE3FnqKPBWKvmaC",
        "users.created_at": datetime.datetime(2024, 10, 7, 10, 37, 14),
        "users.updated_at": datetime.datetime(2024, 10, 7, 10, 37, 14),
    },
    {
        "id": 2,
        "what": "Happy birthday to our doggo",
        "location": "@ Alice's house",
        "date": datetime.date(2024, 10, 17),
        "all_ages": 1,
        "description": "bring toys!",
        "created_at": datetime.datetime(2024, 10, 7, 11, 21, 34),
        "updated_at": datetime.datetime(2024, 10, 7, 11, 21, 34),
        "user_id": 1,
        "users.id": 1,
        "first_name": "alice",
        "last_name": "alisson",
        "email": "a@a.com",
        "password": "$2b$12$nHy5A7mni.HNql4lUb5DzusEGRcCZG5UjmsnnUCE3FnqKPBWKvmaC",
        "users.created_at": datetime.datetime(2024, 10, 7, 10, 37, 14),
        "users.updated_at": datetime.datetime(2024, 10, 7, 10, 37, 14),
    },
    {
        "id": 3,
        "what": "stack celebration end for Python!",
        "location": "zoom class",
        "date": datetime.date(2024, 10, 18),
        "all_ages": 1,
        "description": "come and eat some pizza",
        "created_at": datetime.datetime(2024, 10, 7, 11, 24, 53),
        "updated_at": datetime.datetime(2024, 10, 7, 11, 24, 53),
        "user_id": 2,
        "users.id": 2,
        "first_name": "bob",
        "last_name": "bobbers",
        "email": "b@b.com",
        "password": "$2b$12$bD9RyI7AM1.QYBjhS/NhWu8qW1GVsjqfivOZsO/AU.0rjvUtG1mzG",
        "users.created_at": datetime.datetime(2024, 10, 7, 11, 24, 10),
        "users.updated_at": datetime.datetime(2024, 10, 7, 11, 24, 10),
    },
]


# --- get one party with user
[
    {
        "id": 4,
        "what": "second best party",
        "location": "Bob's house",
        "date": datetime.date(2024, 10, 18),
        "all_ages": 0,
        "description": "bring pizza",
        "created_at": datetime.datetime(2024, 10, 7, 14, 33, 2),
        "updated_at": datetime.datetime(2024, 10, 7, 14, 33, 2),
        "user_id": 2,
        "users.id": 2,
        "first_name": "bob",
        "last_name": "bobbers",
        "email": "b@b.com",
        "password": "$2b$12$bD9RyI7AM1.QYBjhS/NhWu8qW1GVsjqfivOZsO/AU.0rjvUtG1mzG",
        "users.created_at": datetime.datetime(2024, 10, 7, 11, 24, 10),
        "users.updated_at": datetime.datetime(2024, 10, 7, 11, 24, 10),
    }
]


# --- one user and their parties
[
    {
        "id": 2,
        "first_name": "bob",
        "last_name": "bobbers",
        "email": "b@b.com",
        "password": "$2b$12$bD9RyI7AM1.QYBjhS/NhWu8qW1GVsjqfivOZsO/AU.0rjvUtG1mzG",
        "created_at": datetime.datetime(2024, 10, 7, 11, 24, 10),
        "updated_at": datetime.datetime(2024, 10, 7, 11, 24, 10),
        "parties.id": 3,
        "what": "stack celebration end for Python!",
        "location": "zoom class",
        "date": datetime.date(2024, 10, 18),
        "all_ages": 1,
        "description": "come and eat some pizza",
        "parties.created_at": datetime.datetime(2024, 10, 7, 11, 24, 53),
        "parties.updated_at": datetime.datetime(2024, 10, 7, 11, 24, 53),
        "user_id": 2,
    },
    {
        "id": 2,
        "first_name": "bob",
        "last_name": "bobbers",
        "email": "b@b.com",
        "password": "$2b$12$bD9RyI7AM1.QYBjhS/NhWu8qW1GVsjqfivOZsO/AU.0rjvUtG1mzG",
        "created_at": datetime.datetime(2024, 10, 7, 11, 24, 10),
        "updated_at": datetime.datetime(2024, 10, 7, 11, 24, 10),
        "parties.id": 4,
        "what": "second best party",
        "location": "Bob's house",
        "date": datetime.date(2024, 10, 18),
        "all_ages": 0,
        "description": "bring pizza",
        "parties.created_at": datetime.datetime(2024, 10, 7, 14, 33, 2),
        "parties.updated_at": datetime.datetime(2024, 10, 7, 14, 33, 2),
        "user_id": 2,
    },
]
