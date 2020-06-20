import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import datetime

cred = credentials.Certificate('firebase-sdk.json')
firebase_admin.initialize_app(cred)
db = firestore.client()
current_date = datetime.date.today() - datetime.timedelta(1)
print(current_date)
scrape_start = current_date + datetime.timedelta(30)


# DPS reference
def dps_price_alert():
    print(scrape_start)
    dps_ref = db.collection("Price Alerts").document("DPS")
    # loop through the 14 days in Firebase
    loop_date = scrape_start
    for x in range(14):
        my_dict = dps_ref.get().to_dict().get(str(loop_date))
        scrape_ref = db.collection(u'flight_price_DPS').document(str(loop_date)) \
            .collection(str(current_date)).document('Data')
        scrape_dict = scrape_ref.get().to_dict()
        scrape_price = int(scrape_dict["Price"][1:])
        print(scrape_dict)
        # compare alert price with scrape price
        for key in my_dict.keys():
            user_alert_price = my_dict[key]["Alert Price"]
            if user_alert_price <= scrape_price:
                continue
                # SEND EMAIL TO THIS USER (KEY)
                # Pseudo code: sendEmail(key)
            # remove user from Firebase once email sent
        loop_date = loop_date + datetime.timedelta(1)
    # Delete the previous day price alerts as we are not going to scrape this day anymore
    # dps_ref.update({
    #     '2020-07-19': firestore.DELETE_FIELD
    # })



dps_price_alert()