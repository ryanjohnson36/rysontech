$(document).ready(function(){
    $('label').click(function(){
        $('.menu').slideToggle('fast');
    });
    $('.mission').click(function(){
        $('p').slideDown('fast');
    });
});

$(window).scroll(function(){
    var yOffset = window.pageYOffset;
    var breakpoint = 100;
    
    if(yOffset > breakpoint){
        $('#top-nav-section').addClass('active')
    } else {
        $('#top-nav-section').removeClass('active')
    }
});


  $("a").on('click', function(event) {

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    } // End if
  });
