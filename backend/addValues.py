import sqlite3
from sqlite3 import Error
import pandas as pd
import numpy as np

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



def main():
    database = r"data.db"
    conn = create_connection(database)
    df = pd.read_csv("selected_data.csv", encoding="utf-8")
    df = df[df['family'] != ""]
    df.replace("", np.nan, inplace=True)
    df = df.dropna()
    count = 0
    for row in df.iterrows():
        serial_no = row[1][0]
        item = row[1][1]
        date = row[1][2]
        supply = row[1][3]
        trained = row[1][4]
        store_no = row[1][5]
        on_promotion = row[1][6]
                                
        sql_add = "INSERT INTO sd VALUES (" + str(serial_no) + "," + "\"" +str(item) + "\"" + "," + "\"" +str(date) + "\"" +"," \
            + str(supply) + "," + str(trained) + "," + str(store_no) + "," + str(on_promotion) + ");"


        if conn is not None:

            c = conn.cursor()

            c.execute(sql_add)
            conn.commit()


        

        # rows = c.fetchall()
        # for row in rows:
        #     print(row)




if __name__ == '__main__':
    main()