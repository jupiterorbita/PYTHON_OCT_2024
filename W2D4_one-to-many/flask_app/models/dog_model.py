# this model file interacts with the DB
# handle all data related tot eh table 'dogs'
# C R U D
from flask_app import DATABASE
from flask_app.config.mysqlconnection import connect_to_mysql
from flask_app.models import award_model

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
        # self.list_of_awards = []
    
    # === ALL QUERIES ARE classmethods ===
    
    # --- READ ALL ---
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dogs;" 
        results = connect_to_mysql(DATABASE).query_db(query)
        print("\n* * * * * * * * * * * results ====>\n", results)

        dog_instances = []
        if results:
            for row in results:
                this_dog_instance = cls(row)
                dog_instances.append(this_dog_instance)
        return dog_instances
    
    # --- CREATE ----
    @classmethod
    def create(cls, data):
        query = """
                INSERT INTO dogs
                    (name, age, breed, color)
                VALUES
                    (%(name)s, %(age)s, %(breed)s, %(color)s);
                """
        result = connect_to_mysql(DATABASE).query_db(query, data)
        return result

    # ------ READ ONE -----
    @classmethod
    def get_one(cls, id):
        data = {
            'id' : id
        }
        # query = """
        #     SELECT * FROM dogs
        #     WHERE id = %(id)s;
        # """

        query = """
            SELECT * FROM dogs
            LEFT JOIN awards 
            ON dogs.id = awards.dog_id 
            WHERE dogs.id = %(id)s;
        """
        result = connect_to_mysql(DATABASE).query_db(query, data)
        print("########## get_one -->> result:", result) # [ {dict} ]

        this_one_dog_instance = cls(result[0]) # this creates the Dog instance

        # now add the list of awards this one dog has
        these_awards = []
        for row in result:
            # format the data for the Award constructor
            award_data = {
                'id' : row['awards.id'],
                'created_at' : row['awards.created_at'],
                'updated_at' : row['awards.updated_at'],
                'title' : row['title'],
                'dog_id' : row['dog_id']
            }
            this_award = award_model.Award(award_data) # creates an Award instance
            these_awards.append(this_award)

        # create a new attribute ofr the Dog instance
        this_one_dog_instance.list_of_awards = these_awards
        return this_one_dog_instance # {Dog Object / instance}
    
    

    # ---- UPDATE -----
    @classmethod
    def update(cls, data):
        query = """
        UPDATE dogs
        SET
            name = %(name)s,
            age = %(age)s,
            breed = %(breed)s,
            color = %(color)s
        WHERE id = %(id)s;
        """
        return connect_to_mysql(DATABASE).query_db(query, data)