let elList = document.querySelector(".list")
let elInp1 = document.querySelector(".input")
let elUL = document.querySelector(".list_item")
// let elInp2 = document.querySelector(".input")
let elBtn = document.querySelector(".btn")
let Arr = []


elList.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log(elInp1.value);
    let LocalEdd = JSON.parse(window.localStorage.getItem("key"))
    if(LocalEdd){
        Arr = LocalEdd
        Arr.push(elInp1.value)
        window.localStorage.setItem("key",JSON.stringify(Arr))
    }else{
        Arr.push(elInp1.value)
        window.localStorage.setItem("key",JSON.stringify(Arr)) 
    }
    elInp1.value = ""
    added()

})
function added() {
    elUL.innerHTML = ""
    let Me = JSON.parse(window.localStorage.getItem("key"))
    Me && Me.map((e)=>{
        let newLi = document.createElement("li")
        newLi.innerHTML = `<div class="card" style="width:  18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item lii ">${e}</li>       
             
        </ul>
      </div>`
        elUL.appendChild(newLi)
    })
    
}
added()