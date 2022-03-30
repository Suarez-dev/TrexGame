let character = document.getElementById("character");
let block = document.getElementById("block");


function jump(){
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate")
    },500)
}


var checkDead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"))

    if((blockLeft < 20 && blockLeft > 0) && characterTop>130){
        block.style.animation = "none";
        block.style.display = "none";
            alert("you lose!")
        }
   ;
},10)


