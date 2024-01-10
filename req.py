import requests
from bs4 import BeautifulSoup

r = requests.get("https://intlcea.org/").text

soup = BeautifulSoup(r, 'html.parser')

icon = soup.find('link', attrs={'rel': 'icon'})
print(icon)
