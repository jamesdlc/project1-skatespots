$(document).ready(function() {
    renderAllSpots();

    formSubmit();
    cityformSubmit();

    $.ajax({
      method: 'GET',
      url: '/api/cities',
      data: 'json',
      success: renderCities,
      error: citiesError
    });

    $('#skatespot').on('click', '.delete-skatespot', deleteSkateSpotAlbumClick);
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
  // console.log(json);
    json.forEach(function(skatespot) {
        renderSkatespot(skatespot);
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

function cityformSubmit() {
    $('.create-city-form form').on("submit", function(e) {
        e.preventDefault();
        console.log("is this button firing");
        var formData = $(this).serialize();
        console.log(formData);
        $.post('/api/cities', formData, function(citydata) {
            console.log("created new city", citydata);
            renderSkatespot(citydata);
            $('.create-city-form form').trigger("reset");
        });
    });
}

function deleteSkateSpotAlbumClick(e) {
  var skatespotId = $(this).attr('data-id');
  console.log(skatespotId);
  console.log('someone wants to delete album id=' + skatespotId );
  $.ajax({
    method: 'DELETE',
    url: ('/api/skatespots/' + skatespotId),
    success: function() {
      console.log('[data-id='+ skatespotId + ']');
      $('[data-id='+ skatespotId + ']').remove();
    }
  });
}
