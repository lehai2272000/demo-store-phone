const addressForm = document.querySelector('#address-form');
const formClose = document.querySelector('.form-close');

addressForm.addEventListener("click", function(){
    document.querySelector('.address-form').style.display = "flex";
})

formClose.addEventListener("click", function(){
    document.querySelector('.address-form').style.display = "none";
})

const rightBtn = document.querySelector('.fa-arrow-circle-right');
const leftBtn = document.querySelector('.fa-arrow-circle-left');
const imgNumber = document.querySelectorAll('.slide-content-left img')
let index = 0;
console.log(imgNumber.length)
rightBtn.addEventListener("click", function(){
    index = index+1
    if(index > imgNumber.length-1)
    {
        index = 0;
    }
    document.querySelector('.slide-content-left-top').style.right = index * 100 + "%";
}) 
leftBtn.addEventListener("click", function(){
    index = index-1
    if(index <= 0)
    {
        index = imgNumber.length - 1;
    }
    document.querySelector('.slide-content-left-top').style.right = index * 100 + "%";
}) 