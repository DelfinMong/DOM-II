// Your code goes here

const link = document.querySelector('.nav');
link.addEventListener('dblclick', (e) => {
    e.target.style.color = 'red';
});


const img = document.querySelector('img');
img.addEventListener( "mouseover", function(){
    img.style.transform = 'scale(1.5, 1.5)';
    img.style.transition = 'all 0.3s'; 
})


const img0 = document.querySelector('img');
img0.addEventListener( "mouseleave", function(){
    img0.style.transform = 'scale(1, 1)';
    img0.style.transition = 'all 0.3s'; 
})

const h2 = document.querySelector('h2');
h2.addEventListener('click', function (){
    h2.style.color = 'blue';
})


const h4 = document.querySelectorAll('h4');
h4.forEach((item) => {item.addEventListener('mouseenter' , function (e)
   {e.target.style.color = 'red'});
    
   })

const h44 = document.querySelectorAll('h4');
h44.forEach((item) => {
    item.addEventListener('mouseout', function (e){
        e.target.style.color = 'black';
    })
})

const imgs = document.querySelectorAll('img');
imgs.forEach((item) => {
    item.addEventListener('dragstart', function(e){
        e.target.style.opacity = .0;
    })
})


const imgs1 = document.querySelectorAll('img');
imgs1.forEach((item) => {
    item.addEventListener('dragend', function(e){
        e.target.style.opacity = '';
    })
})

const btn = document.querySelectorAll('.btn');
btn.forEach((item) => {
    item.addEventListener('mousedown',function(e){
        e.target.style.color= 'red';
    })
})


const h22= document.querySelectorAll('h2');

h22.forEach((item) => {
    item.addEventListener('focus',function(e){
        e.target.style.background = 'pink';
    })
}) 