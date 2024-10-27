
const nav = document.getElementById('navBar')

window.addEventListener ('scroll', (e)=> {
    if (window.scrollY >= 20 ) {
        nav.classList.add('show')

    }else{
        nav.classList.remove('show');
    }
});