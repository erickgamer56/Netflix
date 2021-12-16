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
    setTimeout(() => {
        if (localStorage.i1){
            document.getElementById("box").style.backgroundImage="url('img/n1.jpg')"
            document.getElementById("addbox2").style.backgroundImage="url('img/n1.jpg')"
            document.getElementById("pegaid").style.backgroundImage="url('img/n1.jpg')"
            document.getElementById("profi").src = "img/n1.jpg"
        }
        if (localStorage.i2){
            document.getElementById("box").style.backgroundImage="url('img/n2.jpg')"
            document.getElementById("addbox2").style.backgroundImage="url('img/n2.jpg')"
            document.getElementById("pegaid").style.backgroundImage="url('img/n2.jpg')"
            document.getElementById("profi").src = "img/n2.jpg"
        }
        if (localStorage.i3){
            document.getElementById("box").style.backgroundImage="url('img/n3.jpg')"
            document.getElementById("addbox2").style.backgroundImage="url('img/n3.jpg')"
            document.getElementById("pegaid").style.backgroundImage="url('img/n3.jpg')"
            document.getElementById("profi").src = "img/n3.jpg"
        }
        if (localStorage.i4){
            document.getElementById("box").style.backgroundImage="url('img/n4.png')"
            document.getElementById("addbox2").style.backgroundImage="url('img/n4.png')"
            document.getElementById("pegaid").style.backgroundImage="url('img/n4.png')"
            document.getElementById("profi").src = "img/n4.png"
        }
        if (localStorage.i0){
            document.getElementById("box").style.backgroundImage="url("+ localStorage.getItem("i5") +")"
            document.getElementById("addbox2").style.backgroundImage="url("+ localStorage.getItem("i5") +")"
            document.getElementById("pegaid").style.backgroundImage="url("+ localStorage.getItem("i5") +")"
            document.getElementById("profi").src = localStorage.getItem("i5")
        }
        if (localStorage.i5){
            document.getElementById("box").style.backgroundImage="url('img/n5.jpg')"
            document.getElementById("addbox2").style.backgroundImage="url('img/n5.jpg')"
            document.getElementById("pegaid").style.backgroundImage="url('img/n5.jpg')"
            document.getElementById("profi").src = "img/n5.jpg"
        }
        if (localStorage.i6){
            document.getElementById("box").style.backgroundImage="url('img/n6.jpg')"
            document.getElementById("addbox2").style.backgroundImage="url('img/n6.jpg')"
            document.getElementById("pegaid").style.backgroundImage="url('img/n6.jpg')"
            document.getElementById("profi").src = "img/n6.jpg"
        }
    }, 1000);
})
document.getElementById("add").addEventListener("click",function(){
    document.getElementById("addnm").style.display="block"
})
document.getElementById("fecha").addEventListener("click",function(){
    document.getElementById("addnm").style.display="none"
    document.getElementById("inp").value =""
})
document.getElementById("fecha2").addEventListener("click",function(){
    document.getElementById("persona").style.width="20px"
    document.getElementById("persona").style.height="20px"
    setTimeout(() => {
        document.getElementById("persona").style.display="none"
    }, 500);
})
document.getElementById("btn5").addEventListener("click",function(){
    document.getElementById("persona").style.width="20px"
    document.getElementById("persona").style.height="20px"
    setTimeout(() => {
        document.getElementById("persona").style.display="none"
    }, 500);
})
document.getElementById("abrir").addEventListener("click",function(){
    setTimeout(() => {
        document.getElementById("persona").style.width=""
        document.getElementById("persona").style.height=""
    }, 1);
    document.getElementById("persona").style.display="flex"
})
var cont = 0
setInterval(() => {
    if(cont >= 1){
        cont=0
        document.getElementById("fbtn").style.display="none"
        document.getElementById("fbtn2").style.display="block"
    }
}, 1);
var add  =0
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
        var dem = document.getElementById("dentro")
        var k0 = document.createElement("div")
        k0.setAttribute("class" , "profi")
        var k1 = document.createElement("img")
        k1.setAttribute("id","profi1")
        var k2 = document.createElement("h3")
        k2.setAttribute("id","nome2")
        k2.innerHTML = name
        k1.setAttribute("src",localStorage.getItem("img"))
        dem.appendChild(k0)
        k0.appendChild(k1)
        k0.appendChild(k2)
        allboxadd.addEventListener("click",function(){
            document.getElementById("init").style.display="none"
            document.getElementById("box").style.backgroundImage="url("+sai+")"
            localStorage.setItem("imgp",sai)
            localStorage.setItem("nome3", name)
            document.getElementById("inici").innerHTML="Início -- Netfllix"
            document.getElementById("body").style.overflowY="visible"
            document.getElementById("addbox2").style.backgroundImage="url("+ sai +")"
            document.getElementById("mudar").value = name
            add ++
            k0.style.order="-"+add
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
    addbox.setAttribute("id","pegaid")
    var sai = localStorage.getItem("img")
    addbox.style.backgroundImage="url("+ image +")"
    var color = document.createElement("div")
    color.setAttribute("class", "color")
    color.setAttribute("id","color")
    color.innerHTML=name
    addadd.appendChild(allboxadd)
    allboxadd.appendChild(addbox)
    allboxadd.appendChild(color)
    document.getElementById("sing").style.display="none"
    document.getElementById("logo").style.justifyContent="start"
    var dem = document.getElementById("dentro")
    var k0 = document.createElement("div")
    k0.setAttribute("class" , "profi")
    var k1 = document.createElement("img")
    k1.setAttribute("id","profi")
    var k2 = document.createElement("h3")
    k2.setAttribute("id","nome1")
    k2.innerHTML = name
    k1.setAttribute("src", image)
    dem.appendChild(k0)
    k0.appendChild(k1)
    k0.appendChild(k2)
    var dentro2 = document.getElementById("pho")
    var pho = document.createElement("div")
    pho.setAttribute("class" ,"photo")
    pho.addEventListener("click",function(){
        document.getElementById("box").style.backgroundImage="url("+image+")"
        document.getElementById("addbox2").style.backgroundImage="url("+image+")"
        document.getElementById("pegaid").style.backgroundImage="url("+image+")"
        document.getElementById("profi").src = image
        if (localStorage.i2){
            localStorage.removeItem("i2")
        }
        if (localStorage.i3){
            localStorage.removeItem("i3")
        }
        if (localStorage.i1){
            localStorage.removeItem("i1")
        }
        if (localStorage.i4){
            localStorage.removeItem("i4")
        }
        if (localStorage.i5){
            localStorage.removeItem("i5")
        }
    })
    dentro2.appendChild(pho)
    pho.style.backgroundImage="url("+ image +")"
    document.getElementById("box").style.backgroundImage="url("+ image+")"
    document.getElementById("addbox2").style.backgroundImage="url("+ image +")"
    document.getElementById("mudar").value = name
    allboxadd.addEventListener("click",function(){
        document.getElementById("init").style.display="none"
        localStorage.setItem("image",image)
        localStorage.setItem("nome2", name)
        document.getElementById("inici").innerHTML="Início -- Netfllix"
        document.getElementById("body").style.overflowY="visible"
        add ++
        k0.style.order="-"+add
    })
    document.getElementById("p1").addEventListener("click",function(){
        document.getElementById("box").style.backgroundImage="url('img/n1.jpg')"
        document.getElementById("addbox2").style.backgroundImage="url('img/n1.jpg')"
        document.getElementById("pegaid").style.backgroundImage="url('img/n1.jpg')"
        document.getElementById("profi").src = "img/n1.jpg"
        localStorage.setItem("i1" , "img/n1.jpg")
        if (localStorage.i2){
            localStorage.removeItem("i2")
        }
        if (localStorage.i3){
            localStorage.removeItem("i3")
        }
        if (localStorage.i4){
            localStorage.removeItem("i4")
        }
        if (localStorage.i0){
            localStorage.removeItem("i5")
        }
        if (localStorage.i5){
            localStorage.removeItem("i5")
        }
        if (localStorage.i6){
            localStorage.removeItem("i6")
        }
    })
    document.getElementById("p2").addEventListener("click",function(){
        document.getElementById("box").style.backgroundImage="url('img/n2.jpg')"
        document.getElementById("addbox2").style.backgroundImage="url('img/n2.jpg')"
        document.getElementById("pegaid").style.backgroundImage="url('img/n2.jpg')"
        document.getElementById("profi").src = "img/n2.jpg"
        localStorage.setItem("i2" , "img/n2.jpg")
        if (localStorage.i1){
            localStorage.removeItem("i1")
        }
        if (localStorage.i3){
            localStorage.removeItem("i3")
        }
        if (localStorage.i4){
            localStorage.removeItem("i4")
        }
        if (localStorage.i0){
            localStorage.removeItem("i5")
        }
        if (localStorage.i5){
            localStorage.removeItem("i5")
        }
        if (localStorage.i6){
            localStorage.removeItem("i6")
        }
    })
    document.getElementById("p3").addEventListener("click",function(){
        document.getElementById("box").style.backgroundImage="url('img/n3.jpg')"
        document.getElementById("addbox2").style.backgroundImage="url('img/n3.jpg')"
        document.getElementById("pegaid").style.backgroundImage="url('img/n3.jpg')"
        document.getElementById("profi").src = "img/n3.jpg"
        localStorage.setItem("i3" , "img/n3.jpg")
        if (localStorage.i2){
            localStorage.removeItem("i2")
        }
        if (localStorage.i1){
            localStorage.removeItem("i1")
        }
        if (localStorage.i4){
            localStorage.removeItem("i4")
        }
        if (localStorage.i0){
            localStorage.removeItem("i5")
        }
        if (localStorage.i5){
            localStorage.removeItem("i5")
        }
        if (localStorage.i6){
            localStorage.removeItem("i6")
        }
    })
    document.getElementById("p4").addEventListener("click",function(){
        document.getElementById("box").style.backgroundImage="url('img/n4.png')"
        document.getElementById("addbox2").style.backgroundImage="url('img/n4.png')"
        document.getElementById("pegaid").style.backgroundImage="url('img/n4.png')"
        document.getElementById("profi").src = "img/n4.png"
        localStorage.setItem("i4" , "img/n4.png")
        if (localStorage.i2){
            localStorage.removeItem("i2")
        }
        if (localStorage.i3){
            localStorage.removeItem("i3")
        }
        if (localStorage.i1){
            localStorage.removeItem("i1")
        }
        if (localStorage.i0){
            localStorage.removeItem("i5")
        }
        if (localStorage.i5){
            localStorage.removeItem("i5")
        }
        if (localStorage.i6){
            localStorage.removeItem("i6")
        }
    })
    document.getElementById("p5").addEventListener("click",function(){
        document.getElementById("box").style.backgroundImage="url('img/n5.jpg')"
        document.getElementById("addbox2").style.backgroundImage="url('img/n5.jpg')"
        document.getElementById("pegaid").style.backgroundImage="url('img/n5.jpg')"
        document.getElementById("profi").src = "img/n5.jpg"
        localStorage.setItem("i5" , "img/n5.jpg")
        if (localStorage.i2){
            localStorage.removeItem("i2")
        }
        if (localStorage.i3){
            localStorage.removeItem("i3")
        }
        if (localStorage.i1){
            localStorage.removeItem("i1")
        }
        if (localStorage.i0){
            localStorage.removeItem("i5")
        }
        if (localStorage.i6){
            localStorage.removeItem("i6")
        }
    })
    document.getElementById("p6").addEventListener("click",function(){
        document.getElementById("box").style.backgroundImage="url('img/n6.jpg')"
        document.getElementById("addbox2").style.backgroundImage="url('img/n6.jpg')"
        document.getElementById("pegaid").style.backgroundImage="url('img/n6.jpg')"
        document.getElementById("profi").src = "img/n6.jpg"
        localStorage.setItem("i6" , "img/n5.jpg")
        if (localStorage.i2){
            localStorage.removeItem("i2")
        }
        if (localStorage.i3){
            localStorage.removeItem("i3")
        }
        if (localStorage.i1){
            localStorage.removeItem("i1")
        }
        if (localStorage.i0){
            localStorage.removeItem("i5")
        }
        if (localStorage.i5){
            localStorage.removeItem("i5")
        }
    })
    document.getElementById("file2").addEventListener("change",function(event){
        var image = URL.createObjectURL(event.target.files[0]);
        document.getElementById("box").style.backgroundImage="url("+image+")"
        document.getElementById("addbox2").style.backgroundImage="url("+image+")"
        document.getElementById("pegaid").style.backgroundImage="url("+image+")"
        document.getElementById("profi").src = image
        localStorage.setItem("i0" , image)
        if (localStorage.i2){
            localStorage.removeItem("i2")
        }
        if (localStorage.i3){
            localStorage.removeItem("i3")
        }
        if (localStorage.i1){
            localStorage.removeItem("i1")
        }
        if (localStorage.i4){
            localStorage.removeItem("i4")
        }
         if (localStorage.i5){
            localStorage.removeItem("i5")
        }
        if (localStorage.i6){
            localStorage.removeItem("i6")
        }
    })
    document.getElementById("mudar").addEventListener("input",function(){
        var n1 = ""
        n1 = document.getElementById("mudar").value
        document.getElementById("color").innerHTML = n1
        document.getElementById("nome1").innerHTML = n1
    })
}
document.getElementById("sair").addEventListener("click",function(){
    setTimeout(() => {
            window.location.href="index.html"
    }, 500);

})
document.getElementById("conta").addEventListener("click",function(){
    document.getElementById("init").style.display="flex"
    document.getElementById("inici").innerHTML="Netflix"
    document.getElementById("body").style.overflowY="hidden"
    document.getElementById("persona").style.display="none"
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
window.addEventListener("scroll",function(){
    if (document.documentElement.scrollTop >= 100){
        document.getElementById("menu").style.backgroundColor="rgba(0, 0, 0, 0.555)"
    }else{
        document.getElementById("menu").style.backgroundColor=""
    }
})