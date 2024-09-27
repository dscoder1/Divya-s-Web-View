let head=document.querySelector("#Head")
let searchbox=document.querySelector("#Searchbox")
let Search=document.querySelector("#Sear")
let inner=document.querySelector(".Inner")
let val=searchbox.value
const getdata1= async() =>{ 
    inner.innerHTML=" "
        let fetchdata= await fetch(`https://ipinfo.io/${searchbox.value}/geo`)
        let jsondata= await fetchdata.json()
        console.log(jsondata)
if(jsondata["status"]!=404){
        let City=document.createElement("p")
        City.innerHTML="CITY:  "+jsondata["city"]
        City.classList.add("para")

        let Country=document.createElement("p")
        Country.innerHTML="COUNTRY:  "+jsondata["country"]
        Country.classList.add("para")

        let Ip=document.createElement("p")
        Ip.innerHTML="IP:  "+jsondata["ip"]
        Ip.classList.add("para")

        let Loc=document.createElement("p")
        Loc.innerHTML="LOC:  "+jsondata["loc"]
        Loc.classList.add("para")

        let Org=document.createElement("p")
        Org.innerHTML="ORGANIZATION:  "+jsondata["org"]
        Org.classList.add("para")

        let Pin=document.createElement("p")
        Pin.innerHTML="PIN:  "+jsondata["postal"]
        Pin.classList.add("para")

        let Region=document.createElement("p")
        Region.innerHTML="REGION:  "+jsondata["region"]
        Region.classList.add("para")

        let Timezone=document.createElement("p")
        Timezone.innerHTML="TIMEZONE:  "+jsondata["timezone"]
        Timezone.classList.add("para")

        inner.appendChild(City)
        inner.appendChild(Country)
        inner.appendChild(Ip)
        inner.appendChild(Loc)
        inner.appendChild(Org)
        inner.appendChild(Pin)
        inner.appendChild(Region)
        inner.appendChild(Timezone)
}
else{
    let Error=document.createElement("p")
    Error.innerHTML="Wrong IP Address"
    Error.classList.add("err")
    inner.appendChild(Error)
}
}
Search.addEventListener("click",getdata1)

