# ROUTING
from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.party_model import Party

# -------- CREATE party page --------
@app.route("/parties/new")
def new_party_page():
    return render_template("party_new.html")

# -------- CRATE METHOD - FORM ACTION (party) ------
@app.route("/parties/create", methods=['post'])
def create_party_form():
    print(f"\n\n ==== request.form ====>", request.form)
    
    if not Party.validate(request.form):
        return redirect("/parties/new")
    
    # # prepare the dict for the create query
    # # so long as you don't have a hidden input
    # party_dict = {
    #     **request.form,
    #     'user_id' : session['user_id']
    # }
    # Party.create(party_dict)
    
    Party.create(request.form)
    return redirect("/dashboard")

# ------------ READ ONE page -----------
@app.route("/parties/<int:id>")
def show_one_page(id):
    one_party = Party.get_by_id(id)
    return render_template("party_show.html",
                           one_party = one_party)

#  ---------- EDIT page render ------------
@app.route("/parties/<int:id>/edit")
def edit_party_page(id):
    one_party = Party.get_by_id(id)
    return render_template("party_edit.html",
                           one_party = one_party)

# ---------- UPDATE ACTION FORM -----------
@app.route("/parties/edit", methods=['post'])
def update_method():

    # VALIDATE The inputs
    if not Party.validate(request.form):
        return redirect(f"/parties/{request.form['id']}/edit")
    
    # now update
    Party.update(request.form)


    return redirect(f"/parties/{request.form['id']}")

# ---------- DELETE --------------
# @app.route("/parties/<int:id>/delete")
# def delete(id):
#     Party.delete(id)
#     return redirect("/dashboard")

@app.route("/parties/<int:id>/delete", methods=['post'])
def delete(id):
    Party.delete(id)
    return redirect("/dashboard")