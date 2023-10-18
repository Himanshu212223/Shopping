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

let quantity = document.getElementById('quantity');
if(quantity){
    quantity.addEventListener('click', function(){
        if(quantity.value <= 0){
            quantity.value = 1 ;
        }
    })
}



const data = JSON.parse(localStorage.psSelectedItem);
let image = document.getElementById('image') ;
image.src = data.imgSrc ;
let brand = document.getElementById('brand') ;
brand.innerText = data.brand;
let name = document.getElementById('name') ;
name.innerText = data.name ;
let price = document.getElementById('price') ;
price.innerText = data.price ;