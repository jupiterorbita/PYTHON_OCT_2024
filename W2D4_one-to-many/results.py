[
    {
        "id": 1,
        "name": "Spot",
        "age": 4,
        "breed": "Labrador",
        "color": "brown",
        "created_at": datetime.datetime(2024, 10, 2, 10, 26, 7),
        "updated_at": datetime.datetime(2024, 10, 2, 10, 26, 7),
    },
    {
        "id": 2,
        "name": "Everest",
        "age": 6,
        "breed": "Husky",
        "color": "black and white",
        "created_at": datetime.datetime(2024, 10, 2, 10, 26, 7),
        "updated_at": datetime.datetime(2024, 10, 2, 10, 26, 7),
    },
    {
        "id": 3,
        "name": "Zoey",
        "age": 4,
        "breed": "Beagle",
        "color": "brown",
        "created_at": datetime.datetime(2024, 10, 2, 10, 26, 7),
        "updated_at": datetime.datetime(2024, 10, 2, 10, 26, 7),
    },
]


# get one dog with awards (JOIN)
[
    {
        "id": 1,
        "name": "Spot",
        "age": 4,
        "breed": "Labrador",
        "color": "brown",
        "created_at": datetime.datetime(2024, 10, 3, 10, 38, 47),
        "updated_at": datetime.datetime(2024, 10, 3, 10, 38, 47),
        "awards.id": 1,
        "title": "most playful",
        "awards.created_at": datetime.datetime(2024, 10, 3, 10, 40, 47),
        "awards.updated_at": datetime.datetime(2024, 10, 3, 10, 40, 47),
        "dog_id": 1,
    },
    {
        "id": 1,
        "name": "Spot",
        "age": 4,
        "breed": "Labrador",
        "color": "brown",
        "created_at": datetime.datetime(2024, 10, 3, 10, 38, 47),
        "updated_at": datetime.datetime(2024, 10, 3, 10, 38, 47),
        "awards.id": 2,
        "title": "best kisser",
        "awards.created_at": datetime.datetime(2024, 10, 3, 10, 42, 39),
        "awards.updated_at": datetime.datetime(2024, 10, 3, 10, 42, 39),
        "dog_id": 1,
    },
]
