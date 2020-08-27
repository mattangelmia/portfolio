window.addEventListener('load', sound)
let sounds = document.querySelectorAll('.sound')
let pads = document.querySelectorAll('.pads div')
function sound(){
    
    
   
   
    

    pads.forEach((pad, index) => {
        pad.onclick= function (e){play(index,e)} 

    })
}

function play(index,e){
    console.log(e.target)
    sounds[index].currentTime=0;
    sounds[index].play();
    pads[index].onclick= function (e){stop(index,e)} 
}

    function stop(index,e){

        sounds[index].pause();
        sounds[index].currentTime=0;
        pads[index].onclick= function (e){play(index,e)} 

    }