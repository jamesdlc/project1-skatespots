$(document).ready(function(){
  //AJAX
  $.get('/api/skatespots', onSuccess);
  navBar();
});


function renderSkatespot(skatespot) {
  var skatespotHtml = $('#spots').html();
  var skatespotTemplate = Handlebars.compile(skatespotHtml);
  var html = skatespotTemplate(skatespot);
  $('#skatespot').prepend(html);
}

function onSuccess(json) {

  json.forEach(function(skatespot) {
    renderSkatespot(skatespot);
    console.log(skatespot);
  });
}

function navBar(){
  var $button1 = $('.allskatespots');
  var $button2 = $('.addskatespot');
  var $button3 = $('.myskatespot');
  var $button4 = $('.loginregister');

  $button1.click(function() {
    window.location = "http://localhost:3000/api/skatespots";
  });
  $button2.click(function() {
    window.location = "http://localhost:3000/api/skatespots";
  });
  $button3.click(function() {
    window.location = "http://localhost:3000/api/skatespots";
  });
  $button4.click(function() {
    window.location = "http://localhost:3000/api/skatespots";
  });
}
