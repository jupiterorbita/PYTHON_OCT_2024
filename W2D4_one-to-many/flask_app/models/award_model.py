# this model file interacts with the DB
# handle all data related tot eh table 'dogs'
# C R U D

from flask_app import DATABASE
from flask_app.config.mysqlconnection import connect_to_mysql
from flask_app.models import dog_model

class Award:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.dog_id = data['dog_id']
    
    # ========= CREATE an AWARD ==========
    @classmethod
    def create(cls, data):
        query = """
            INSERT INTO awards
                (title, dog_id)
            VALUES
                (%(title)s, %(dog_id)s);
        """
        return connect_to_mysql(DATABASE).query_db(query, data)