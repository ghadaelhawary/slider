/*icons*/
const closeBtn = document.querySelector('#close');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let imgs = document.querySelectorAll('.item img');
let popUpDiv = document.querySelector('.popUpDiv')
let bgChange = document.querySelector('.bgChange')

let nextSrc = 0;

for(let i=0; i<imgs.length ; i++ ){
    imgs[i].addEventListener('click', function(e){
       
       display(e) 
       nextSrc = i; 
    })
   
}

closeBtn.addEventListener('click',function(){
    popUpDiv.style.display = 'none';
})

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide)

document.addEventListener('keydown',function(e){
//    console.log(e.key);
   if(e.key == 'ArrowRight'){
    nextSlide();
   }
   else if(e.key == 'ArrowLeft'){
    prevSlide();
   }
})

function display(e){
    popUpDiv.style.display = 'flex';
    let src = e.target.getAttribute('src')
    bgChange.style.backgroundImage = `url(${src})`
}

function nextSlide(){
    nextSrc++; 
    if(nextSrc == imgs.length){
        nextSrc = 0;
    }
    bgChange.style.backgroundImage = `url(${imgs[nextSrc].src})`;
}

function prevSlide(){
    nextSrc--; 
    if(nextSrc < 0){
        nextSrc = imgs.length-1;
    }
    bgChange.style.backgroundImage = `url(${imgs[nextSrc].src})`;
}