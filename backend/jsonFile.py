import sqlite3
from sqlite3 import Error
import pandas as pd
def create_connection(db_file):
    """ create a database connection to the SQLite database
        specified by db_file
    :param db_file: database file
    :return: Connection object or None
    """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        return conn
    except Error as e:
        print(e)

    return conn

def toJsonFile():
    database = r"C:\\Users\\gnyan\\Documents\\GATECH\\HackGT\\frontend\\backend\\data.db"
    conn = create_connection(database)
    df = pd.read_sql_query("SELECT * FROM output", conn)
    df.to_json("output_data.json")


toJsonFile()
