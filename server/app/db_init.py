import psycopg2
from .config import DbConfig


def create_db_conn():
    conn = psycopg.connect(**DbConfig)
    return conn


conn = create_db_conn()
