import matplotlib.pyplot as plt
import pandas as pd
from Google import Create_Service
import json
import random
import time as Time
CLIENT_SECRET_FILE = 'credentials-sheets.json'
API_NAME = 'drive'
API_VERSION = 'v3'
SCOPES = ['https://www.googleapis.com/auth/drive']

service = Create_Service(CLIENT_SECRET_FILE, API_NAME, API_VERSION, SCOPES)
SheetService = Create_Service(CLIENT_SECRET_FILE, 'sheets', 'v4', ['https://www.googleapis.com/auth/spreadsheets.readonly'])

response = SheetService.spreadsheets().get(
                spreadsheetId = '1-2avVB6DpNVGzAv5QtAyUOIaWTlWwUPxHf5y3ktogiE'
            ).execute()
SET100 = SheetService.spreadsheets().values().get(
                    spreadsheetId = '1-2avVB6DpNVGzAv5QtAyUOIaWTlWwUPxHf5y3ktogiE' ,
                    majorDimension = 'ROWS',
                    range = 'Graph!A1:F'+str(response['sheets'][2]['properties']['gridProperties']['rowCount'])
                ).execute()

Set_100 = pd.DataFrame(SET100['values'][1:],columns=SET100['values'][0])
Set_100['Percent Capital'].iloc[0] = "100%"
Set_100 = Set_100.dropna()
mark_drop = []
print(Set_100)
for i in range(0,len(Set_100)) :
    if len(Set_100['PCT Change SET100'].iloc[i]) == 0 :
        mark_drop.append(i)
for i in mark_drop :
    Set_100 = Set_100.drop(i,axis=0)
Set_100 = Set_100.reset_index(drop=True)
print(Set_100)
for i in range(0,len(Set_100)) :
    Set_100['PCT Change SET100'].iloc[i] = Set_100['PCT Change SET100'].iloc[i].replace('%','')
    Set_100['PCT Change Winner SET100'].iloc[i] = Set_100['PCT Change Winner SET100'].iloc[i].replace('%','')
    Set_100['Percent Capital'].iloc[i] = Set_100['Percent Capital'].iloc[i].replace('%','')
    Set_100['SET100'].iloc[i] = Set_100['SET100'].iloc[i].replace(',','')
    Set_100['Equity'].iloc[i] = Set_100['Equity'].iloc[i].replace(',','')

Set_100['PCT Change SET100'] = Set_100['PCT Change SET100'].astype('float')
Set_100['PCT Change Winner SET100'] = Set_100['PCT Change Winner SET100'].astype('float')
Set_100['Percent Capital']= Set_100['Percent Capital'].astype('float')
Set_100['SET100'] = Set_100['SET100'].astype('float')
Set_100['Equity']= Set_100['Equity'].astype('float')
Set_100['Time'] = Set_100['Time'].astype('str')

temp = []
month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
for i in range(0,len(Set_100['Time'])) :
    time_temp = Set_100['Time'].iloc[i].split('/')
    Set_100['Time'].iloc[i]=time_temp[1]+' '+month[int(time_temp[0])-1]+' '+time_temp[2]

S_100 = []
for i in range(0,len(Set_100)) :
    S_100.append(
        {
            'Time':Set_100['Time'].iloc[i],
            'Percent Capital':Set_100['Percent Capital'].iloc[i],
            'PCT Change Winner SET100':Set_100['PCT Change Winner SET100'].iloc[i],
            'PCT Change SET100':Set_100['PCT Change SET100'].iloc[i],
            'SET100':Set_100['SET100'].iloc[i],
            'Equity':Set_100['Equity'].iloc[i]
        }
    )



with open('json\Winner_SET100.json', 'w') as json_file:
    json.dump(S_100, json_file)

response = SheetService.spreadsheets().get(
                spreadsheetId = '1FwPxpGP-p2WCBC6zEH0DDgDzmhC5LqrIWQi-eZ2-CJ4'
            ).execute()

Value_by_Sector = SheetService.spreadsheets().values().get(
                    spreadsheetId = '1FwPxpGP-p2WCBC6zEH0DDgDzmhC5LqrIWQi-eZ2-CJ4' ,
                    majorDimension = 'ROWS',
                    range = 'Accum Data!A1:AK'+str(response['sheets'][3]['properties']['gridProperties']['rowCount'])
                ).execute()

VBS_columns = Value_by_Sector['values'][0]

if len(pd.read_json('json/Value_by_Sector.json')) != len(VBS_columns):
    ALL_color=[]
    for i in VBS_columns :
        color = "#"+''.join([random.choice('ABCDEF0123456789') for i in range(6)])
        ALL_color.append(color)
    with open('json\ALL_color.json', 'w') as json_file:
        json.dump({"my_Color":ALL_color}, json_file)


data = []
ALL_VBS = []
for i in VBS_columns :
    data.append([])

for i in range(1,len(Value_by_Sector['values'])) :
    for j in range(0,len(Value_by_Sector['values'][i])):
        if j==0 :
            temp_time = Value_by_Sector['values'][i][j].split('-')
            time = temp_time[2]+' '+month[int(temp_time[1])-1]+' '+temp_time[0]
            data[j].append(time)
            continue
        data[j].append(float(Value_by_Sector['values'][i][j].replace(',','')))

for i in range(0,len(data)) :
    ALL_VBS.append({VBS_columns[i]:data[i]})


with open('json\Value_by_Sector.json', 'w') as json_file:
    json.dump(ALL_VBS, json_file)
    
response = SheetService.spreadsheets().get(
                spreadsheetId = '1FwPxpGP-p2WCBC6zEH0DDgDzmhC5LqrIWQi-eZ2-CJ4'
            ).execute()

Value_by_Sector = SheetService.spreadsheets().values().get(
                    spreadsheetId = '1FwPxpGP-p2WCBC6zEH0DDgDzmhC5LqrIWQi-eZ2-CJ4' ,
                    majorDimension = 'ROWS',
                    range = 'Top Rank!B2:B'+str(response['sheets'][1]['properties']['gridProperties']['rowCount'])
                ).execute()

date_VBS = SheetService.spreadsheets().values().get(
                    spreadsheetId = '1FwPxpGP-p2WCBC6zEH0DDgDzmhC5LqrIWQi-eZ2-CJ4' ,
                    majorDimension = 'ROWS',
                    range = 'Top Rank!B1'
                ).execute()
temp = date_VBS['values'][0][0]
temp = temp.split('-')
temp_d = temp[2]+' '+month[int(temp[1])-1]+' '+temp[0]

with open('json\date_VBS.json', 'w') as json_file:
    json.dump({'date':temp_d}, json_file)

rank = {'1':Value_by_Sector['values'][0][0],'2':Value_by_Sector['values'][1][0],'3':Value_by_Sector['values'][len(Value_by_Sector['values'])-2][0],'4':Value_by_Sector['values'][len(Value_by_Sector['values'])-1][0]}

temp_Top_Stock = SheetService.spreadsheets().values().get(
                    spreadsheetId = '1FwPxpGP-p2WCBC6zEH0DDgDzmhC5LqrIWQi-eZ2-CJ4' ,
                    majorDimension = 'ROWS',
                    range = 'Top Stock!B2:B'+str(response['sheets'][6]['properties']['gridProperties']['rowCount'])
                ).execute()

with open('json\Value_by_Sector_rank.json', 'w') as json_file:
    json.dump(rank, json_file)
Top_Stock = []
for i in temp_Top_Stock['values'] :
    Top_Stock.append(i[0])


Stock_list = SheetService.spreadsheets().values().get(
                    spreadsheetId = '1FwPxpGP-p2WCBC6zEH0DDgDzmhC5LqrIWQi-eZ2-CJ4' ,
                    majorDimension = 'ROWS',
                    range = 'Sector List'
                ).execute()


name_Stock = Stock_list['values'][0]
Stock_list_2 = pd.DataFrame(Stock_list['values'][1:],columns=Stock_list['values'][0])
rank_sector = []
for i in range(0,len(Top_Stock)) :
    check = True
    # print(Top_Stock[i])
    for j in range(0,len(name_Stock)) :
        for k in range(0,len(Stock_list_2[name_Stock[j]])) :
            if Stock_list_2[name_Stock[j]].iloc[k] == Top_Stock[i] :
                # print(Stock_list_2[name_Stock[j]].iloc[k])
                rank_sector.append(name_Stock[j])
                check = False
                if check :
                    break
    # print("-----------------")
            

df_Stock = pd.DataFrame({
    'Stock' :  Top_Stock,
    'Sector' : rank_sector
})

one = [df_Stock[df_Stock['Sector']==rank['1']].reset_index(drop=True)['Stock'].iloc[0],df_Stock[df_Stock['Sector']==rank['1']].reset_index(drop=True)['Stock'].iloc[1]]
two = [df_Stock[df_Stock['Sector']==rank['2']].reset_index(drop=True)['Stock'].iloc[0],df_Stock[df_Stock['Sector']==rank['2']].reset_index(drop=True)['Stock'].iloc[1]]
three = [df_Stock[df_Stock['Sector']==rank['3']].reset_index(drop=True)['Stock'].iloc[0],df_Stock[df_Stock['Sector']==rank['3']].reset_index(drop=True)['Stock'].iloc[1]]
four = [df_Stock[df_Stock['Sector']==rank['4']].reset_index(drop=True)['Stock'].iloc[0],df_Stock[df_Stock['Sector']==rank['4']].reset_index(drop=True)['Stock'].iloc[1]]

Stock_rank = {
    'one':one,
    'two':two,
    'three':three,
    'four':four
    }

with open('json\Stock_rank.json', 'w') as json_file:
    json.dump(Stock_rank, json_file)

temp_WFII = SheetService.spreadsheets().values().get(
                    spreadsheetId = '1ZvHbFpf01qAh69Bvms318rYRPf_K7mUx1Bhmm5_T3-U' ,
                    majorDimension = 'ROWS',
                    range = 'ชีต1'
                ).execute()

WFII = pd.DataFrame(temp_WFII['values'][1:],columns=temp_WFII['values'][0])
# Date = []
# SSET = []
# SET50 = []
# SET = []
# MAI = []
# UnitStep = []

for i in range(0,len(WFII)) :
    time_temp = WFII['Date'].iloc[i][0:10].split('-')

    WFII['Date'].iloc[i]=time_temp[2]+' '+month[int(time_temp[1])-1]+' '+time_temp[0]
df_WFII = {
    'Date':WFII['Date'].to_list(),
    'SSET':WFII['SSET(Close)'].to_list(),
    'SET50':WFII['SET50(Close)'].to_list(),
    'SET':WFII['SET(Close)'].to_list(),
    'MAI':WFII['MAI(Close)'].to_list(),
    'Unit':WFII['UnitStep WFII Daily'].to_list(),
}

with open('json\WFII.json', 'w') as json_file:
    json.dump(df_WFII, json_file)

DT_MT5 = SheetService.spreadsheets().values().get(
                    spreadsheetId = '1gU37ClRUTTFbyCGre_AQOHGq-5G28VO1E1Xzdq7W7d4' ,
                    majorDimension = 'ROWS',
                    range = 'Sheet1!F3:G2000'
                ).execute()
Date_MT5 = SheetService.spreadsheets().values().get(
                    spreadsheetId = '1gU37ClRUTTFbyCGre_AQOHGq-5G28VO1E1Xzdq7W7d4' ,
                    majorDimension = 'ROWS',
                    range = 'Sheet1!A3:A2000'
                ).execute()
SF = []
C_USD = []
date = []
for i in range(0,len(DT_MT5['values'])) :
    if len(DT_MT5['values'][i]) == 1 :
        continue
    SF.append(float(DT_MT5['values'][i][0]))
    C_USD.append(float(DT_MT5['values'][i][1]))
    time_temp = Date_MT5['values'][i][0].split('.')
    date.append(time_temp[2]+' '+month[int(time_temp[1])-1]+' '+time_temp[0])
SF.reverse()
C_USD.reverse()
date.reverse()
with open('json\Data_MT5.json', 'w') as json_file:
    json.dump({"date":date,'SF':SF,'CUSD':C_USD}, json_file)
# Close_price = SheetService.spreadsheets().get(
#                 spreadsheetId = '1N0ODHePojZgmrP4Pw39P2GN_J9TXOYwyYwSnikYbnS8'
#             ).execute()
# Bid_Ask = SheetService.spreadsheets().get(
#                 spreadsheetId = '11gBsxZjFz_VdPIQKsx2GkjqVinJAMHd0dLEivxdcd88'
#             ).execute()
# i=0
# ALL_bid = []
# for i in range(0,len(Close_price['sheets'])):
#     Title = Close_price['sheets'][i]['properties']['title']
#     Bis_data = SheetService.spreadsheets().values().get(
#                         spreadsheetId = '11gBsxZjFz_VdPIQKsx2GkjqVinJAMHd0dLEivxdcd88' ,
#                         majorDimension = 'ROWS',
#                         range = Title
#                     ).execute()
#     price_data = SheetService.spreadsheets().values().get(
#                         spreadsheetId = '1N0ODHePojZgmrP4Pw39P2GN_J9TXOYwyYwSnikYbnS8' ,
#                         majorDimension = 'ROWS',
#                         range = Title
#                     ).execute()
#     Time.sleep(2)
#     a=b=c=d=e=f=g=h=t=u=v=w=x=y=z = []
#     for j in range(0,len(Bis_data['values'])) :
#         a.append(float(Bis_data['values'][j][0]))
#         b.append(float(Bis_data['values'][j][1]))
#         c.append(float(Bis_data['values'][j][2]))
#         d.append(float(Bis_data['values'][j][3]))
#         e.append(float(Bis_data['values'][j][4]))
#         f.append(float(Bis_data['values'][j][5]))
#         g.append(float(Bis_data['values'][j][6]))
#         h.append(float(Bis_data['values'][j][7]))
#         u.append(float(Bis_data['values'][j][8]))
#         v.append(float(Bis_data['values'][j][9]))
#         w.append(float(Bis_data['values'][j][10]))
#         x.append(float(Bis_data['values'][j][11]))
#         y.append(float(Bis_data['values'][j][12]))
#         z.append(float(Bis_data['values'][j][13]))
#     date = []
#     price = []    
#     for j in range(1,len(price_data['values'])) :
#         date.append(price_data['values'][j][0])
#         price.append(float(price_data['values'][j][1]))

#     Bid_dic = {
#         Title:{
#             a[0]:a[1:],
#             b[0]:b[1:],
#             c[0]:c[1:],
#             d[0]:d[1:],
#             e[0]:e[1:],
#             f[0]:f[1:],
#             g[0]:g[1:],
#             h[0]:h[1:],
#             u[0]:u[1:],
#             v[0]:v[1:],
#             w[0]:w[1:],
#             x[0]:x[1:],
#             y[0]:y[1:],
#             z[0]:z[1:],
#             'date':date[1:],
#             'Close':price[1:]
#     }}
#     ALL_bid.append(Bid_dic)
# with open('data\Bid_Ask.json', 'w') as json_file:
#     json.dump({'data':ALL_bid}, json_file)

UNS_set =SheetService.spreadsheets().values().get(
                    spreadsheetId = '1-RzntbxriO1R-xitgx6_OS1ujYGF6p92v-0d4goMnG4' ,
                    majorDimension = 'ROWS',
                    range = 'Sheet1!AV:AW'
                ).execute()
UNS_set_D =SheetService.spreadsheets().values().get(
                    spreadsheetId = '1-RzntbxriO1R-xitgx6_OS1ujYGF6p92v-0d4goMnG4' ,
                    majorDimension = 'ROWS',
                    range = 'Sheet1!A:A'
                ).execute()       
UNS_set50=SheetService.spreadsheets().values().get(
                    spreadsheetId = '1ZvD78kpFbqPSyZ4D5bIro_buOqT3WUaP_pRLdEO14Og' ,
                    majorDimension = 'ROWS',
                    range = 'Sheet1!AV:AW'
                ).execute()
UNS_set50_D=SheetService.spreadsheets().values().get(
                    spreadsheetId = '1ZvD78kpFbqPSyZ4D5bIro_buOqT3WUaP_pRLdEO14Og' ,
                    majorDimension = 'ROWS',
                    range = 'Sheet1!A:A'
                ).execute()
UNS_MAI=SheetService.spreadsheets().values().get(
                    spreadsheetId = '1cM-RmxjeusfE0OjjprDI94FC7ALrI_c0ySIwSV52fpA' ,
                    majorDimension = 'ROWS',
                    range = 'Sheet1!AV:AW'
                ).execute()
UNS_MAI_D=SheetService.spreadsheets().values().get(
                    spreadsheetId = '1cM-RmxjeusfE0OjjprDI94FC7ALrI_c0ySIwSV52fpA' ,
                    majorDimension = 'ROWS',
                    range = 'Sheet1!A:A'
                ).execute()
# print(UNS_set_D['values'])
Set = [[],[],[]]

for i in range(1,len(UNS_set['values'])) :
    try :
        if len(UNS_set_D['values'][i][0]) > 10 :
            UNS_set_D['values'][i][0] = UNS_set_D['values'][i][0][0:11]
        if UNS_set_D['values'][i][0].find('/') != -1 :
            temp_time = UNS_set_D['values'][i][0].split('/')
        elif UNS_set_D['values'][i][0].find('-') != -1 :
            temp_time = UNS_set_D['values'][i][0].split('-')
        if int(temp_time[0]) > int(temp_time[2]) :
            temp_time[0],temp_time[2] = temp_time[2],temp_time[0]
        time = temp_time[0]+' '+month[int(temp_time[1])-1]+' '+temp_time[2]
        Set[0].append(time)
        Set[1].append(float(UNS_set['values'][i][0]))
        Set[2].append(float(UNS_set['values'][i][1]))
    except :
        print(UNS_set_D['values'][i][0])
        continue

with open('json\Set_unit.json', 'w') as json_file:
    json.dump({
        'date': Set[0],
        'unit': Set[1],
        'index': Set[2]
        }, json_file)

Set50 = [[],[],[]]
for i in range(1,len(UNS_set50['values'])) :
    try :
        if len(UNS_set50_D['values'][i][0]) > 10 :
            UNS_set50_D['values'][i][0] = UNS_set50_D['values'][i][0][0:11]
        if UNS_set50_D['values'][i][0].find('/') != -1 :
            temp_time = UNS_set50_D['values'][i][0].split('/')
        elif UNS_set50_D['values'][i][0].find('-') != -1 :
            temp_time = UNS_set50_D['values'][i][0].split('-')
        if int(temp_time[0]) > int(temp_time[2]) :
            temp_time[0],temp_time[2] = temp_time[2],temp_time[0]
        time = temp_time[0]+' '+month[int(temp_time[1])-1]+' '+temp_time[2]    
        Set50[0].append(time)
        Set50[1].append(float(UNS_set50['values'][i][0]))
        Set50[2].append(float(UNS_set50['values'][i][1]))
    except :
        print(UNS_set50_D['values'][i][0])
        continue

with open('json\Set_unit50.json', 'w') as json_file:
    json.dump({
        'date': Set50[0],
        'unit': Set50[1],
        'index': Set50[2]
        }, json_file)

MAI = [[],[],[]]
for i in range(1,len(UNS_MAI['values'])) :
    try :
        if len(UNS_MAI_D['values'][i][0]) > 10 :
            UNS_MAI_D['values'][i][0] = UNS_MAI_D['values'][i][0][0:11]
        temp_time = ''
        if UNS_MAI_D['values'][i][0].find('/') != -1 :
            temp_time = UNS_MAI_D['values'][i][0].split('/')
        elif UNS_MAI_D['values'][i][0].find('-') != -1 :
            temp_time = UNS_MAI_D['values'][i][0].split('-')
        if int(temp_time[0]) > int(temp_time[2]) :
            temp_time[0],temp_time[2] = temp_time[2],temp_time[0]
        time = temp_time[0]+' '+month[int(temp_time[1])-1]+' '+temp_time[2]    
        MAI[0].append(time)
        MAI[1].append(float(UNS_MAI['values'][i][0]))
        MAI[2].append(float(UNS_MAI['values'][i][1]))
    except :
        print(UNS_MAI_D['values'][i][0])
        continue

with open('json\Mai_unit.json', 'w') as json_file:
    json.dump({
        'date': MAI[0],
        'unit': MAI[1],
        'index': MAI[2]
        }, json_file)


response = SheetService.spreadsheets().get(
                spreadsheetId = '1-RzntbxriO1R-xitgx6_OS1ujYGF6p92v-0d4goMnG4'
            ).execute()
# print(response['sheets'][1]['properties']['gridProperties']['rowCount'])
Set_MKB_date = SheetService.spreadsheets().values().get(
                    spreadsheetId = '1-RzntbxriO1R-xitgx6_OS1ujYGF6p92v-0d4goMnG4' ,
                    majorDimension = 'ROWS',
                    range = 'Sheet1!A1:A'+str(response['sheets'][1]['properties']['gridProperties']['rowCount'])
                ).execute()
Set_MKB = SheetService.spreadsheets().values().get(
                    spreadsheetId = '1-RzntbxriO1R-xitgx6_OS1ujYGF6p92v-0d4goMnG4' ,
                    majorDimension = 'ROWS',
                    range = 'Sheet1!AH1:AJ'+str(response['sheets'][1]['properties']['gridProperties']['rowCount'])
                ).execute()
Set_MKB_index = SheetService.spreadsheets().values().get(
            spreadsheetId = '1-RzntbxriO1R-xitgx6_OS1ujYGF6p92v-0d4goMnG4' ,
            majorDimension = 'ROWS',
            range = 'Sheet1!AW1:AW'+str(response['sheets'][1]['properties']['gridProperties']['rowCount'])
        ).execute()
date_MS = []
macdP = []
macdSig = []
rsi = []
Set_index = []
for i in range(1,len(Set_MKB_date['values'])):
    temp_time = Set_MKB_date['values'][i][0].split('/')
    if Set_MKB_date['values'][i][0].find('-') != -1:
        Set_MKB_date['values'][i][0] = Set_MKB_date['values'][i][0][0:11]
        temp_time = Set_MKB_date['values'][i][0].split('-')
        temp_time[0],temp_time[2] = temp_time[2],temp_time[0]
    time = temp_time[0]+' '+month[int(temp_time[1])-1]+' '+temp_time[2]
    date_MS.append(time)

for i in range(1,len(Set_MKB['values'])):
    macdP.append(Set_MKB['values'][i][0])
    macdSig.append(Set_MKB['values'][i][1])
    rsi.append(Set_MKB['values'][i][2])

for i in range(1,len(Set_MKB_index['values'])):
    Set_index.append(Set_MKB_index['values'][i][0])

with open('json\Set_MKB.json', 'w') as json_file:
    json.dump({
        'date': date_MS,
        'macdP': macdP,
        'macdSig':macdSig,
        'rsi':rsi,
        'index':Set_index
        }, json_file)



response = SheetService.spreadsheets().get(
                spreadsheetId = '1ZvD78kpFbqPSyZ4D5bIro_buOqT3WUaP_pRLdEO14Og'
            ).execute()
# print(response['sheets'][1]['properties']['gridProperties']['rowCount'])
Set50_MKB_date = SheetService.spreadsheets().values().get(
                    spreadsheetId = '1ZvD78kpFbqPSyZ4D5bIro_buOqT3WUaP_pRLdEO14Og' ,
                    majorDimension = 'ROWS',
                    range = 'Sheet1!A1:A'+str(response['sheets'][1]['properties']['gridProperties']['rowCount'])
                ).execute()
Set50_MKB = SheetService.spreadsheets().values().get(
                    spreadsheetId = '1ZvD78kpFbqPSyZ4D5bIro_buOqT3WUaP_pRLdEO14Og' ,
                    majorDimension = 'ROWS',
                    range = 'Sheet1!AH1:AJ'+str(response['sheets'][1]['properties']['gridProperties']['rowCount'])
                ).execute()
Set50_MKB_index = SheetService.spreadsheets().values().get(
            spreadsheetId = '1ZvD78kpFbqPSyZ4D5bIro_buOqT3WUaP_pRLdEO14Og' ,
            majorDimension = 'ROWS',
            range = 'Sheet1!AW1:AW'+str(response['sheets'][1]['properties']['gridProperties']['rowCount'])
        ).execute()

date_MS50 = []
macdP = []
macdSig = []
rsi = []
Set50_index = []
for i in range(1,len(Set50_MKB_date['values'])):
    temp_time = Set50_MKB_date['values'][i][0].split('/')
    if Set50_MKB_date['values'][i][0].find('-') != -1:
        Set50_MKB_date['values'][i][0] = Set50_MKB_date['values'][i][0][0:11]
        temp_time = Set50_MKB_date['values'][i][0].split('-')
        temp_time[0],temp_time[2] = temp_time[2],temp_time[0]
    time = temp_time[0]+' '+month[int(temp_time[1])-1]+' '+temp_time[2]
    date_MS50.append(time)

for i in range(1,len(Set50_MKB['values'])):
    macdP.append(Set50_MKB['values'][i][0])
    macdSig.append(Set50_MKB['values'][i][1])
    rsi.append(Set50_MKB['values'][i][2])

for i in range(1,len(Set50_MKB_index['values'])):
    Set50_index.append(Set50_MKB_index['values'][i][0])

with open('json\Set50_MKB.json', 'w') as json_file:
    json.dump({
        'date': date_MS50,
        'macdP': macdP,
        'macdSig':macdSig,
        'rsi':rsi,
        'index':Set50_index
        }, json_file)

response = SheetService.spreadsheets().get(
                spreadsheetId = '1cM-RmxjeusfE0OjjprDI94FC7ALrI_c0ySIwSV52fpA'
            ).execute()
# print(response['sheets'][1]['properties']['gridProperties']['rowCount'])
Mai_MKB_date = SheetService.spreadsheets().values().get(
                    spreadsheetId = '1cM-RmxjeusfE0OjjprDI94FC7ALrI_c0ySIwSV52fpA' ,
                    majorDimension = 'ROWS',
                    range = 'Sheet1!A1:A'+str(response['sheets'][1]['properties']['gridProperties']['rowCount'])
                ).execute()
Mai_MKB = SheetService.spreadsheets().values().get(
                    spreadsheetId = '1cM-RmxjeusfE0OjjprDI94FC7ALrI_c0ySIwSV52fpA' ,
                    majorDimension = 'ROWS',
                    range = 'Sheet1!AH1:AJ'+str(response['sheets'][1]['properties']['gridProperties']['rowCount'])
                ).execute()
Mai_MKB_index = SheetService.spreadsheets().values().get(
            spreadsheetId = '1cM-RmxjeusfE0OjjprDI94FC7ALrI_c0ySIwSV52fpA' ,
            majorDimension = 'ROWS',
            range = 'Sheet1!AW1:AW'+str(response['sheets'][1]['properties']['gridProperties']['rowCount'])
        ).execute()

date_MM = []
macdP = []
macdSig = []
rsi = []
Mai_index = []
for i in range(1,len(Mai_MKB_date['values'])):
    temp_time = Mai_MKB_date['values'][i][0].split('/')
    if Mai_MKB_date['values'][i][0].find('-') != -1:
        Mai_MKB_date['values'][i][0] = Mai_MKB_date['values'][i][0][0:11]
        temp_time = Mai_MKB_date['values'][i][0].split('-')
        temp_time[0],temp_time[2] = temp_time[2],temp_time[0]
    time = temp_time[0]+' '+month[int(temp_time[1])-1]+' '+temp_time[2]
    date_MM.append(time)

for i in range(1,len(Mai_MKB['values'])):
    macdP.append(Mai_MKB['values'][i][0])
    macdSig.append(Mai_MKB['values'][i][1])
    rsi.append(Mai_MKB['values'][i][2])

for i in range(1,len(Mai_MKB_index['values'])):
    Mai_index.append(Mai_MKB_index['values'][i][0])

with open('json\Mai_MKB.json', 'w') as json_file:
    json.dump({
        'date': date_MM,
        'macdP': macdP,
        'macdSig':macdSig,
        'rsi':rsi,
        'index':Mai_index
        }, json_file)