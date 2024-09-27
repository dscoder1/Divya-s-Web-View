let Cont=document.querySelector(".Container")
let but=document.querySelector("#Generate")
let fact=document.querySelector("#Fact")
let Inn=document.querySelector(".Inner")
const getdata= async() =>{
Inn.innerHTML=" "
    let fetchdata= await fetch("https://catfact.ninja/fact")
    let jsondata= await fetchdata.json()
    console.log(jsondata)
    let inp=document.createElement("textarea")
    inp.id="textfield"
    inp.innerHTML=jsondata["fact"]
   Inn.appendChild(inp)
    //let para=document.createElement("p")
    /*para.classList.add("para")
    para.innerHTML=jsondata["fact"]*/
}
but.addEventListener("click",getdata)
