
document.addEventListener("DOMContentLoaded", () =>{
box();
})
 function box(){
    var hire = document.getElementById("choice3");
    hire.addEventListener("change",(ev) =>{
        ev.preventDefault();
        var input = document.createElement("input");
        input.setAttribute("type","text");
        input.setAttribute("placeholder","Hourly pay");
        var br = document.createElement("br");
        var box = document.querySelector(".box").innerHTML = "";
        var box = document.querySelector(".box").appendChild(input);
        var btn = document.querySelector(".box").appendChild(br);
    })
    var comment = document.getElementById("choice1");
    comment.addEventListener("change",() =>{
        var btn = document.querySelector(".box").innerHTML = "";
    })
    var question = document.getElementById("choice2");
    question.addEventListener("change",() =>{
        var btn = document.querySelector(".box").innerHTML = "";
    })
}