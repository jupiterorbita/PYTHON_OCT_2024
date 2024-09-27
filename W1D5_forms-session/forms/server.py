from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'

# our index route will handle rendering our form
@app.route('/')
def index():
    return render_template("index.html")

@app.route("/submit", methods=["POST"])
def submit():
    print(request.form)
    # session is just another dictionary
    # take the data from the form and put it into session
    session["dog_name"] = request.form["dog_name"]
    session["age"] = request.form["age"]
    session["hair_color"] = request.form["hair_color"]

    # once we redirect, the form information is gone, 
    # unless saved somewhere like session
    # redirect goes to another route
    return redirect("/dog")


@app.route("/dog")
def dog():
    return render_template("dog.html")

if __name__ == "__main__":
    app.run(debug=True)
