t=["Edirne","Kırklareli","Tekirdağ","İstanbul","Kocaeli","Yalova","Sakarya","Düzce","Zonguldak","Bartın","Kastamonu","Sinop","Samsun","Ordu","Giresun","Trabzon","Rize","Artvin","Ardahan","Erzurum","Bayburt","Gümüşhane","Sivas","Tokat","Amasya","Çorum","Çankırı","Bolu","Bilecik","Balıkesir","Çanakkale","İzmir","Manisa","Kütahya","Eskişehir","Ankara","Kırıkkale","Yozgat","Erzincan","Kars","Ağrı","Iğdır","Van","Hakkari","Şirnak","Siirt","Bitlis","Muş","Bingöl","Diyarbakır","Mardin","Şanlıurfa","Adıyaman","Elazığ","Tunceli","Malatya","Kahramanmaraş","Gaziantep","Batman","Kayseri","Adana","Osmaniye","Hatay","Nevşehir","Niğde","Mersin","Karaman","Konya","Aksaray","Kilis","Antalya","Isparta","Afyonkarahisar","Uşak","Denizli","Muğla","Aydin","Bursa","Kırşehir","Karabük","Burdur"]

x = str(t).split(",")
y = ""
for i in x:
    y += "["+i+",''],"

print(y)
