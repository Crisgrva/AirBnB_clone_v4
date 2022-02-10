let amenities = [];
function ToArray (amenities) { // wrong this is to take the list im creating below
  $('.amenities H4').text(amenities.join(', ')); // taking h4 text contents into list
}  // this function turnsthe list to an array

function checkbox () {
  $('.amenities input').on('change', function () {
    let checker = $(this)[0].checked; // take the element to see if it is checked
    if (checker == 'true') {
      amenities.push($(this).data('name')) // storing value
    }
    ToArray(amenities) // sending to convert list to array
  });
}

$(document).ready(checkbox);
