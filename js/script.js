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
    var $address = $street + ", " + $city;




    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
    $('#nytimes-header').text('');
    $('.map-container').empty();


    // load streetview
    var $maps = '<img class="streetMap" src="https://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + $address + '&key=AIzaSyDyjRB2_Z7x6jPCqd7NF1roXJmAHwbl5ms" alt="Street-view" >';

    //Append map
    $('.map-container').append($maps);
    // YOUR CODE GOES HERE!


    //JSON Handling for NY times
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "db541749560b4ae286c3a3e09ebe59d6",
        'q': $address,
        'begin_date': "20170101",
        'sort': "newest"
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        console.log(result);
    }).fail(function(err) {
        throw err;
    });

    console.log(url);



    $.getJSON(url, function(data) {
        //Main array variable of articles
        var articles = data.response.docs;
        for(var i = 0; i < articles.length; i++) {
            console.log(i + ": "+ articles[i]);


            //Variable for printing
            var tempAppend =
                '<li class="article">'
                + '<a href="'+articles[i].web_url +'">' +articles[i].headline.main+'</a>'
                + '<p>' + articles[i].snippet +'</p>'

                +'</li>';
            //Append the container with the new list item
            $('.nytimes-container').children('#nytimes-articles').append(tempAppend);
        }



    })
    //Handle error
    .error(function(e) {
            $('#nytimes-header').text('New York times articles cannot be loaded');
    });


    //Wikipedia API Handling
    










    return false;
};

$('#form-container').submit(loadData);
