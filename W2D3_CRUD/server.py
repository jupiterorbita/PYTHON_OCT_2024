from flask import Flask, render_template
app = Flask(__name__)

# bring in the model file to talk to it
from dog_model import Dog

@app.route("/")
def index():
    all_dogs = Dog.get_all()
    return render_template("dashboard.html", 
                           all_dogs = all_dogs)
            
if __name__ == "__main__":
    app.run(debug=True)