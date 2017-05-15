(function() {
    'use strict';

    var SERVER_URL = 'https://new-zealand-atlanta-assn.firebaseio.com/api.json';

    //fetch implementation
    function timeToFetch() {
        fetch('https://new-zealand-atlanta-assn.firebaseio.com/api.json').then(function (response) {
            console.log(response);
            return response.json();
        }).then(function (data) {

            var raw = JSON.stringify(data[0].content);
            // Remove Ugly Quotes from beginning and end of doc- TODO: clean up entire HTML from Google Docs
            var main = raw.slice(0, -1).substring(1);

            var app = new Vue({
                el: '#app',
                data: {
                    message: main
                }
            })
            return console.log(main);
        }).catch(function (error) {
            return console.log('error is', error);
        });
    }
    timeToFetch();

})();

