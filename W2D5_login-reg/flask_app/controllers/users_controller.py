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
    # print(User.validate(request.form)) # Remove so it doesn't show duplicate errors 
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


# ===== LOGIN METHOD (form action) ====
@app.route("/users/login", methods=['post'])
def login():
    print("\n!!!!!!!!!!!!!! -- request.form", request.form)
    # 1. get the user by email
    user_in_db = User.get_by_email(request.form['email'])
    # if email is not found
    if not user_in_db:
        flash("invalid credentials", 'login')
        return redirect("/")

    # now we check the password
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        # if we get False after checking the password
        flash("invalid credentials", 'login')
        return redirect('/')
    
    # if all is good, login the user
    session['user_id'] = user_in_db.id
    return redirect("/dashboard")


@app.route("/dashboard")
def dashboard():
    # route guard
    if 'user_id' not in session:
        return redirect("/")

    logged_user = User.get_by_id(session['user_id'])
    return render_template("dashboard.html", 
                           logged_user = logged_user)

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")