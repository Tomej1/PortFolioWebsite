$(function() {

  $("#imgGallery img").click(function(){

    $(this).toggleClass("grow");
    $("imgGallery img").not(this).toggleClass("shrink")
    
  })
  
})(jQuery);
