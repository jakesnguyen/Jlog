function toPage2() {
    document.getElementById("page1button").style.border = " 0px";
    document.getElementById("page2button").style.border = "1px solid black";
    document.getElementById("page1").style.display = " none";
    document.getElementById("page2").style.display = " block";
}

function toPage1() {
    document.getElementById("page1button").style.border = "1px solid black";
    document.getElementById("page2button").style.border = "0px";
    document.getElementById("page2").style.display = " none";
    document.getElementById("page1").style.display = " block";
}