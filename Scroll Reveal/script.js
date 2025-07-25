// SCROLL REVEAL

// Primeiro iremos resetar o JS
window.revelar = ScrollReveal({reset:true});


// Home 
revelar.reveal('.efeito-h1', {
    duration: 2000, 
    distance: '90px'
});

revelar.reveal('.efeito-txt-home', {
    duration: 3000, 
    distance: '90px'

});

revelar.reveal('.efeito-img-home', {
    duration: 2000, 
    distance: '90px',
    delay: 500
});

// About
revelar.reveal('.efeito-title-about', {
    duration: 2000, 
    distance: '90px',
    origin: 'right'
});


revelar.reveal('.efeito-txt-about', {
    duration: 2000, 
    distance: '90px',
    delay: 1000,
    origin: 'left'
});


// Boxs

revelar.reveal('.efeito-box-1', {
    duration: 2000, 
    distance: '90px',
    delay: 500,
    origin: 'left'
});

revelar.reveal('.efeito-box-2', {
    duration: 2000, 
    distance: '90px',
    delay: 1000,
    origin: 'bottom'

});

revelar.reveal('.efeito-box-3', {
    duration: 2000, 
    distance: '90px',
    delay: 1500,
    origin: 'right'

});


