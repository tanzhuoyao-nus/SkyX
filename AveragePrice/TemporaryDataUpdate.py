import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import datetime

# to upload test data quickly

cred = credentials.Certificate('firebase-sdk.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

docs = db.collection('flight_price_KUL')
high_ref = db.collection('flight_price_KUL').document('Prices')

average_dict = {}
average_dict["2020-06-21"] = 1
average_dict["2020-06-22"] = 1
average_dict["2020-06-23"] = 1
average_dict["2020-06-24"] = 1
average_dict["2020-06-25"] = 1
average_dict["2020-06-26"] = 1
average_dict["2020-06-27"] = 1
average_dict["2020-06-28"] = 1
average_dict["2020-06-29"] = 11
average_dict["2020-06-30"] = 1
average_dict["2020-07-01"] = 10000
average_dict["2020-07-02"] = 10000
average_dict["2020-07-03"] = 1
average_dict["2020-07-04"] = 10000
average_dict["2020-07-05"] = 1
average_dict["2020-07-06"] = 1
average_dict["2020-07-07"] = 10000
average_dict["2020-07-08"] = 1
average_dict["2020-07-09"] = 1
average_dict["2020-07-10"] = 1
average_dict["2020-07-11"] = 1
average_dict["2020-07-12"] = 100000
average_dict["2020-07-13"] = 1
average_dict["2020-07-14"] = 1

dataset = {
    u'Lowest Prices' : average_dict
}

high_ref.set(dataset, merge = True)