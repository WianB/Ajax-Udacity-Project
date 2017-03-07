
function loadData() {

    //Basic variables
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    //Street and city
    var $street = $('#street').val();
    var $city = $('#city').val();

    //Address
    var $address = $street +", " + $city;




    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");  
    $('.map-container').empty();


    // load streetview
    var $maps = '<img class="streetMap" src="https://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + $address + '&key=AIzaSyDyjRB2_Z7x6jPCqd7NF1roXJmAHwbl5ms" alt="Street-view" >';

    console.log($maps);
    $('.map-container').append($maps);

    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
