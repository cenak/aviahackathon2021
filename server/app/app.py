from flask import Flask, Blueprint
from .routes import app_routes
from .user_routes import users_api
from flask_cors import CORS
import logging
logger = logging.getLogger('werkzeug') 
handler = logging.FileHandler('test.log') 
logger.addHandler(handler) 


cors_config = {
    "methods": ["GET, POST", "OPTIONS"],
    "allow_headers": ["Authorization", "Content-Type"]
}


def create_app():
    app = Flask(__name__)
    app.register_blueprint(app_routes)
    app.register_blueprint(users_api)
    CORS(users_api, resoures={
        r"/api/.*": cors_config
    })
    app.config['CORS_METHODS'] = "GET,POST,OPTIONS"
    app.config['DEBUG'] = True
    from app import routes
    from app import user_routes
    return app


current_app = create_app()
