import sqlite3
from sqlite3 import Error
import pandas as pd
from dateutil import parser
conn = sqlite3.connect("data.db")
df = pd.read_sql_query("SELECT * from inventory", conn)
df_demand = pd.read_csv("submission.csv")
k = 1
count = 1
for row in df.iterrows():
    item = row[1][1]
    quantity = row[1][2]
    manufacture = parser.parse(row[1][3])
    shelf_life = row[1][4]
    time_to_expiry = row[1][5]
    
    store_no = row[1][6]
    mrp = row[1][7]
    expected_demand = df_demand.at[time_to_expiry - 1, item]
    price_rec = k * (time_to_expiry/shelf_life) * mrp * expected_demand / quantity
    price_rec = round(price_rec, 2)



    if ((price_rec > mrp) or (time_to_expiry > 10)):
        price_rec = mrp
        recommendation = "SELL_MRP"
    elif (((time_to_expiry / shelf_life) < 0.4) or (time_to_expiry < 2)):
        recommendation = "DONATE"
    else:
        recommendation = "SELL_LOWER"


    query = "INSERT INTO output VALUES("+str(count)+", \"" + str(item) + "\", " + str(round(expected_demand, 2))+ ", " + str(quantity) + ", " + str(round(price_rec, 2)) + ", " + "\"" + recommendation + "\")"
    print(query)
    c = conn.cursor()

    c.execute(query)
    conn.commit()
    count +=1
    



