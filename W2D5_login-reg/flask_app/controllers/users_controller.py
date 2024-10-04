# ROUTING
from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.user_model import User
from flask_bcrypt import Bcrypt        
bcrypt = Bcrypt(app)  

# ===== LOGIN REGISTER START PAGE ======
@app.route("/")
def home():
    return render_template("index.html")

# ==== REGISTER METHOD (form action) ====
@app.route("/users/register", methods=['post'])
def user_reg():
    print("^^^^^^^^^^^^ request.form:", request.form)

    # BEFORE we write the the BS
    # WE need to V A L I D A T E   the form
    print(User.validate(request.form))
    if not User.validate(request.form):
        return redirect("/")

    # 1. hash the password
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    print(pw_hash)

    # 2. create the data dict to pass to the User constructor
    user_data = {
        **request.form,
        'password' : pw_hash
    }  
    # 3. pass it to the model to create
    user_id = User.create(user_data)

    # how to keep track if someone is logged in?
    # store the `user_id` in session 🎒
    session['user_id'] = user_id
    return redirect("/dashboard")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")