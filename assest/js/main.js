console.log("welcome to javascript")
$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('header').addClass('color-header');
    }
    else {
        $('header').removeClass('color-header');
    }
});
AOS.init({
    duration: 1200,
})