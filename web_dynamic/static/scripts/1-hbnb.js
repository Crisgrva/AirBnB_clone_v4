let amenities = [];
function ToArray (amenities) { // storing first all amenities
  $('.amenities H4').text(amenities.join(', ')); // taking h4 text contents into list
}

function checkbox () {
  $('.amenities input').on(); // this is useful to check on checkboxes
}

$(document).ready(checkbox);
