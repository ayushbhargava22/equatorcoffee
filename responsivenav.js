const newslide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.navigation-list')
    
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active')
    }) ;
}
newslide() ;