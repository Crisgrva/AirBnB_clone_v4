const amenities = []; // has to be a constant value
function ToArray (amenities) { // this is to take the list i'm creating below
  $('.amenities H4').text(amenities.join(', ')); // taking h4 text contents into list
}  // this function turns the list to an array

function checkbox () {
  $('.amenities input').on('change', function () {
    const checker = $(this)[0].checked; // take the element to see if it is checked
    if (checker == 'true') {
      amenities.push($(this).data('name')); // storing value
    } else {
      for (let x = 0; x < amenities.length; x++) { //parsing actual list
        if (amenities[x] === $(this).data('name')) { // comparing values
          amenities.splice(x, 1); // if it's on this list it is deleted
        }
      }
    }
    ToArray(amenities); // sending to convert list to array
  });
}

$(document).ready(checkbox);
