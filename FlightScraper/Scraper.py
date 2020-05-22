from time import sleep, strftime
from random import randint
import pandas as pd
from selenium import webdriver
import datetime
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('firebase-sdk.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

# Closing the popup
def close_popup():
    xp_popup_close = '//button[contains(@id,"dialog-close") and contains(@class,"Button-No-Standard-Style close ")]'
    driver.find_elements_by_xpath(xp_popup_close)[8].click()


def close_popup_secondary():
    xp_popup_close = '//button[contains(@id,"dialog-close") and contains(@class,"Button-No-Standard-Style close ")]'
    driver.find_elements_by_xpath(xp_popup_close)[9].click()


# Load more results to maximize the scraping
def load_more():
    try:
        more_results = '//a[@class = "moreButton"]'
        driver.find_element_by_xpath(more_results).click()
        print('sleeping.....')
        sleep(randint(5, 10))
    except:
        pass


def run_kayak_return(origin, destination, start_date, end_date):
    kayak = 'https://www.kayak.com/flights/' + origin + '-' + destination + \
            '/' + start_date + '/' + end_date + '?sort=price_a'
    driver.get(kayak)
    sleep(randint(10, 20))
    try:
        close_popup()
    except:
        pass
    sleep(randint(10, 20))
    xp_price = '//span[contains(@id,"price-text") and contains(@class,"price-text")]'
    price_arr = driver.find_elements_by_xpath(xp_price)
    for price in price_arr:
        if price.text == '':
            continue
        else:
            print("Price to " + destination + " is " + price.text)


def run_kayak_one_way(destination, date, price_list, departure_time_list,
                      arrival_time_list, flight_duration_list, url_list):
    kayak = 'https://www.kayak.com/flights/SIN-' + destination + '/' + date + '?sort=price_a'
    driver.get(kayak)
    sleep(randint(10, 20))
    try:
        close_popup()
    except:
        pass
    try:
        close_popup_secondary()
    except:
        pass
    sleep(randint(10, 20))
    scrape_one_way(price_list, departure_time_list, arrival_time_list, flight_duration_list, url_list)


def scrape_one_way(price_list, departure_time_list, arrival_time_list, flight_duration_list, url_list):
    xp_price = '//span[contains(@id,"price-text") and contains(@class,"price-text")]'
    price_arr = driver.find_elements_by_xpath(xp_price)
    if len(price_arr) == 0:
        print("Not ready...")
        sleep(10)
        price_arr = driver.find_elements_by_xpath(xp_price)
    print(price_arr)
    for price in price_arr:
        if price.text == '':
            continue
        else:
            price_list.append(price.text)
            break

    xp_departure_time = '//span[@class="depart-time base-time"]'
    departure_time_arr = driver.find_elements_by_xpath(xp_departure_time)
    if len(departure_time_arr) == 0:
        print("Not ready...")
        sleep(10)
        departure_time_arr = driver.find_elements_by_xpath(xp_departure_time)
    print(departure_time_arr[0].text)
    departure_time_list.append(departure_time_arr[0].text)

    xp_arrival_time = '//span[@class="arrival-time base-time"]'
    arrival_time_arr = driver.find_elements_by_xpath(xp_arrival_time)
    if len(arrival_time_arr) == 0:
        print("Not ready...")
        sleep(10)
        arrival_time_arr = driver.find_elements_by_xpath(xp_arrival_time)
    print(arrival_time_arr[0].text)
    arrival_time_list.append(arrival_time_arr[0].text)

    xp_flight_duration = '//div[@class="section duration allow-multi-modal-icons"]/div[@class="top"]'
    flight_duration_arr = driver.find_elements_by_xpath(xp_flight_duration)
    if len(flight_duration_arr) == 0:
        print("Not ready...")
        sleep(10)
        flight_duration_arr = driver.find_elements_by_xpath(xp_flight_duration)
    print(flight_duration_arr[0].text)
    flight_duration_list.append(flight_duration_arr[0].text)

    xp_url = '//div[contains(@id,"best")]/div/a'
    url_arr = driver.find_elements_by_xpath(xp_url)
    if len(url_arr) == 0:
        print("Not ready...")
        sleep(10)
        url_arr = driver.find_elements_by_xpath(xp_url)
    url_list.append(url_arr[0].get_attribute('href'))


def search_city_one_way(destination):
    price_list = []
    departure_time_list = []
    arrival_time_list = []
    flight_duration_list = []
    origin_list = []
    destination_list = []
    date_list = []
    url_list = []
    current_date = datetime.date.today()
    start_date = current_date + datetime.timedelta(days=29)

    for x in range(14):
        origin_list.append('SIN')
        destination_list.append(destination)
        start_date = start_date + datetime.timedelta(days=1)
        date_list.append(start_date.strftime("%Y-%m-%d"))

    for y in range(14):
        run_kayak_one_way(destination, date_list[y], price_list,
                          departure_time_list, arrival_time_list,
                          flight_duration_list, url_list)
        dataset = {
            u'Origin': u'SIN',
            u'Destination': destination,
            u'Date': date_list[y],
            u'Price': price_list[y],
            u'Departure Time': departure_time_list[y],
            u'Arrival Time': arrival_time_list[y],
            u'Flight Duration': flight_duration_list[y],
            u'URL': url_list[y]
        }
        doc_ref = db.collection(u'flight_price_' + destination).document(date_list[y])
        doc_ref.set(dataset)

    flights_df = pd.DataFrame({
        'Date': date_list,
        'Origin': origin_list,
        'Destination': destination_list,
        'Price': price_list,
        'Departure Time': departure_time_list,
        'Arrival Time': arrival_time_list,
        'Flight duration': flight_duration_list,
        'URL': url_list
    })
    print(destination + ' done')
    file_date = current_date + datetime.timedelta(days=30)
    file_date_string = file_date.strftime("%Y-%m-%d")
    flights_df.to_csv('/Users/tanzhuoyao/GitHub/SkyX/FlightScraper/out/' + destination + "/"
                      + file_date_string + "_" + destination + '.csv')
    flights_df.to_json('/Users/tanzhuoyao/GitHub/SkyX/FlightScraper/out/' + destination + "/"
                       + file_date_string + "-" + destination + '.json', orient='index')


chromedriver_path = '/Users/tanzhuoyao/GitHub/SkyX/FlightScraper/chromedriver'

driver = webdriver.Chrome(executable_path=chromedriver_path)
sleep(2)
#search_city_one_way('DPS')
#sleep(30)
#search_city_one_way('HKG')
#sleep(30)
search_city_one_way('KUL')
sleep(30)
#search_city_one_way('LON')
#sleep(30)
#search_city_one_way('TYO')
#sleep(30)

driver.close()

