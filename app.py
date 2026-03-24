from flask import Flask, render_template, jsonify
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/admin_taourirt')
def admin():
    return render_template('admin_taourirt.html')

if __name__ == '__main__':
    app.run(debug=True)
