// effects
const left = document.querySelector(".left");
const right = document.querySelector(".right");

window.addEventListener("scroll", function(){
    const val1 = -15 + window.scrollY/45;
    const val2 = 15 + window.scrollY/-45;
    left.style.transform = "skewY(" + val1 + "deg)";
    right.style.transform = "skewY(" + val2 + "deg)";
})

//test
document.cookie = "0";
const button = document.querySelectorAll(".test button");

function check(e){
    const points = document.querySelector(".points p");
    const ans = e.target;
    const ans1 = ans.parentNode.className.split(" ");
    const que = document.querySelectorAll("." + ans1[1] + " button");
    if(!ans.value){
        ans.style.background = "#a71900";
        ans.style.borderColor = "#8C1702";
    }else{
        document.cookie++;
        points.innerHTML = document.cookie + "/9";
    }
   

    for(let i = 0; i < que.length; i++){
        que[i].removeEventListener("click", check);
        if(que[i].value){
            que[i].style.background = "#177908";
            que[i].style.borderColor = "#0A3603";
        }
    }
}

for(let i = 0; i < button.length; i++){
    button[i].addEventListener("click", check);
}

//scroll
const buttons = document.querySelectorAll(".buttons button");

function goTo(e){
    const lesson = document.querySelectorAll(".lesson");
    const target = e.target;
    lesson[target.value - 1].scrollIntoView({behavior: "smooth"});
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", goTo);
}

const arrow = document.querySelector(".arrow");
const start = document.querySelector(".buttons");

arrow.addEventListener("click", function(){
    start.scrollIntoView({behavior: "smooth"});
});