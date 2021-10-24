import sqlite3
from sqlite3 import Error


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


def create_table(conn, create_table_sql):
    """ create a table from the create_table_sql statement
    :param conn: Connection object
    :param create_table_sql: a CREATE TABLE statement
    :return:
    """
    try:
        c = conn.cursor()
        c.execute(create_table_sql)
    except Error as e:
        print(e)

def main():
    database = r"data.db"
    #Trained 0 = no & 1 = yes
    sql_create_projects_table = """ CREATE TABLE IF NOT EXISTS output (
                                        SerialNumber integer PRIMARY KEY,
                                        Item text NOT NULL, 
                                        ExpectedDemand real NOT NULL,
                                        Quantity integer NOT NULL,
                                        RecommendedPrice real NOT NULL,
                                        FinalRecommendation text NOT NULL

                                    ); """
    # sql_create_projects_table = """ CREATE TABLE IF NOT EXISTS inventory (
    #                                 SerialNumber integer PRIMARY KEY,
    #                                 Item text NOT NULL, 
    #                                 Quantity integer NOT NULL,
    #                                 ManufactureDate text NOT NULL, 
    #                                 ShelfLife integer NOT NULL,
    #                                 TimeToExpiry integer NOT NULL
    #                             ); """
                                
    # sql_add = """ INSERT INTO projects VALUES (1, "Hi", "..");"""
    # sql_add1 = """ INSERT INTO projects VALUES (2, "Sleepy", "...");"""
    

    # create a database connection
    conn = create_connection(database)

    # create tables
    if conn is not None:
        # create projects table

        create_table(conn, sql_create_projects_table)
        c = conn.cursor()

        # c.execute("INSERT INTO inventory VALUES (1, \"BREAD/BAKERY\", 7, \"10/22/21\", 6, 6, 1, 1.12)")
        # c.execute("INSERT INTO inventory VALUES (2, \"EGGS\", 36, \"10/22/21\", 28, 27, 1, 2.77)")
        # c.execute("INSERT INTO inventory VALUES (3, \"FROZEN FOOD\", 22, \"10/22/21\", 90, 89, 1, 10.98)")
        # c.execute("INSERT INTO inventory VALUES (4, \"GROCERY I\", 14, \"10/22/21\", 8, 7, 1, 1.29)")
        # c.execute("INSERT INTO inventory VALUES (5, \"GROCERY II\", 19, \"10/22/21\", 10, 9, 1, 1.89)")
        # c.execute("INSERT INTO inventory VALUES (6, \"MEATS\", 19, \"10/22/21\", 10, 9, 1, 4.47)")
        # c.execute("INSERT INTO inventory VALUES (7, \"POULTRY\", 23, \"10/22/21\", 2, 1, 1, 10.47)")
        # c.execute("INSERT INTO inventory VALUES (8, \"PRODUCE\", 69, \"10/22/21\", 21, 20, 1, 1.33)")
        # c.execute("INSERT INTO inventory VALUES (9, \"SEAFOOD\", 57, \"10/22/21\", 2, 6, 1, 15.99)")
        conn.commit()
        # c.execute("SELECT * FROM projects")
        # rows = c.fetchall()

        # for row in rows:
        #     print(row)

    else:
        print("Error! cannot create the database connection.")

    



if __name__ == '__main__':
    main()