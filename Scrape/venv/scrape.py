from time import sleep, strftime
from random import randint
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import smtplib
from email.mime.multipart import MIMEMultipart
import datetime

chromedriver_path = '/Users/tanzhuoyao/Code/Scrape/venv/chromedriver'

driver = webdriver.Chrome(executable_path=chromedriver_path)
sleep(2)

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
        sleep(randint(5,10))
    except:
        pass

def run_kayak_return(origin, destination, start_date, end_date):
    kayak = 'https://www.kayak.com/flights/' + origin + '-' + destination + '/' + start_date + '/' + end_date + '?sort=price_a'
    driver.get(kayak)
    sleep(randint(10,20))
    try:
        close_popup()
    except:
        pass
    sleep(randint(10,20))
    xp_price = '//span[contains(@id,"price-text") and contains(@class,"price-text")]'
    price_arr = driver.find_elements_by_xpath(xp_price)
    for price in price_arr:
        if price.text == '':
            continue
        else:
            print("Price to " + destination + " is " + price.text)

def run_kayak_one_way(destination, date, price_list, departure_time_list, arrival_time_list, flight_duration_list):
    kayak = 'https://www.kayak.com/flights/SIN-' + destination + '/' + date + '?sort=price_a'
    driver.get(kayak)
    sleep(randint(10,20))
    try:
        close_popup()
    except:
        pass
    try:
        close_popup_secondary()
    except:
        pass
    sleep(randint(10,20))
    scrape_one_way(price_list, departure_time_list, arrival_time_list, flight_duration_list)

def scrape_one_way(price_list, departure_time_list, arrival_time_list, flight_duration_list):
    xp_price = '//span[contains(@id,"price-text") and contains(@class,"price-text")]'
    price_arr = driver.find_elements_by_xpath(xp_price)
    for price in price_arr:
        if price.text == '':
            continue
        else:
            price_list.append(price.text)
            break

    xp_departure_time = '//span[@class="depart-time base-time"]'
    departure_time_arr = driver.find_elements_by_xpath(xp_departure_time)
    departure_time_list.append(departure_time_arr[0].text)

    xp_arrival_time = '//span[@class="arrival-time base-time"]'
    arrival_time_arr = driver.find_elements_by_xpath(xp_arrival_time)
    arrival_time_list.append(arrival_time_arr[0].text)

    xp_flight_duration = '//div[@class="section duration allow-multi-modal-icons"]/div[@class="top"]'
    flight_duration_arr = driver.find_elements_by_xpath(xp_flight_duration)
    flight_duration_list.append(flight_duration_arr[0].text)

def search_city_one_way(destination):
    price_list = []
    departure_time_list = []
    arrival_time_list = []
    flight_duration_list = []
    origin_list = []
    destination_list = []
    date_list = []
    current_date = datetime.date.today()
    start_date = current_date + datetime.timedelta(days=29)

    for x in range(5):
        origin_list.append('SIN')
        destination_list.append(destination)
        start_date = start_date + datetime.timedelta(days=1)
        date_list.append(start_date.strftime("%Y-%m-%d"))

    for y in range(5):
        run_kayak_one_way(destination, date_list[y], price_list,
                          departure_time_list, arrival_time_list,
                          flight_duration_list)

    flights_df = pd.DataFrame({
        'Date': date_list,
        'Origin': origin_list,
        'Destination': destination_list,
        'Price': price_list,
        'Departure Time': departure_time_list,
        'Arrival Time': arrival_time_list,
    })
    print(flights_df)



search_city_one_way('HKG')
search_city_one_way('TYO')
driver.close()