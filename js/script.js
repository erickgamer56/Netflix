document.getElementById("file").addEventListener("change",function(event){
    var sai = URL.createObjectURL(event.target.files[0]);
    document.getElementById("addbox").style.backgroundImage="url("+ sai +")"
    localStorage.setItem("img",sai)
})
window.addEventListener("load",function(){
    if (localStorage.img){
        var sai = localStorage.getItem("img")
        document.getElementById("addbox").style.backgroundImage="url("+ sai +")"
    }
    const random = (num) => Math.floor(Math.random() * num)
    var radom = random(4)
    if(radom == 0){
        addbox.style.backgroundImage="url('img/n1.jpg')"
        localStorage.setItem("img", "img/n1.jpg")
        document.getElementById("num").innerHTML = radom
    }
    else if(radom == 1){
        addbox.style.backgroundImage="url('img/n2.jpg')"
        localStorage.setItem("img", "img/n2.jpg")
        document.getElementById("num").innerHTML = radom
    }
    else if(radom == 2){
        addbox.style.backgroundImage="url('img/n3.jpg')"
        localStorage.setItem("img", "img/n3.jpg")
        document.getElementById("num").innerHTML = radom 
    }
    else if(radom == 3){
        addbox.style.backgroundImage="url('img/n4.png')"
        localStorage.setItem("img", "img/n4.png")
        document.getElementById("num").innerHTML = radom 
    }
})
document.getElementById("add").addEventListener("click",function(){
    document.getElementById("addnm").style.display="block"
})
document.getElementById("fecha").addEventListener("click",function(){
    document.getElementById("addnm").style.display="none"
    document.getElementById("inp").value =""
})
var cont = 0
setInterval(() => {
    if(cont >= 1){
        cont=0
        document.getElementById("fbtn").style.display="none"
        document.getElementById("fbtn2").style.display="block"
    }
}, 1);
document.getElementById("fbtn").addEventListener("click",function(){
    var name = ""
    name = document.getElementById("inp").value
    if (name != ""){
        var addadd = document.getElementById("addadd")
        var allboxadd = document.createElement("div")
        allboxadd.setAttribute("class", "allboxadd")
        var addbox = document.createElement("div")
        addbox.setAttribute("class", "addbox")
        var sai = localStorage.getItem("img")
        document.getElementById("addbox").style.backgroundImage="url("+ sai +")"
        if (localStorage.img){
            var sai = localStorage.getItem("img")
            addbox.style.backgroundImage="url("+ sai +")"
        }
        var color = document.createElement("div")
        color.setAttribute("class", "color")
        color.innerHTML=name
        addadd.appendChild(allboxadd)
        allboxadd.appendChild(addbox)
        allboxadd.appendChild(color)
        cont ++
        document.getElementById("addnm").style.display="none"
        document.getElementById("inp").value =""
        allboxadd.addEventListener("click",function(){
            document.getElementById("init").style.display="none"
            document.getElementById("box").style.backgroundImage="url("+sai+")"
            localStorage.setItem("imgp",sai)
            localStorage.setItem("nome3", name)
            document.getElementById("profi").src = sai
            document.getElementById("nome1").innerHTML = name
            document.getElementById("profii").style.display="flex"
            document.getElementById("profi1").src = localStorage.getItem("image")
            document.getElementById("nome2").innerHTML = localStorage.getItem("nome2")
            document.getElementById("inici").innerHTML="Início -- Netfllix"
            document.getElementById("body").style.overflowY="visible"
        })
    }
})
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var id = (profile.getId());
    var name = (profile.getName());
    var image = (profile.getImageUrl());
    var email = (profile.getEmail());
    var addadd = document.getElementById("addadd")
    var allboxadd = document.createElement("div")
    allboxadd.setAttribute("class", "allboxadd")
    var addbox = document.createElement("div")
    addbox.setAttribute("class", "addbox")
    var sai = localStorage.getItem("img")
    addbox.style.backgroundImage="url("+ image +")"
    var color = document.createElement("div")
    color.setAttribute("class", "color")
    color.innerHTML=name
    addadd.appendChild(allboxadd)
    allboxadd.appendChild(addbox)
    allboxadd.appendChild(color)
    document.getElementById("sing").style.display="none"
    allboxadd.addEventListener("click",function(){
        document.getElementById("init").style.display="none"
        document.getElementById("box").style.backgroundImage="url("+ image+")"
        document.getElementById("profi").src = image
        document.getElementById("nome1").innerHTML = name
        localStorage.setItem("image",image)
        localStorage.setItem("nome2", name)
        document.getElementById("profi1").src = localStorage.getItem("imgp")
        document.getElementById("nome2").innerHTML = localStorage.getItem("nome3")
        document.getElementById("inici").innerHTML="Início -- Netfllix"
        document.getElementById("body").style.overflowY="visible"
    })
}
document.getElementById("sair").addEventListener("click",function(){
    window.location.href="index.html"
})
document.getElementById("conta").addEventListener("click",function(){
    document.getElementById("init").style.display="flex"
    document.getElementById("inici").innerHTML="Netflix"
    document.getElementById("body").style.overflowY="hidden"
})
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        localStorage.removeItem("img")
        localStorage.removeItem("imgg")
        localStorage.removeItem("nome3")
        localStorage.removeItem("image")
        localStorage.removeItem("imgn1")
        localStorage.removeItem("nome2")
    });
  }
document.getElementById("a1").addEventListener("click",function(){
    document.getElementById("a1").classList.add("active")
    document.getElementById("a2").classList.remove("active")
    document.getElementById("a3").classList.remove("active")
    document.getElementById("a4").classList.remove("active")
    document.getElementById("a5").classList.remove("active")
})
document.getElementById("a2").addEventListener("click",function(){
    document.getElementById("a2").classList.add("active")
    document.getElementById("a1").classList.remove("active")
    document.getElementById("a3").classList.remove("active")
    document.getElementById("a4").classList.remove("active")
    document.getElementById("a5").classList.remove("active")
})
document.getElementById("a3").addEventListener("click",function(){
    document.getElementById("a3").classList.add("active")
    document.getElementById("a1").classList.remove("active")
    document.getElementById("a2").classList.remove("active")
    document.getElementById("a5").classList.remove("active")
    document.getElementById("a4").classList.remove("active")
})
document.getElementById("a4").addEventListener("click",function(){
    document.getElementById("a4").classList.add("active")
    document.getElementById("a1").classList.remove("active")
    document.getElementById("a3").classList.remove("active")
    document.getElementById("a2").classList.remove("active")
    document.getElementById("a5").classList.remove("active")
})
document.getElementById("a5").addEventListener("click",function(){
    document.getElementById("a5").classList.add("active")
    document.getElementById("a1").classList.remove("active")
    document.getElementById("a3").classList.remove("active")
    document.getElementById("a2").classList.remove("active")
    document.getElementById("a4").classList.remove("active")
})