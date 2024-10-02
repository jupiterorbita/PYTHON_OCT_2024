# this model file interacts with the DB
# handle all data related tot eh table 'dogs'
# C R U D

from mysqlconnection import connect_to_mysql

# create the model for the dog that references the dog table
class Dog:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.age = data['age']
        self.breed = data['breed']
        self.color = data['color']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    # === ALL QUERIES ARE classmethods ===
    
    # --- READ ALL ---
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dogs;" 
        results = connect_to_mysql('dogs_db').query_db(query)
        print("\n* * * * * * * * * * * results ====>\n", results)

        dog_instances = []
        if results:
            for row in results:
                this_dog_instance = cls(row)
                dog_instances.append(this_dog_instance)
        return dog_instances