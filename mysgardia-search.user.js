// ==UserScript==
// @name         Search Mys Creatures
// @namespace    https://github.com/Steelage/mysgardia-search
// @version      1.02
// @description  The Sanctuary takes too long list of creatures, and the Manage Creatures is screwed up yet; here this exists for easily browsing Mysgardia Creatures in the Sanctuary(profile page)!
// @author       Niello#7627(186903054925168640) / mysgardia.com/profile/view/Dux / github.com/Steelage
// @match        http://mysgardia.com/profile/view/*
// @grant        none
// ==/UserScript==
var row = document.querySelectorAll("#adopttable tr")
if (row.length > 1) {
var albino = ["a75ef80b3cb5881be0441bec6793d92f.png","a6beab9b44d485de935fb6109cbc2e84.png","bd01229e38928a8d6d8eca48958564e1.png","c1ead514048919ecd481edd37f83817c.png","bca7e3e4f13dfeb2ed1b7247996d4403.png","8622efd84af1ad0a87376507602860fa.png","7d890295ae76cff0014d8879a63a9435.png","68711c4f19e42a5f2da6f0642486eec6.png","ff4c72baf67fe9701a03e487f750d435.png","8eb21844a86fe6fdbfbdd5ae29d77fb7.png","ca4499a56be62d5398bb1954b77df4e6.png","eaa345a0889952c0d2acbdde88681ed0.png","624751b2added6f77da1cfd5b87936ad.png","22f959de6d2ef99d37e41fac85fcdc92.png","a0823a7fbe360aa38b9592696e9f0a74.png","6336d3026144c7f1c833d2e87707d17b.png","644a682c0b7296dfba656c47ff5fcd62.png","95f0f9816d20e9beea55bf41ada57469.png","c6be983e1c186f311c4735766deebe94.png","fe2d3e2c165681f0e7c66a15acc51736.png","b9cfa085cf5db79d5ce54dce11481514.png","f370954f6f0d800b066ed556df27f10a.png","9f21437aa9969c3afaa50624af2c622b.png","6622542c36ace1e98b3f2aca9ef5ddb3.png","6dfdd908c56da653ab160677bf762438.png","53d8637d8154e2d1d94b305c405c43d4.png","2c7baeff182e1c7b381c601f633bc89f.png","04b3cbda8ad059e97f070a15f493caff.png","2f521059a37f0bf3b3a5d3aa3cf2845b.png","a5c2a906c98eff12b73884df9dc2f0ff.png","b122880055296cb4d3b6cd935b78134a.png","a7a385b5ab0158850eaf1f367174c40b.png","b6e0d37e535cb6c95f103d31e1bddc84.png","c77abbd44f1431b3507b220728ae7ff6.png","04bde3e607a262208dd9c66193e6d388.png","ff459bb61c0dc2af89faacf4269cfcf9.png","d2646196fd1b94ecf0629359c9744a0d.png","2021a755b3ac47f1076f2691dcc8ea9b.png","7b8b6973b8c7e293b8146ef1c2666eb5.png","0ba9e25f26c98a303cbd586e8d3f9935.png","5c4b1c0281e9ead10cf8524d25b2ba7f.png","85d3f805e04cf196d2e487882eb20c4d.png","91ecd945ed79cd45de96b60da8856f4e.png","d9a8670d6704e8eb236f1fd55a156dfb.png","fb5396683edd9538588e5926649e0827.png","e67c074ad5a80c01b600a07c599380c6.png","265cfd502f245d3c99bd80205c30f8c9.png","b1be6af311b805fee6ea4e8234f1253c.png","779a235612535c5274a0bd1d1f7ad99c.png","143884d163ae5e2fcb2aa1bfd1655282.png","08f260438780511e3228003e9af16064.png","8c4c443c1a28c81e0996fd70d74e8101.png","4e5dbf6ae3ab1bedbd2b8b0b856b41b1.png","fc92eb76320a9b7857549b9b22af5012.png","cdc86185b396631be4d977c0219c3a18.png","607c77aa906c7a783847031ca080f927.png","ca3fc96f97ba52aec7063f5a28829ed6.png","5d53ca5f1e41c8292d026f15367eacd4.png","112451bd0364cc2c8619a1e9aadb360f.png","7d678bfb7b22e07c5c88b822e93b3f1b.png","d8dd2f1e055ac027e20a4fe04cb28362.png","586b4536ab78d454ad4ea298f3bb6bb6.png","8e99a0e2cf143f1b21c674bdf7dbef7d.png","e8281c5b8b1a4cc677fa388e6dd1af03.png","6fd5bbc3602d4b34a865bccfe03c7e8c.png","38b834cac8c99511217f8b11d8578cee.png","cf050b6f78854c3c20ea72426ccf299c.png","f07b57099b45ba6f4c22a206a6a48888.png","f890819807012bf1d77def8364d91e7e.png","fe711d929cf785befa25ec4225e8af44.png","99875881a7c61637c3f5e04c31c118db.png","324e0527462040ac3097ae386ac5d117.png","6040b0b905f87449fb127b31de0907ce.png","ba97cc7895cd7cf27ebbb07e627030ee.png","9b7973164842908d6a464bef855fd2e0.png","b56265b4258e281b240fc58726aa5847.png","6bc1547568f90ea50b37f8d21891e12c.png","b5d428c53e06341741c980546ece278e.png","dc22a49cf7bdac868250a2d25f2cd582.png","6c0480427258daed6e1f07a3a067a281.png","433c1ce9a5bb875bb253f3e953ef6657.png","e4e628ee3840f901deb22d82aeef550b.png","8e5b148c6b45fe5606ffb7280843791e.png","03443c91eedc5bbf8dc67192ca0eb3cb.png","41446400d92e458319888ce1357b832d.png","c482081d10ed9f60427fd32326371cd2.png","a421cb446f5cf5506ea0530b2a1abc3c.png","f950de2bd9db0fea5301d9f19fe48515.png","053fde355e8f0269f219cbf0584e3a00.png","4b69a4a2028be1adacac4eaeafb9ceeb.png","25107874f37eb14614f16230370053bb.png","65146a9b6424a6c74c5d78db7b73bd6e.png","93863740c815e187f8a7b5fced1d379c.png","77484b75eda9f3ddcad1f4906ebb21e7.png","4510f3b31818ceed6f0250a38718d12e.png","37b1539b5797d65adb19abc12421450a.png","0cc5389dad4811e82a7407c8341da391.png","6fb10ae821657147375f650b0f55ff32.png","9a3e123d3437c16abf91db6bfbfb8dd4.png","af5ead0d0ad35c74d10a76892469264b.png","aad4c85e45731f1d46ba127c05c65788.png","c8595533c32aac3cf1a04cd2fcdcbbd6.png","7244e3656a459f26f88bb72182e4affd.png","da45d7c58dbd950a84997f46ee31cbf3.png","c835d8d4455e58dbc6dd884fecccb642.png","29bb3b79fa855203bdba65d90d02f006.png","c187a6cfa24505fb905a24546e31ced9.png","ce37eb7666474da25ea591734e978f8c.png","9ccc9ff70f465095300e2a10c909fe9f.png","739b2cca42a30b18de792a0bb133fe32.png","649998fbaf1961a0051e3a8af3cf0299.png","9af25e724225edde2a673f951d2a9db7.png","b7f7a177ac70f24427bf44054dc67dea.png","a4b1d03b43c432b1a805f147488a7380.png","9645f9f7565de8eada4b3cc79263632f.png","e18b6fe1ca8552a0a12875c49b440ffb.png","41e6af76c4479e550c562bb288d8c0d6.png","95f681c5203f16fb80c2d4dcb5fc469e.png","2531aa77ba7dc347f5728f01550e31ab.png","ff004e859589f2d8a401503d522438ac.png","96c8e8a1114a3fb493a46e84c9d6757c.png","26924a17c6c7a0b7a8c922532182bdee.png","6888f4290259539917f197e21f1c4eb8.png","f03d0d99c525f73150821a170a764ec0.png","ec0fdf06f7cfa9ed6fcc252c7a771b64.png","c8dbb03c54b9c26dec6ac489f44b2e22.png","08d4a4bdea508397c88a7c564b031042.png","16b0630fdd55bf3f257143dcdf0e165d.png","e7332abaa7c2822cad785f46622dbf26.png","3ad00d5e8ce9c660c0cd03f7fbce4a47.png","39d2dd1399c0159f7f18d15ed8a0a201.png","2ce091ccb10b7dd456b64db9a68e0e7c.png","328476cfc84bbbaa51872e651a49300f.png","b59b436f931b014eef7c5fce3a8cd51a.png","79be005fc9a5f3a982a92e86f07c132a.png","af7fa14877946cfc60508cf05a92c1f3.png","0d25c589f7f9aa59801f36776e858f37.png","28c6323cef71f7b9223d89823da556c8.png","c3e3edfbd259ba671e51a636962b5e4c.png","e1777b8707dc7b52ac628353462cae7d.png","6597b8fead30ec5b119f5efc910b7428.png","0701e3fe4f53d4988d6d3616b474ac83.png","5ca6837b0a2864634f9198eb67ca5081.png","5283301c6e18a055a2f86cdc06ce119f.png","3fcbd0bff2fd95224f1ea2e7e3410879.png","eaaee39adfa3c4444a32c2cd0f09de8a.png","4145d5b01402c90bc40ba0769f71a419.png","c6c7783d88ac62ecab9b66585159b897.png","3f20cb253acbb108e8e2578a49e33cb7.png","ac6b8b1597680860ef47786bd3e85907.png","c974f9cf36667ec8b1c1110e8bfb9bee.png","6a92d2cf58e4b85efe900f3caf6bea59.png","224c874def8dd3f7ee8924c96afe8d76.png","85737682f3e98999b901f522319bc66b.png","fde299cccf3642ccc500e04373a29f15.png","cec79e5ddb42dbe62f2c1ee604f347a4.png","b504c6f341476faa1652c355984ed901.png","03d69b577a8494cac06eb74101f6b54e.png","eef26f8b6b681fc82b30e1b050824429.png","fd264bb88456be98a243b407513f879c.png","8bc6c087204ca9e8febdf623d98dd0e7.png","7cc3e3a11b7965e8741220226d9d8654.png","493be5c49c15df3b9073961eeb37cad2.png","3478fe50235787152e44000bbb709ce0.png","0c1652817dd7e846ce6eaf95c1065f94.png","0592aed7c606308d1a64ef9a7077063e.png","8e8057b639dc4c74fa604e5bab1cc478.png","b3c088ebb213bf622045d5917038151a.png","9950996b1116ba757e3907eedf472247.png","7b6c4287bb6e0e59a7bb07048e2b4d9d.png","721a38d5168dfcca73db9cb089ec61f9.png","15aa0d3029c1458941d42eab4b960b5a.png","9c9ed7433feed174b3edb683febf8f9e.png","359636d2901331981aad4defbdc00fe8.png","afcd343a7304252ec375116e1e7d8cdd.png","86727e9e760476274c4febd9f0830716.png","d98398d659f0f0f8698211e188c7624a.png","2f4cc36ae3185c564605f9f452de345d.png","8d8549ae24b6d47efdeb76c34ed4bbb1.png","20465bad516d174730c9c343ebffb3d7.png"]
/*↑as of January 3rd, 2020 update, up to Ranitoxa and Mustelabbit */
var Tabl = document.querySelector("#adopttable")
var TablHead = document.querySelector("#adopttable tr").cloneNode(true)
TablHead.childElementCount == 6 ? TablHead.lastElementChild.remove() : null
var htwo = document.querySelectorAll("article h2")
htwo = htwo[htwo.length-2]
var horigin = htwo.innerText
var li = row.length
var table = "["
for (var i=1;i<li;i++) {
var chil0 = row[i].children[0]
var chil1 = row[i].children[1]

var number = chil0.querySelector("a").href.match(/(\d+)$/)[0]
var img = chil0.querySelector("img").src.match(/\/picuploads\/.+/)[0]
var name = chil1.innerText.replace(/ +$/,"").replace(/\\\'/g,"'")
var sex = chil1.querySelector("img").src.match(/(\w)\.png/)[1]
var frozen = chil1.querySelectorAll("img")[1].src.match(/(\w+)\.png/)[1]
var species = row[i].children[2].innerText
var level = row[i].children[3].innerText
var clicks = row[i].children[4].innerText

table+= `["${number}","${img}","${name}","${sex}","${frozen}","${species}",${level},${clicks}],`
}
table= table.replace(/,$/,"]")
table= JSON.parse(table)
//▲ Importing Creature Info Arrays from the Original Table!

var managecont = document.createElement("ul")
managecont.className ="managecont"

var pagenumcont = document.createElement("ul")
pagenumcont.className ="pagenumcont"

var pagenumcontReserved = document.createElement("div")
pagenumcontReserved.className ="pagenumcontReserved"

var Fom = document.createElement("form")
Fom.className = "fompom"
Fom.method = "post"

Fom.appendChild(managecont)
Fom.appendChild(pagenumcont)
var Conta // This guy references the Bottom Offset of htwo, which the Fom will go to bottom after scrolling down below it.
//▲ Creating containers + height mimic of the Page container!

if (document.querySelector(".usercplink[href='/myadopts']")){
var ManageNames = ["Level Up","Manage","Visitors","Codes","Rename","Trade","Freeze","Pound","Release","Export HTML Code","Export BBCode"] // total 11 items
var Manages = ["levelup/click","myadopts/manage","myadopts/stats","myadopts/bbcode","myadopts/rename","myadopts/trade","myadopts/freeze","pound/pound","wild/wild"] // total 9 items
var ManageLength = 9
} else {
ManageNames = ["Level Up","Export HTML Code","Export BBCode"] // total 3 items
Manages = ["levelup/click"] // total 1 item
ManageLength = 1
}
var CurrentManager = "levelup/click"

for (i=0;i<ManageLength+2;i++) {
var ManageButton = document.createElement("li")
ManageButton.innerText = ManageNames[i]
managecont.appendChild(ManageButton)
}
managecont.children[0].className="special"

managecont.onclick = function(e){ //I'd name it MANAGER
var kid = e.target
if (kid.tagName == "LI"){
for (var i = 0; (kid=kid.previousElementSibling); i++); //◀get index! source:stackoverflow.com/questions/5913927/get-child-node-index#comment39914731_5913984
if(i < ManageLength){
    for(var ii=ManageLength+2;ii--;){managecont.children[ii].className=""}
    e.target.className="special"
    CurrentManager = Manages[i]
    var critters = document.querySelectorAll("#adopttable a")
    for(i=critters.length;i--;){critters[i].href = `/${CurrentManager}/${critters[i].href.match(/(\d+)$/)[1]}`}
         }
    else if(i >= ManageLength && confirm("Export codes of all the filtered creatures?")) {
    var codes = one.length > 0 ? one : table
    codes = codes.map(function(you){return you[0]})
    var codetype
    i == ManageLength ? codetype='<a href="http://mysgardia.com/levelup/click/$1"><img src="http://mysgardia.com/levelup/siggy/$1"></a>' : codetype='[url=http://mysgardia.com/levelup/click/$1][img]http://mysgardia.com/levelup/siggy/$1[/img][/url]'
    var expo = ""
    var codeleng = codes.length
    for(i=0;i<codeleng;i++){expo += codes[i].replace(/(.+)/,codetype)}
    whitearea.value = expo
    while (whiter.hasChildNodes()) {whiter.firstChild.remove()}
    fade.style.display="flex"
    whiter.appendChild(whitearea)
    whiter.appendChild(copybutton)
    whitearea.placeholder = "Exported codes go here."
    }
   }
}

//▲ Creating Manage buttons & Setting Manager!

li = table.length
var perpage = 50
var pages = Math.ceil(li/perpage)
var one = [] // this guy will collect filtered outcomes out of the original array collection!
var pagenum
var inapage
PageSet(table)

//▲ Loading Datas from the Imported Arrays!

function CreatePages(TAB,first,last) {
var TTT = TAB
pagenumcont.innerHTML = ""

function PageMaker(u,num,s){
var apage = document.createElement("li")
apage.className= s==1 ? "special" : null
apage.innerHTML=u
apage.addEventListener("click",function(){PageSet(TTT,num,u)})
pagenumcont.appendChild(apage)
}

PageMaker("<",1)
PageMaker(`<span>≪</span><span>1</span>`,1,1)
for (i=first;i<=last;i++){PageMaker(i,i)}
PageMaker(`<span>≫</span><span>${pages}</span>`,pages,1)
PageMaker(">",1)

pagenumcontReserved.style.height = Fom.clientHeight+"px"
}

function PageSet(TAB,u,self) {
var selfie = pages !== 0

if(selfie && self == "<" && pagenum>1){pagenum=pagenum-1}
else if(selfie && self == "<" && pagenum==1){pagenum=pages}
else if(selfie && self == ">" && pagenum<pages){pagenum=pagenum+1}
else {pagenum=u||1}
inapage = TAB.slice((pagenum-1)*perpage, pagenum*perpage)

var first = pagenum-10>1 ? pagenum-10 : 1
var last = first+20 < pages ? first+20 : pages
last-first !== 20 ? first=last-20 : null
first < 1 ? first=1 : null
var activepage= last-first-(last-pagenum)+2
CreatePages(TAB,first,last)

var food = ""
var lil = inapage.length
for (i=0;i<lil;i++)
{
food += `
<tr>
<td><a href="/${CurrentManager}/${inapage[i][0]}"><img src="${inapage[i][1]}" alt="${inapage[i][0]}"></a></td>
<td>${inapage[i][2]} <img src="/picuploads/${inapage[i][3]}.png"> <img src="/picuploads/${inapage[i][4]}.png"></td>
<td>${inapage[i][5]}</td>
<td>${inapage[i][6]}</td>
<td>${inapage[i][7]}</td>
</tr>
`
}
Tabl.innerHTML= food
row = document.querySelectorAll("#adopttable tr")
Tabl.insertBefore(TablHead,Tabl.children[0])

lil = pagenumcont.childElementCount
for (i=lil;i--;){
pagenumcont.children[i].removeAttribute("actived")
}

if(selfie) {pagenumcont.children[activepage].setAttribute("actived","")}

var quantity = TAB.length
var critter = row.length > 1? "creatures" : "creature"
    htwo.innerHTML= quantity !== 0 ? `${horigin} (${row.length} ${critter} out of Total ${quantity})` : `${horigin} (No Creatures)`

if(Conta<document.body.scrollTop){document.body.scrollTop = Fom.offsetTop}
Windocheck()
self && (self.tagName == "INPUT" || self.tagName == "SELECT") ? self.focus() : null
}

//★ Creating Inputs & Selects!
Tabl.parentNode.insertBefore(Fom, Tabl)

function InputCreator(type,className,placeholder,title,value) {
var Inp = document.createElement("input")
Inp.type = type
Inp.className = className
Inp.placeholder= placeholder
Inp.title = title
value ? Inp.value = value : null
if (li>3000){Inp.onkeyup = function(e) {e.key == "Enter" ? SortSpecies(e,this) : null}}
else {Inp.onkeyup = function(e) {SortSpecies(e,this)}}
Fom.appendChild(Inp)
}

InputCreator("text","inputName","NAME","type NAME here for find creatures with specific name.")
var Inp = document.querySelector(".inputName")
InputCreator("text","inputClick","Clicks","type the range like 123-456 to find creatures within the range, or simply put numbers to find those with specific numbers of clicks.")
var ClickInp = document.querySelector(".inputClick")

var SpeSel = document.createElement("select")
SpeSel.onchange = function(e) {SortSpecies(e,this)}
Fom.appendChild(SpeSel)
var GenSel = document.createElement("select")
GenSel.onchange = function(e) {SortSpecies(e,this)}
Fom.appendChild(GenSel)
var AlSel = document.createElement("select")
AlSel.onchange = function(e) {SortSpecies(e,this)}
Fom.appendChild(AlSel)
var FroSel = document.createElement("select")
FroSel.onchange = function(e) {SortSpecies(e,this)}
Fom.appendChild(FroSel)
var LvSel = document.createElement("select")
LvSel.onchange = function(e) {SortSpecies(e,this)}
Fom.appendChild(LvSel)

InputCreator("number","inputPage","Per page","Per page. The value must be between 1 and 1000.",50)
var PageInp = document.querySelector(".inputPage")

Tabl.parentNode.insertBefore(pagenumcontReserved,Tabl.nextElementSibling)

//★ Creating Options!

var SpeTab = table.map(function(you){return you[5]})
var lol = new Set(SpeTab)
SpeTab = Array.from(lol).sort()
lol = SpeTab.length

var Optt = document.createElement("option")
Optt.value=""
Optt.text="!!Any Species"
SpeSel.add(Optt)

for (i=0;i<lol;i++){
Optt = document.createElement("option")
Optt.value=SpeTab[i]
Optt.text=SpeTab[i]
SpeSel.add(Optt)
}

function Opter(g1,g2,sel){
var Gen1 = g1
var Gen2 = g2
lol = g1.length
for (i=0;i<lol;i++){
Optt = document.createElement("option")
Optt.value=Gen2[i]
Optt.text=Gen1[i]
sel.add(Optt)
}
}

Opter(["Any gender","Female","Male"],["n","f","m"],GenSel)
Opter(["Any alt","Anomaly","Non-anomaly"],["n","t","f"],AlSel)
Opter(["Any status","Frozen","Unfrozen"],["n","yes","no"],FroSel)
Opter(["Any lv",0,1,2,3],["n",0,1,2,3],LvSel)

//★ Search Engine!
function SortSpecies(e,self) {
    var temp = "";one = []
for(i=0;i<li;i++){
var rower = table[i]
var repe = SpeSel.options[SpeSel.selectedIndex].value
var Species = repe ? rower[5] == repe : true
repe = Inp.value
var Name = repe ? RegExp(repe,"i").exec(rower[2]) : true
repe = AlSel.options[AlSel.selectedIndex].value
var Albino = repe == "n" ? true : albino.indexOf(rower[1].match(/[^\/]+$/)[0])
Albino = Albino == -1 && repe == "f" ? true : Albino !== -1 && repe == "f" ? Albino = -1 : Albino

repe = GenSel.options[GenSel.selectedIndex].value
var Sex = repe == "n" ? true : rower[3] == repe
repe = FroSel.options[FroSel.selectedIndex].value
var Frozen = repe == "n" ? true : rower[4] == repe
repe = LvSel.options[LvSel.selectedIndex].value
var Level = repe == "n" ? true : rower[6] == repe

repe = ClickInp.value
var ClickRange = RegExp(/(\d+)-(\d+)/).exec(ClickInp.value)
var CR1 = ClickRange ? Number(ClickRange[1]) : null
var CR2 = ClickRange ? Number(ClickRange[2]) : null
var Clicks = repe == "" ? true : ClickRange == null ? Number(repe) == rower[7] : (CR1>=rower[7] && rower[7]>=CR2)||(CR2>=rower[7] && rower[7]>=CR1)
if(Species == true && Name !== null && Albino !== -1 && Sex == true && Frozen == true && Level == true && Clicks == true){
    one.push(rower)
}//else{console.log(`Species: ${Species}/Name: ${Name}/Albino: ${Albino}/Sex: ${Sex}/Frozen: ${Frozen}/Level: ${Level}/Clicks: ${Clicks}`)}
}
lol = one.length
!(PageInp.value > 0 && 1001 > PageInp.value) ? PageInp.value = 50 : null
perpage = PageInp.value
pages = Math.ceil(lol/perpage)
PageSet(one,"",self)
}

//★ Copypa!
function Copy(u,value){
var textArea = document.createElement("textarea")
textArea.value = value
u.appendChild(textArea)
textArea.select()
document.execCommand('copy')
u.removeChild(textArea)
alert("Copied!")
}

//☆ Text Area!
var fade = document.createElement("div")
fade.id="fadeiiin"
fade.addEventListener("click", CloseIT)
document.body.appendChild(fade)

function CloseIT() {
fade.style.display = "none"
whitearea.value=""
}

var whiter = document.createElement("div")
whiter.className="hereur"
whiter.onclick = function(e){e.stopPropagation()}
fade.appendChild(whiter)

var whitearea = document.createElement("textarea")
whitearea.onclick = function(e){e.stopPropagation()}

var copybutton = document.createElement("button")
copybutton.type = "submit"
copybutton.innerText= "Copy Codes"
copybutton.addEventListener("click", function(e){e.preventDefault();Copy(this,whitearea.value)})

//★ Various Window Event Listerners for better things!
window.onkeydown = function(e){if(e.key== "Escape"){CloseIT()}}

Conta = htwo.offsetTop + htwo.offsetHeight

function Windocheck() {
var Wing = window.pageYOffset
Conta = htwo.offsetTop + htwo.offsetHeight
if (Conta < Wing) {Tabl.parentNode.insertBefore(Fom,Tabl.nextElementSibling);Tabl.parentNode.insertBefore(pagenumcontReserved,Tabl)}
else {Tabl.parentNode.insertBefore(pagenumcontReserved,Tabl.nextElementSibling);Tabl.parentNode.insertBefore(Fom,Tabl)}
}

window.onwheel = function() {Windocheck()}

window.onresize = function() {Windocheck()}
} //if row end
