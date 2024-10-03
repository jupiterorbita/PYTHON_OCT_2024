from flask_app import app
from flask import render_template, redirect, request
# bring in the model file to talk to it
from flask_app.models.award_model import Award
from flask_app.models.dog_model import Dog


# (RENDER) create page for award
@app.route("/awards/create_page")
def create_award_page():
    all_dogs = Dog.get_all()
    return render_template("award_new.html", 
                           all_dogs = all_dogs)

# ------ CREATE ACTION for award - POST
@app.route("/awards/create", methods = ['post'])
def make_an_award_form_action():
    print(">>>>>> request.form <<<<<", request.form)
    Award.create(request.form)
    return redirect("/")