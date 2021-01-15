function changeTheme() {
    if (document.body.style.color==="seashell"){
        document.body.style.color= "black";
        document.body.style.backgroundColor="seashell";
        document.body.querySelector(".li1").style.color="black";
        document.body.querySelector(".li2").style.color="black";
        document.body.querySelector(".li3").style.color="black";
        document.body.querySelector(".li4").style.color="black";
    } else {
        document.body.style.color = "seashell";
        document.body.style.backgroundColor="#171717";
        document.body.querySelector("li1").style.color="seashell";
        document.body.querySelector("li2").style.color="seashell";
        document.body.querySelector("li3").style.color="seashell";
        document.body.querySelector("li4").style.color="seashell";
    }
    
}

document.getElementById("theme").onclick= changeTheme;
