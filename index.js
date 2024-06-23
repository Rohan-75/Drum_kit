
// document.querySelectorAll("button")[1].addEventListener("click",first_event);
// document.querySelector("button").addEventListener("click",first_event);

// var n=document.querySelectorAll("button").length;


// function first_event(){
//     alert("i have been clicked!")
// }

// function first_event(){
// var audio=new Audio("sounds/crash.mp3");
// audio.play();
// }

// for(var i=0;i<n;i++){
// document.querySelectorAll("button")[i].addEventListener("click",first_event);

// }


var n=document.querySelectorAll(".drum").length;


// function first_event(){
//     alert("i have been clicked!")
// }

// function first_event(){
// var audio=new Audio("sounds/crash.mp3");
// audio.play();
// }


for(var i=0;i<n;i++){
// document.querySelectorAll("button")[i].addEventListener("click",function(){(this.style.color="white")});
document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var innerHTML=this.innerHTML;


    makesound(innerHTML);
    buttonAnimation(innerHTML);

//     switch (innerHTML) {
        
//         case "w":
//             var audio=new Audio("sounds/crash.mp3");
//                 audio.play();
//             break;

//         case "a":
//             var audio=new Audio("sounds/kick-bass.mp3");
//                 audio.play();
//             break;

//         case "s":
//             var audio=new Audio("sounds/snare.mp3");
//                 audio.play();
//             break;

//         case "d":
//             var audio=new Audio("sounds/tom-1.mp3");
//                 audio.play();
//             break;

//         case "j":
//             var audio=new Audio("sounds/tom-2.mp3");
//                 audio.play();
//             break;

//         case "k":
//                 var audio=new Audio("sounds/tom-3.mp3");
//                     audio.play();
//                 break;

//         case "l":
//                     var audio=new Audio("sounds/tom-4.mp3");
//                         audio.play();
//                     break;
    
//         default:
//             console.log("right key isn't pressed")
//             break;
//     }
});

}


// code for finding which key is pressed

document.addEventListener("keydown",function(event){
    // alert("key was pressed")
    // console.log(event.key)
    makesound(event.key);
    buttonAnimation(event.key);
}

);

function makesound(key){

    switch (key) {
        
        case "w":
            var audio=new Audio("sounds/crash.mp3");
                audio.play();
            break;

        case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
            break;

        case "s":
            var audio=new Audio("sounds/snare.mp3");
                audio.play();
            break;

        case "d":
            var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
            break;

        case "j":
            var audio=new Audio("sounds/tom-2.mp3");
                audio.play();
            break;

        case "k":
                var audio=new Audio("sounds/tom-3.mp3");
                    audio.play();
                break;

        case "l":
                    var audio=new Audio("sounds/tom-4.mp3");
                        audio.play();
                    break;
    
        default:
            console.log("right key isn't pressed")
            break;
    }

}

function buttonAnimation(innerHTML){
    
    var applyClass=document.querySelector("."+innerHTML);
    applyClass.classList.add("pressed");

    setTimeout(function(){applyClass.classList.remove("pressed")},100);

};