import cv2

def css_change(id):
    # id="002"

    img=cv2.imread("img\\"+id+".png")

    h,w,c=img.shape

    print(h)    #高さ
    print(w)    #幅
    # print(c)    #色

    # img[Y,X]
    print(img[0,0])    #(0,0)座標の色情報取得(BGR)

    dot_one=1
    dot=''
    # height
    for i in range(0,h):
        # width
        for j in range(0,w):
            b,g,r=img[i,j]
            b=hex(b).replace('0x','')
            g=hex(g).replace('0x','')
            r=hex(r).replace('0x','')
            bgr=(r.zfill(2)+g.zfill(2)+b.zfill(2))
            dot=dot+str(dot_one+dot_one*j)+'px '+str(dot_one+dot_one*i)+'px #'+bgr
            # if i==31 & j==31:
            if i==(h-1) & j==(w-1):
                dot=dot+';\n'
            else:
                dot=dot+',\n'
        dot=dot+'\n'
    html_head=''
    html_footer=''

    html_head='<html>\n<head>\n</head>\n<body>\n'
    html_head=html_head+'<div class="pokemon_dot">\n'
    html_head=html_head+'    <div class="dot one"></div>\n'
    html_head=html_head+'</div>\n'
    html_head=html_head+'<style>\n'
    html_head=html_head+'.pokemon_dot{\n'
    html_head=html_head+'    width:160px;\n'
    html_head=html_head+'    height:160px;\n'
    # html_head=html_head+'    background-color:#ddd;\n'
    html_head=html_head+'}\n'
    html_head=html_head+'.dot{\n'
    html_head=html_head+'    position:relative;\n'
    html_head=html_head+'}\n'
    html_head=html_head+'.dot::before{\n'
    html_head=html_head+'    content:"";\n'
    html_head=html_head+'    width: '+str(dot_one)+'px;\n'
    html_head=html_head+'    height: '+str(dot_one)+'px;\n'
    html_head=html_head+'    background-color: transparent;\n'
    html_head=html_head+'    position: absolute;\n'
    html_head=html_head+'    top: -'+str(dot_one)+'px;\n'
    html_head=html_head+'    left: -'+str(dot_one)+'px;\n'
    html_head=html_head+'}\n'
    html_head=html_head+'.dot.one::before{\n'
    html_head=html_head+'    box-shadow:\n'

    html_footer=html_footer+'}\n'
    html_footer=html_footer+'</style>\n'
    html_footer=html_footer+'</body>\n</html>\n'

    html=open('css\\'+id+'.html','w')
    html.write(html_head+dot+html_footer)
    html.close()

for i in range(722,808):
    id=str(i).zfill(3)
    css_change(id)