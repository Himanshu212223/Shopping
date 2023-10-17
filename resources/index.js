let hamburger = document.getElementById("hamburger");

if(hamburger){
    hamburger.addEventListener('click', function(){
        let navigation = document.getElementById("navigation");
        navigation.classList.remove('hidden');
    });
}


let xmark = document.getElementById("xmark");
if(xmark){
    xmark.addEventListener('click', function(){
        let navigation = document.getElementById("navigation");
        navigation.classList.add('hidden');
    })
}