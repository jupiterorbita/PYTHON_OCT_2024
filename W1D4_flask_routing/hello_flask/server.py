# Importing Flask
from flask import Flask  # Flask : class
app = Flask(__name__) # creating the instance/object based on that Flask class

# Defining all the routes
@app.route('/') # Whenever your server receive a request to this route, execute the following function
def hello_world():
    return 'Hello Python'  # return the response from our server

@app.route("/test")
def test_route():
    return "Testing"

@app.route("/hello/<name>") # pattern for 127.0.0.1:5001/hello/whateverIType
def greet(name):
    print(name) # Print in the terminal (NOT BROWSER INSPECT)
    return "Hello, "+ name

@app.route("/travel/<place>/<int:count>")
def show_place(place, count):
    return f"Travelling to {place * count}"

if __name__=="__main__":
    app.run(debug=True, port=5001)