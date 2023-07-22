const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__cross');
      menuItem = document.querySelectorAll('.menu__list'),

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    })
});

const   counters =document.querySelectorAll('.skills__measurement-degree'),
        lines = document.querySelectorAll('.skills__measurement-scale-full');

counters.forEach((item,i)=>{
    lines[i].style.width = item.innerHTML;


});

//smooth scroll

$(document).ready(function(){
    $(window).scroll(function(){
		if($(this).scrollTop()> 1600){
			$('.pageUp').fadeIn();
		}
		else{
			$('.pageUp').fadeOut();
		}
	});
});
  


document.querySelector('.pageUp').onclick = () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    });
}
