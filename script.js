document.querySelector(".passive").addEventListener('click', function () {
    document.querySelector(".passive").style="opacity: 0";
    document.querySelector(".active").style="opacity: 1";
    document.querySelector('.menu').classList.add('active2');
});
document.querySelector(".active").addEventListener('click', function () {
    document.querySelector(".active").style="opacity: 0";
    document.querySelector(".passive").style="opacity: 1";
    document.querySelector('.menu').classList.remove('active2');
});

document.querySelector(".basket1").addEventListener('click', function () {
    document.querySelector(".heel").style="opacity: 1";
    document.querySelector(".basket1").style="display: none";
    document.querySelector(".basket2").style="display: block";
});


document.querySelector(".basket2").addEventListener('click', function () {

    document.querySelector(".heel").style="opacity: 0";
    document.querySelector(".basket1").style="display: block";
    document.querySelector(".basket2").style="display: none";
});


document.querySelector(".all_tools").addEventListener('click', function(e){

    const image = document.createElement('img');
    image.src  = e.target.src;
    document.querySelector('.tools').appendChild(image);
    image.style.width= "500px";
    image.style.height = "500px";
    image.style.position = "absolute";
    image.style.top = "73px";
    image.style.marginLeft = "127px"

});






let availabilityOfBasket = document.querySelector(".availability_of_product");

let availabilityOfNum = document.querySelector(".availability_of_num");

document.querySelector(".in_basket").addEventListener('click', function () {

    let price = document.querySelector(".new_price").textContent;
    let splitedPrice = price.split("₴")[0];
    console.log(splitedPrice);
    // availabilityOfNum.innerHTML = (price)


    let article = document.querySelector(".articul").textContent;


    let getingCart = JSON.parse(localStorage.getItem("cart"));

    let product = {price:splitedPrice, article};

if (!getingCart) {
    const cart = [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart))
} else {
    let getingCart = JSON.parse(localStorage.getItem("cart"));
    let newCart = [...getingCart, product];
    localStorage.setItem("cart", JSON.stringify(newCart))
}


  /*  let num_of_product = newCart.length*/
    let basket = JSON.parse(localStorage.getItem("cart"));
    availabilityOfBasket.textContent = basket.length;

    let sumAll = basket.reduce((accumulatar, item)=> {
        let editPrice = item.price.split(' ').join('');
       return accumulatar + +editPrice
    },0);
    console.log(sumAll);

    availabilityOfNum.textContent = sumAll
});





