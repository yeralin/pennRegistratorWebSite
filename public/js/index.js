$(window).load(function() {
    NProgress.done();
});


$(document).ready(function() {
    // Start midnight
    $(document).ready(function(){
      // Change this to the correct selector.
      $('nav.fixed').midnight();
    });


    NProgress.start();
});