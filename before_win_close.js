$(document).ready(function() {
  // unbind all links
  $('a').each(function(index) {
    $(this).click(function() {
      $(window).unbind('beforeunload');
    });
  });
});

function before_win_close (msg) {
  $(window).bind("beforeunload", function(e){
    return e.returnValue = msg; 
  });
}