import math
import os
os.environ["GOOGLE_APPLICATION_CREDENTIALS"]="/Users/aanyakhandelwal/Desktop/MoneyTree-8b6295880aab.json"
import enum
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import datetime
from datetime import timedelta
import yahoo_fin.stock_info as si
import pandas as pd


# class Recommendation(enum.Enum):
#     SELL_LOWER = 1
#     SELL_MRP = 2
#     DONATE = 3

# Use the application default credentials
cred = credentials.ApplicationDefault()
firebase_admin.initialize_app(cred, {
  'projectId': 'moneytree-95c46',
})
db = firestore.client()
users_ref = db.collection(u'root')
stocks_ref = db.collection(u'stockprice')
docs = users_ref.stream()
stocks = stocks_ref.stream()

earnings = 0
sum_profit = 0

i = 0
for doc in docs:
    dict = doc.to_dict()
    curr_date = '01/02/18'
    curr_date = datetime.strptime(curr_date, '%m/%d/%y')
    # print(curr_date)
    shelf_life = dict['Shelf life']
    demand = dict['Demand']
    supply = dict['Supply']
    mrp = dict['MRP']
    k = 1
    # shelf life - current age = days to expiry
    # current age = curr date - date of purchase
    # days to expiry = shelf life - curr date + date of purchase
    days_to_expiry = timedelta(days=shelf_life) - (curr_date - datetime.strptime(dict['Date of purchase'], '%m/%d/%y'))
    days_to_expiry = days_to_expiry.days
    recommendation = ""
    # print(dict['Supply'])
    # print(f'{doc.id} => {doc.to_dict()}')
    price_rec = k * (days_to_expiry/shelf_life) * mrp * demand / supply
    price_rec = round(price_rec, 2)

    if ((price_rec > mrp) or (days_to_expiry > 10)):
        price_rec = mrp
        recommendation = "SELL_MRP"
    elif (((days_to_expiry / shelf_life) < 0.4) or (days_to_expiry < 3)):
        recommendation = "DONATE"
    else:
        recommendation = "SELL_LOWER"
    sum_profit += (price_rec - 0.9*mrp)*demand
    earnings += (demand*price_rec)


    doc_ref = db.collection(u'root').document(str(i + 1))
    doc_ref.set({
        u'Item': dict['Item'],
        u'MRP': mrp,
        u'Demand': demand,
        u'Supply': supply,
        u'Shelf life': shelf_life,
        u'Date of purchase': dict['Date of purchase'],
        u'Demand projection in one day': dict['Demand projection in one day'],
        u'Demand projection in two days': dict['Demand projection in two days'],
        u'Demand projection in three days': dict['Demand projection in three days'],
        u'Days till expiry': days_to_expiry,
        u'New price (if applicable)': price_rec,
        u'Recommendation': recommendation,
    })
    i += 1
def get_stock_price(profit, earnings):
    # pbj, wbie, ftxg
    m = {'K': 3, 'M': 6, 'B': 9, 'T': 12}

    pbj = si.get_quote_table("pbj")
    pbj_mc = pbj["Net Assets"]
    pbj_mc = int(float(pbj_mc[:-1]) * 10 ** m[pbj_mc[-1]] / 1000)
    pbj_stock = pbj["Open"]

    wbie = si.get_quote_table("wbie")
    wbie_mc = wbie["Net Assets"]
    wbie_mc = int(float(wbie_mc[:-1]) * 10 ** m[wbie_mc[-1]] / 1000)
    wbie_stock = wbie["Open"]

    ftxg = si.get_quote_table("ftxg")
    ftxg_mc = ftxg["Net Assets"]
    ftxg_mc = int(float(ftxg_mc[:-1]) * 10 ** m[ftxg_mc[-1]] / 1000)
    ftxg_stock = ftxg["Open"]

    ratio = ((pbj_stock / pbj_mc) + (wbie_stock / wbie_mc) + (ftxg_stock / ftxg_mc)) / 3

    curr_earnings = earnings

    k = curr_earnings / ratio
    num_shares = 1000000

    # sum of (Final cost - price*0.9)*demand/num_shares
    out = (k*profit/(num_shares))
    return (out)

sum_profit = abs(sum_profit)
earnings = abs(earnings)
out_price = get_stock_price(sum_profit, earnings)
stock_ref = db.collection(u'stockprice').document("stock")
stock_ref.set({
    u'price': out_price,
    u'earnings': earnings,
    u'sum_profit': sum_profit,
})
