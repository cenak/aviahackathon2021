# Здесь описаны роуты для
# человека-"под самолетом"
#
#
#
#
import json
import sys
# from .db_init import conn
from flask import request, jsonify, make_response, Blueprint
from datetime import datetime
from psycopg2 import sql
from psycopg2.extras import RealDictCursor


users_api = Blueprint('users', __name__)

#@app.route('/api/user-<id: int>/showpossibleresourses', methods=["GET"])
# @app.login_required
#def show_resourses():
    #cursor = conn.cursor(cursor_factory=RealDictCursor)
    #query = sql.SQL("""SELECT * FROM category_table """)
    #cursor.excecute(query)
    #result = cursor.fetchall()
    #cursor.commit()
    #cursor.close()
    #return json.dumps(result, indent=4, ensure_ascii=False), 200


@users_api.after_request
def add_header(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  #response.headers.add('Access-Control-Allow-Credentials', 'true')
  return response


# Информация по оборудованию
@users_api.route('/api/user/<userid>/get_resourses', methods=['GET'])
def get_resourses(userid):
    '''
    Получаем список возможных ресурсов, их количество и стоимость
    '''
    pass

# Создание заявки
@users_api.route('/api/user/<userid>/create_request', methods=["POST"])
def create_request(userid):
    body = request.get_json()
    body["userid"] = userid
    body["request_time"] = datetime.now()
    resp = make_response(body)
    return resp, 200

# Получение информации по заявке
@users_api.route('/api/user/<userid>/get_request_info', methods=['GET'])
def request_info(userid):
    id = request.args['id']
    '''
    Можно добавить аргументы запроса
    Делаем запрос к бд, получаем информацию по заявке
    возвращаем ее 
    '''
    pass


# Обновление информации по заявке
@users_api.route('/api/user/<userid>/update_request_info', methods=['UPDATE'])
def update_request(userid):
    '''
    в url указан айди заявки
    Отправляются параметры, которые надо поменять в заявке <id>
    '''
    pass