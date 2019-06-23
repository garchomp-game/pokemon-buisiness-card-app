import urllib.request
import time

def image_download(url,img_name):
    data=urllib.request.urlopen(url).read()
    with open(img_name,mode="wb") as f:
        f.write(data)

for i in range(1,808):
    cnt=str(i).zfill(3)
    url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+str(i)+".png"
    save_name="img/"+cnt+".png"
    print(url)
    image_download(url,save_name)
    time.sleep(40)
