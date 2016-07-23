$(document).ready(function(){

  console.log('app.js loaded!');
  $.get('/api/skatespots', onSuccess);
});

function renderAlbum(skatespot) {
  var skatespotHtml = $('#spots').html();
  var skatespotTemplate = Handlebars.compile(skatespotHtml);
  var html = skatespotTemplate(skatespot);
  $('#skatespot').prepend(html);
}

function onSuccess(json) {
  console.log('FOUND ALL PIECES');
  json.forEach(function(skatespot) {
    renderAlbum(skatespot);
    console.log(skatespot);
  });
}

// $.get('/api/skatespots').success(function(skatespots){
//   console.log(skatespots);
//   skatespots.forEach(function(skatespot){
//     renderAlbum(skatespot);
//   });
// });
