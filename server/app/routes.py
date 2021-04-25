from flask import jsonify, request, Blueprint
import sys
from . import app


app_routes = Blueprint('app_bp', __name__)


# Приветствие
@app_routes.route('/')
@app_routes.route('/<name>')
def index(name=None):
    return jsonify({"msg":"Hello, Aviahackaton 2021"})


# Информация по заявкам
@app_routes.route('/get_requests_info')
def get_requests_request():
    '''
    Здесь мы получаем информацию по компании, если указан айди
    Или по всем, если параметр не указан, можно указать отметку
    времени от и до, для последующей обработки и преобразования 
    для аналитических исследований 
    '''
    pass


# Установка статуса
@app_routes.route('/set_status/<id>')
def set_status(id):
    '''
    Устанавливаем статус по заявке
    '''
    pass
