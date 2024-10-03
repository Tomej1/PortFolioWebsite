$(function() {

  $("#imgGallery img").click(function(){

    $("imgGallery img").not(this).toggleClass("shrink");
    $(this).toggleClass("grow")
    
  })
  
})(jQuery);
