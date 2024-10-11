from flask import Flask
app = Flask(__name__)
# for session and flash messages we need a secret key
app.secret_key = "w9sdeu87ghf9u8deqgfh"
DATABASE = "belt-review"
