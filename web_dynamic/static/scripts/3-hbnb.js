$(function () {
  function ToArray (amenities) { // this is to take the list i'm creating below
    $('.amenities H4').text(Object.values(amenities).join(', ')); // taking h4 text contents into list
  } // this function turns the list to an array

  function htmlPlace (place, user) {
    const guest = place.max_guest !== 1 ? 'Guests' : 'Guest';
    const bedroom = place.number_rooms !== 1 ? 'Bedrooms' : 'Bedroom';
    const bathroom = place.number_bathrooms !== 1 ? 'Bathrooms' : 'Bathroom';
    console.log(place.name);
    const html = `<article class="place">
    <div class="title_box">
      <h2> ` + place.name + ` </h2>
      <div class="price_by_night">$` + place.price_by_night + `</div>
    </div>
    <div class="information">
      <div class="max_guest">` + place.max_guest + ' ' + guest + `</div>
      <div class="number_rooms">` + place.number_rooms + ' ' + bedroom + `</div>
      <div class="number_bathrooms">` + place.number_bathrooms + ' ' + bathroom + `</div>
    </div>
    <div class="user">
    <b>Owner:</b> ` + user.first_name + ' ' + user.last_name + `
    </div>
    <div class="description">
      ` + place.description + `
    </div>
  </article>`;

    return html;
  }

  const allAmenities = {};
  $('.amenities input').on('change', function () {
    if ($(this).is(':checked')) {
      allAmenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete allAmenities[$(this).attr('data-id')];
    }
    ToArray(allAmenities); // sending to convert list to array
  });

  $.get('http://0.0.0.0:5001/api/v1/status', function (data, status, body) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });

  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    type: 'POST',
    data: JSON.stringify({}),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function (data) {
      for (const place of data) {
        console.log(place.name);
        $.get('http://0.0.0.0:5001/api/v1/users/' + place.user_id, function (user) {
          console.log(place.user_id);
          $('section.places').append(htmlPlace(place, user));
        });
      }
    }
  });
});
