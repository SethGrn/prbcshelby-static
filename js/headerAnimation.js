$(document).on('scroll', function (){
    if ($(this).scrollTop() > 40) {
        $('header').addClass('header-solid')
    }
    
    if ($(this).scrollTop() < 20) {
        $('header').removeClass('header-solid')
    }
})