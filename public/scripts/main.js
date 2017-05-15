(function() {
    'use strict';

    var SERVER_URL = 'https://new-zealand-atlanta-assn.firebaseio.com/api.json';

    $.ajax({url: SERVER_URL, success: function(result){

        var main = JSON.stringify(result);
        $('#div1').html(main);
    }});


})();

