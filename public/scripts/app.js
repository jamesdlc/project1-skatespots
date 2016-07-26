$(document).ready(function() {
    renderAllSpots();

    formSubmit();

    $.ajax({
      method: 'GET',
      url: '/api/cities',
      data: 'json',
      success: renderCities,
      error: citiesError
    });

    $('#skatespot').on('click', '.delete-skatespot', handleDeleteAlbumClick);

});

function renderAllSpots(){
  $.get('/api/skatespots', onSuccess);
}

function renderSkatespot(skatespot) {
    var skatespotHtml = $('#spots').html();
    var skatespotTemplate = Handlebars.compile(skatespotHtml);
    var html = skatespotTemplate(skatespot);
    $('#skatespot').prepend(html);
}


function citiesError(a, b, c) {
    // console.log(b);
    // console.log(c);
}

function renderCities(cities) {
    var citiesHtml = $('#cities').html();
    var citiesTemplate = Handlebars.compile(citiesHtml);
    var renderedcities = citiesTemplate({
        cities: cities
    });
    $('#city_name').html(renderedcities);
}

function onSuccess(json) {
  console.log(json);
    json.forEach(function(skatespot) {
        renderSkatespot(skatespot);

    });
}

function navBar() {
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

function formSubmit() {
    $('.create-spot-form form').on("submit", function(e) {
        e.preventDefault();
        console.log("is this button firing");
        var formData = $(this).serialize();
        console.log(formData);
        $.post('/api/skatespots', formData, function(skatespotdata) {
            console.log("created new skatespot", skatespotdata);
            renderSkatespot(skatespotdata);
            $('.create-spot-form form').trigger("reset");
        });
    });
}

function handleDeleteAlbumClick(e) {
  var albumId = $(this).attr('data-id');
  console.log(albumId);
  console.log('someone wants to delete album id=' + albumId );
  $.ajax({
    method: 'DELETE',
    url: ('/api/skatespots/' + albumId),
    success: function() {
      console.log('[data-id='+ albumId + ']');
      $('[data-id='+ albumId + ']').remove();
    }
  });
}


function deleteBookError() {
  console.log('deletebook error!');
}
