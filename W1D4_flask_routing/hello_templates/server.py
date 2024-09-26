from flask import Flask, render_template  # added render_template!
app = Flask(__name__)                     
    
@app.route('/<name_param>/<int:times_param>')                           
def hello_world(name_param, times_param):
    return render_template("greet.html", 
                           name = name_param, 
                           times = times_param)

@app.route("/list")
def show_list():
    zoo = [
        {"creature": "🦁", "population": 2},
        {"creature": "🦓", "population": 5},
        {"creature": "🐊", "population": 2},
        {"creature": "🐘", "population": 2},
        {"creature": "🦒", "population": 4},
    ]
    return render_template("list.html", zoo = zoo,
                           color = "red")

    
if __name__=="__main__":
    app.run(debug=True)         