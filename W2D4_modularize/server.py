from flask_app import app
# !!!!!!!!!!!!
# ! REMEMBER TO IMPORT THE ROUTES/ CONTROLLER HERE
from flask_app.controllers import dog_controller


if __name__ == "__main__":
    app.run(debug=True)