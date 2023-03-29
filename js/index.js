/*icons*/
const closeBtn = document.querySelector('#close');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let imgs = document.querySelectorAll('.item img');
let popUpDiv = document.querySelector('.popUpDiv')
let bgChange = document.querySelector('.bgChange')

for(let i=0; i<imgs.length ; i++ ){
    imgs[i].addEventListener('click', function(e){
       
       display(e) 
         
        
    })
}

function display(e){
    popUpDiv.style.display = 'flex';

    let src = e.target.getAttribute('src');

    bgChange.style.backgroundImage = `url(${src})`
}

closeBtn.addEventListener('click',function(){
    popUpDiv.style.display = 'none';
})