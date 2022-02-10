$(function () {
  function ToArray (amenities) { // this is to take the list i'm creating below
    $('.amenities H4').text(Object.values(amenities).join(', ')); // taking h4 text contents into list
  } // this function turns the list to an array

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
});
