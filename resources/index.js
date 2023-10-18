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

const items = document.querySelectorAll('.items') ;

items.forEach(function(item){
    item.addEventListener('click', function(){
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
})