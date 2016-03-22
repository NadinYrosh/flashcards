 $(document).ready(function() {
   $(".card").click(function() {
     $(this).children("p").toggle();
     $(this).siblings().children("p").hide();
   });
 });
