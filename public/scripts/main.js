(function() {
    'use strict';

    var SERVER_URL = 'https://new-zealand-atlanta-assn.firebaseio.com/api.json';

    // $.ajax({url: SERVER_URL, success: function(result){
    //     console.log(result);
    //     var main = JSON.stringify(result);
    //
    //     $('#div1').html(main);
    // }});

    function timeToFetch() {
        fetch('https://new-zealand-atlanta-assn.firebaseio.com/api.json').then(function (response) {
            console.log(response);
            return response.json();
        }).then(function (data) {

                var main = JSON.stringify(data);

                $('#div1').html(main);

            return console.log(data);
        }).catch(function (error) {
            return console.log('error is', error);
        });
    }
    timeToFetch();

})();

