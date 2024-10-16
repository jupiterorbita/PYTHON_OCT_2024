# models talk to the DB
from flask_app.config.mysqlconnection import connect_to_mysql
from flask_app import DATABASE
from flask import flash
from flask_app.models import party_model
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        # self.created_parties = []

    # =========== CREATE user ===========
    @classmethod
    def create(cls, data):
        query = """
            INSERT INTO users
                (first_name, last_name, email, password)
            VALUES
                (%(first_name)s, %(last_name)s, %(email)s, %(password)s);
        """
        return connect_to_mysql(DATABASE).query_db(query, data)

    # ========= GET ONE by email =============
    @classmethod
    def get_by_email(cls, email):
        data = {
            'email' : email
        }
        query = """
            SELECT * FROM users
            WHERE email = %(email)s;
        """
        results = connect_to_mysql(DATABASE).query_db(query, data)
        print("\n ??????????? DID WE GET A USER BACK ???", results)
        if len(results) < 1:
            return False
        return User(results[0])


    # ==== GET ONE by id ==========
    @classmethod
    def get_by_id(cls, id):
        data = {
            'id' : id
        }
        query = """
            SELECT * FROM users
            WHERE id = %(id)s;
        """
        results = connect_to_mysql(DATABASE).query_db(query, data)
        print("\n ??????????? DID WE GET A USER BACK ???", results)
        if len(results) < 1:
            return False
        return User(results[0])
    
    # ===== GET ONE user by id AND their parties
    @classmethod
    def get_by_id_with_parties(cls, id):
        data = {
            'id' : id
        }
        query = """
            SELECT * FROM users
            JOIN parties
            ON parties.user_id = users.id
            WHERE users.id = %(id)s;
        """
        results = connect_to_mysql(DATABASE).query_db(query, data)
        print("\n  > > > > > > >  results", results)
        
        # create the user
        this_user = User(results[0])

        list_of_parties = []

        # loop over all the results
        for row in results:

            # prepare the data dict for the Party constructor
            party_data = {
                **row,
                'id' : row['parties.id'],
                'created_at' : row['parties.created_at'],
                'updated_at' : row['parties.updated_at']
            }
            
            this_party = party_model.Party(party_data)
            list_of_parties.append(this_party)
        
        # create a new attribute to attach to the User instance
        this_user.created_parties = list_of_parties
        return this_user




    # ======== VALIDATIONS =======
    @staticmethod
    def validate(data):
        is_valid = True

        if len(data['first_name']) < 1:
            is_valid = False
            flash("first_name is required", 'reg')
        
        if len(data['last_name']) < 1:
            is_valid = False
            flash("last_name is required", 'reg')

        if len(data['email']) < 1:
            is_valid = False
            flash("email is required", 'reg')
        elif not EMAIL_REGEX.match(data['email']): 
            is_valid = False
            flash("Invalid email address!", 'reg')
        # check if the user exists already in the DB
        else:
            potential_user = User.get_by_email(data['email'])
            if potential_user:
                is_valid = False
                flash("email is taken... hopefully by you!", 'reg')

        if len(data['password']) < 1:
            is_valid = False
            flash("password is required", 'reg')
        elif not data['password'] == data['confirm_password']:
            is_valid = False
            flash("passwords must match!", 'reg')
        
        return is_valid