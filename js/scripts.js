$(document).ready(function() {
  $("button#enter").click(function(){
    $("#alerting").fadeToggle();
    event.preventDefault();
  });
});
