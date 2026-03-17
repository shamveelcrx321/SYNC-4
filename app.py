from flask import Flask, render_template, request, session, jsonify
import random

app = Flask(__name__)
app.secret_key = "secret_key_for_session"
app.config["SESSION_PERMANENT"] = False

def generate_number():
    return list(str(random.randint(1111, 9999)))

def init_game():
    session["secret"] = generate_number()
    session["guesses"] = []

@app.route("/", methods=["GET", "POST"])
def index():
    if "secret" not in session or "guesses" not in session:
        init_game()

    win = False
    secret = session["secret"]

    if request.method  == "POST":
        guess = request.form.get("guess", "")

        if len(guess)  == 4 and guess.isdigit():
            ist = list(guess)
            temp = secret.copy()

            count = 0
            poscounter = 0

            for counter in range(4):
                if ist[counter]  == secret[counter]:
                    poscounter += 1

            for d in ist:
                if d in temp:
                    temp.remove(d)
                    count += 1

            session["guesses"].insert(0,{
                "guess": guess,
                "count": count,
                "poscounter": poscounter
            })

            if poscounter  == 4:
                win = True

            session.modified = True

    return render_template(
        "index1.html",
        guesses=session["guesses"],
        win=win
    )

@app.route("/soft-reset", methods=["POST"])
def soft_reset():
    session.clear()
    init_game()
    return jsonify({"status": "ok"})

@app.route("/how-to-play")
def how_to_play():
    return render_template("tutorial.html")

if __name__  == "__main__":
    app.run(debug=True)
