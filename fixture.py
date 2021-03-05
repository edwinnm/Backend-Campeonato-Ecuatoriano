from bs4 import BeautifulSoup
import requests
import pandas as pd
import numpy as np

url = "https://es.wikipedia.org/wiki/Serie_A_de_Ecuador_2021"
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')
results = soup.select('table.wikitable.mw-collapsible')

#ETAPA      FECHA      LOCAL       VISITANTE
df = pd.DataFrame(columns=['etapa', 'fecha', 'local', 'visitante'])
etapa = 0
for result in results:
    if result.th.get_text().replace("\n", " ").replace("Fecha", " ").strip() == "1" :
        etapa = etapa +1
    
    partidos = result.select('tr')
    indexes = np.arange(2, 9, 1).tolist()
    for i in indexes:
        partido = partidos[i].select('td')
        df = df.append({'etapa' : etapa, 'fecha': result.th.get_text().replace("\n", " ").replace("Fecha", " ").strip() , 'local': partido[0].get_text().replace("\n", " ").strip(), 'visitante': partido[2].get_text().replace("\n", " ").strip()}, ignore_index=True)
df.to_csv("fixture.csv")

df_equipos = pd.DataFrame(columns=['equipos'])
df_equipos['equipos'] = df['local'].unique()
df_equipos.to_csv('equipos.csv')


        
