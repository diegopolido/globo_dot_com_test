// Cosmo
// Bootswatch
//= require jquery
//= require jquery_ujs
//= require cosmo/loader
//= require cosmo/bootswatch

activateArrows = function() {
  $(".seta").removeClass("btn-default");
  $(".seta").addClass("btn-primary");
};

goPrevious = function(){
  if($(".showing").hasClass("first")) {
    return;
  }
  activateArrows();
  var $previous = $(".photo.showing").prev();
  $(".showing").removeClass("showing");
  $previous.addClass("showing");

  if($previous.hasClass("first")) {
    $("#seta-esquerda").removeClass("btn-primary");
    $("#seta-esquerda").addClass("btn-default");
  }
};

goNext = function(){
  if($(".showing").hasClass("last")) {
    return;
  }
  activateArrows();
  var $next = $(".photo.showing").next();
  $(".showing").removeClass("showing");
  $next.addClass("showing");

  if($next.hasClass("last")) {
    $("#seta-direita").removeClass("btn-primary");
    $("#seta-direita").addClass("btn-default");
  }
};

$(document).ready(function(){
  $(".photo.first").addClass("showing");

  $("#seta-esquerda").click(goPrevious);
  $("#seta-direita").click(goNext);
  $(".photo").click(goNext);
});
