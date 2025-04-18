console.log("welcome to javascript")
$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('header').addClass('color-header');
    }
    else {
        $('header').removeClass('color-header');
    }
});
// change src

let countimg = 0;
let toogleBtn = document.querySelector('.navbar-toggler');

toogleBtn.addEventListener('click',()=>{
    if(countimg == 0){
      document.getElementById('changetoggle').src ="./assest/images/Menu-Button-cross.svg";
      countimg = 1
    }
    else{
        document.getElementById('changetoggle').src ="./assest/images/Menu-Button.svg";
        countimg = 0;
    }
})


AOS.init({
    duration: 1200,
})