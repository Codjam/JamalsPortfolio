jQuery(document).ready(function(){

  "use strict"
   $('.slider').ripples({
     dropRadius: 15,
     perturbance: 0.01,

   });

    $(".text").typed({
       strings:["<strong> THINK </strong><strong class='primary'> FREE </strong>","<strong> CODE </strong><strong class='primary'> FREE </strong>"],
        typespeed:0,
        loop:true

    });

   $(window).scroll(function(){

      var top = $(window).scrollTop();
       if(top>=60){
         $("nav").addClass('secondary');
       }

       else
           if($("nav").hasClass('secondary')){
               $("nav").removeClass('secondary');
           }
   });

     $('.work').magnificPopup({
     delegate: 'a', // child items selector, by clicking on it popup will open
     type: 'image',
     gallery: {
     enabled: true
      }

   });

     $("#team-members").owlCarousel({
         items:3,
         autoplay:true,
         smartSpeed:700,
         loop:true,
         autoplayHoverPause:true,
           responsive:{
             0:{

                items:1
             },
            480:{

                items:2
             },

            768:{

                items:3
             }
           }



     });
    $('.counter').counterUp({
               delay: 10,
               time: 4000
           });

     $("a.smooth-scroll").click(function (event) {
       event.preventDefault();

       var section = $(this).attr("href");

       $('html, body').animate({
           scrollTop: $(section).offset().top - -2
       }, 1250, "easeInOutExpo");


   });
    new WOW().init();











   // Email/Form Functional

   console.log("it works");
$(document).ready(function() {
 $('.submit').click(function(event) {
   console.log('Clicked Button');

   var email = $('.email').val()
   var subject = $('.subject').val()
   var message = $('.message').val()
   var statusElm = $('.status')
   statusElm.empty()

   if (email.length > 5 && email.includes('@') && email.includes('.')) {
     statusElm.append('<div>Email is valid</div>')
   } else {
     event.preventDefault()
     statusElm.append('<div>Email is not valid</div>')
   }

   if (subject.length >= 2) {
     statusElm.append('<div>Subject is valid</div>')
   } else {
     event.preventDefault()
     statusElm.append('<div>Subject is not valid</div>')
   }

   if (message.length >= 10) {
     statusElm.append('<div>Message is valid</div>')
   } else {
     event.preventDefault()
     statusElm.append('<div>Message is not valid</div>')

   }
 })
})

















    // $(document).ready(function () {
    //   $('.submit').click(function (event) {
    //     event.preventDefault()
    //     console.log('clicked Button');
    //
    //     var name = $('.name').val()
    //     var email = $('.email').val()
    //     var subject = $('.subject').val()
    //     var message = $('.message').val()
    //     var statusElm = $('.status')
    //     statusElm.empty()
    //
    //     if(name.lenght >= 2 ) {
    //       statusElm.append('<div>Name is valid</div>')
    //     } else {
    //       statusElm.append('<div>Name is not valid</div>')
    //     }
    //
    //     if(email.lenght >= 5 && email.includes('@') && email.includes('.')) {
    //       statusElm.append('<div>Email is valid</div>')
    //     } else {
    //       statusElm.append('<div>Email is not valid</div>')
    //     }
    //
    //     if(subject.lenght >= 20) {
    //       statusElm.append('<div>Subject is valid</div>')
    //     } else {
    //       statusElm.append('<div>Subject is not valid</div>')
    //     }
    //
    //     if(message.lenght >= 250) {
    //       statusElm.append('<div>Message is valid</div>')
    //     } else {
    //       statusElm.append('<div>Message is not valid</div>')
    //     }
    //
    //   })
    // })

});


//Email/Form Functional
