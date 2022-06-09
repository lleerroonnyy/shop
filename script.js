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

document.querySelector(".all_tools").addEventListener('click', function(e){ // Вешаем обработчик клика на UL, не LI

    const image = document.createElement('img');
    image.src  = e.target.src;
    document.querySelector('.tools').appendChild(image);
    image.style.width= "500px";
    image.style.height = "500px";
    image.style.position = "absolute";
    image.style.top = "73px";
    image.style.marginLeft = "127px"



});


