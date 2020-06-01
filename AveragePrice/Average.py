import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import datetime

cred = credentials.Certificate('firebase-sdk.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

# remove the -1 soon
current_date = datetime.date.today() - datetime.timedelta(1)
scrape_start = current_date + datetime.timedelta(30)
average_array = []
average_dict = {}

def findNewAverage(current_avg, new_price, num):
    if num == 13:
        # new value
        return new_price
    else:
        units = 13 - num
        total = current_avg * units + new_price
        return total / (units + 1)

docs = db.collection(u'flight_price_KUL')

#data = docs.document('2020-06-21').collection('2020-05-22').document("Data")

avg_ref = db.collection(u'flight_price_KUL').document('Prices')
avg_dict = avg_ref.get().to_dict().get('Average Prices')

scrape_date = scrape_start

# writing average price data onto firebase
for i in range(14):
    # reference to the price location for latest scrape
    data = docs.document(scrape_date.strftime("%Y-%m-%d")).collection(current_date.strftime("%Y-%m-%d")).document("Data")
    price = data.get({u'Price'})
    price_dict = price.to_dict()
    price_str = price_dict.get('Price')
    # retrieve price
    price_num = int(price_str[1:])
    if i == 13:
        average_dict[scrape_date.strftime("%Y-%m-%d")] = price_num
    else:
        current_avg = avg_dict[scrape_date.strftime("%Y-%m-%d")]
        new_avg = findNewAverage(current_avg, price_num, i)
        average_dict[scrape_date.strftime("%Y-%m-%d")] = new_avg
        scrape_date = scrape_date + datetime.timedelta(1)  

dataset = {
            u'Average Prices': average_dict
}

doc_ref2 = db.collection(u'flight_price_KUL').document('Prices')
doc_ref2.set(dataset)