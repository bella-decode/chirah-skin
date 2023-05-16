let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    
}
let searchform = document.querySelector('.search-form i');

document.querySelector('#close').onclick = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    
}


const header = document.querySelector('.head');

window.addEventListener('scroll', () => {
    if(scrollY >= 100){
        header.classList.add('bg');
    }
    else{
        header.classList.remove('bg');
    }
   console.log(scroll);
    
});


document.querySelector('#user').onclick = () => {
    section.classList.add('show');  
}