import os
import smtplib
import imghdr
from email.message import EmailMessage

EMAIL_ADDRESS = os.environ.get('EMAIL_USER')
EMAIL_PASSWORD = os.environ.get('EMAIL_PASS')

contacts = ['zhanganli1998@gmail.com']

msg = EmailMessage()
msg['Subject'] = 'SkyX: Price Alert Notification'
msg['From'] = EMAIL_ADDRESS
msg['To'] = 'zhanganli1998@gmail.com'

msg.set_content("""\
<!DOCTYPE html>
<html>
    <body>
        <h1>Hello, </h1><br/><br/>
        <h6>Your price alert has been achieved. Please purchase your flight ticket today</h6><br/><br/>
        <h6>Regards, </h6><br/> 
        <h6>SkX Team</h6>
    </body>
</html>
""", subtype='html')

with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
    smtp.login('INSERT YOUR EMAIL HERE', 'INSERT YOUR PASSWORD HERE')
    smtp.send_message(msg)
