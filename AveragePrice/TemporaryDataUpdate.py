import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import datetime

# to upload test data quickly

cred = credentials.Certificate('firebase-sdk.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

docs = db.collection('flight_price_TYO')
high_ref = db.collection('flight_price_TYO').document('Prices')

average_dict = {}
average_dict["2020-06-21"] = 211
average_dict["2020-06-22"] = 720
average_dict["2020-06-23"] = 348
average_dict["2020-06-24"] = 726
average_dict["2020-06-25"] = 347
average_dict["2020-06-26"] = 756
average_dict["2020-06-27"] = 348
average_dict["2020-06-28"] = 339
average_dict["2020-06-29"] = 783
average_dict["2020-06-30"] = 749
average_dict["2020-07-01"] = 353
average_dict["2020-07-02"] = 830
average_dict["2020-07-03"] = 762
average_dict["2020-07-04"] = 354
average_dict["2020-07-05"] = 830
average_dict["2020-07-06"] = 830
average_dict["2020-07-07"] = 749
average_dict["2020-07-08"] = 354
average_dict["2020-07-09"] = 555
average_dict["2020-07-10"] = 354
average_dict["2020-07-11"] = 354
average_dict["2020-07-12"] = 354
average_dict["2020-07-13"] = 354
average_dict["2020-07-14"] =132


dataset = {
    u'Highest Prices' : average_dict
}

high_ref.set(dataset, merge = True)