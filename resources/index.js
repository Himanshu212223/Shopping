// Navigation bar Hambuger

let hamburger = document.getElementById("hamburger");

if (hamburger) {
    hamburger.addEventListener('click', function () {
        let navigation = document.getElementById("navigation");
        navigation.classList.remove('hidden');
    });
}


let xmark = document.getElementById("xmark");
if (xmark) {
    xmark.addEventListener('click', function () {
        let navigation = document.getElementById("navigation");
        navigation.classList.add('hidden');
    })
}


if(localStorage.psCartItem != undefined){
    document.getElementById("cart").classList.add('colorful');
    document.getElementById("carts").classList.add('colorful');
}

//  Navigate to individual Item and add item to cart
const items = document.querySelectorAll('.items') ;
let psCart = [] ;

items.forEach(function(item){
    //  Navigate to individual item screen
    item.children[0].addEventListener('click', function(){
        const selectedItem = {
            imgSrc: item.firstElementChild.src,
            brand: item.children[1].innerText,
            name: item.children[2].innerText,
            price: item.children[4].innerText
        }
        
        localStorage.psSelectedItem = "" ;
        localStorage.psSelectedItem = JSON.stringify(selectedItem);
        window.location = "https://himanshu212223.github.io/shopping-item/";
    })
    
    //  Add to cart Screen
    item.children[5].addEventListener('click', function(){
        const selectedItem = {
            imgSrc: item.firstElementChild.src,
            brand: item.children[1].innerText,
            name: item.children[2].innerText,
            price: item.children[4].innerText,
            quantity: 1,
            size: 'small'
        }
        if(localStorage.psCartItem === undefined){
            localStorage.psCartItem = JSON.stringify(psCart) ;
            document.getElementById("cart").classList.add('colorful');
            document.getElementById("carts").classList.add('colorful');
            // console.log("null")
        }
        else{
            
            document.getElementById("carts").classList.add('colorful');
            document.getElementById("cart").classList.add('colorful');
            psCart = JSON.parse(localStorage.psCartItem) ;
            psCart.push(selectedItem) ;
            localStorage.psCartItem = JSON.stringify(psCart) ;
            // location.reload();
        }
        // console.log(JSON.parse(localStorage.psCartItem));
    });
})