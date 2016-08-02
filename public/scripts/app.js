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

    /* TODO: Make your two function calls above reflect the same structure as this one. -jc */
    $('#skatespot').on('click', '.delete-skatespot', deleteSkateSpotAlbumClick);
});

/* TODO: This code doesn't need to be extracted. You can keep this ajax call as it is. -jc */
function renderAllSpots() {
    $.get('/api/skatespots', onSuccess);
}

function renderSkatespot(skatespot) {
    var skatespotHtml = $('#spots').html();
    var skatespotTemplate = Handlebars.compile(skatespotHtml);
    var html = skatespotTemplate(skatespot);
    $('#skatespot').prepend(html);
}

/* TODO: remove unused code in production versions -jc */
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

/* TODO: Extracting long code is a great step in making your code readable. Consider only
extracting your callback function instead of your enter event handler.  Maybe something
like this:
  $('.create-spot-form form').on("submit", formSubmit);
  This allows developers to see the cause & effect of your code while still keeping it short.
  - jc*/
function formSubmit() {
    $('.create-spot-form form').on("submit", function(e) {
        e.preventDefault();
        /* TODO: Please keep debugging code out of production versions of your project -jc */
        console.log("is this button firing");
        var formData = $(this).serialize();
        /* TODO: Please keep debugging code out of production versions of your project -jc */
        console.log(formData);
        $.post('/api/skatespots', formData, function(skatespotdata) {
            /* TODO: Please keep debugging code out of production versions of your project -jc */
            console.log("created new skatespot", skatespotdata);
            renderSkatespot(skatespotdata);
            $('.create-spot-form form').trigger("reset");
        });
    });
}
/* TODO: See line 51 -jc */
function cityformSubmit() {
    $('.create-city-form form').on("submit", function(e) {
        e.preventDefault();
        /* TODO: Please keep debugging code out of production versions of your project -jc */
        console.log("is this button firing");
        var formData = $(this).serialize();
        /* TODO: Please keep debugging code out of production versions of your project -jc */
        console.log(formData);
        $.post('/api/cities', formData, function(citydata) {
            /* TODO: Please keep debugging code out of production versions of your project -jc */
            console.log("created new city", citydata);
            renderSkatespot(citydata);
            $('.create-city-form form').trigger("reset");
        });
    });
}

function deleteSkateSpotAlbumClick(e) {
    var skatespotId = $(this).attr('data-id');
    /* TODO: Please keep debugging code out of production versions of your project -jc */
    console.log(skatespotId);
    console.log('someone wants to delete album id=' + skatespotId);
    $.ajax({
        method: 'DELETE',
        url: ('/api/skatespots/' + skatespotId),
        success: function() {
            /* TODO: Please keep debugging code out of production versions of your project -jc */
            console.log('[data-id=' + skatespotId + ']');
            $('[data-id=' + skatespotId + ']').remove();
        }
    });
}
