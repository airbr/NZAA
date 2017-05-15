(function() {
    'use strict';

    var SERVER_URL = 'https://new-zealand-atlanta-assn.firebaseio.com/api.json';

    //Fetches from Firebase, selects content from JSON object, cleans up HTML,creates Vue Instance of Google Doc
    function fetchGoogleDoc() {
        fetch('https://new-zealand-atlanta-assn.firebaseio.com/api.json').then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            var raw = JSON.stringify(data[0].content);
            // Remove Ugly Quotes from beginning and end of doc- TODO: clean up entire HTML from Google Docs
            var main = raw.slice(0, -1).slice(1);

            var app = new Vue({
                el: '#app',
                data: {
                    message: main
                }
            })
            return console.log(main);
        })
        .catch(function (error) {
        return console.log('error is', error);
        });
    }
    fetchGoogleDoc();

    // Local Fetch Header Html Partial, target to DOM
    fetch('views/header.html')
        .then(function(response) {
            return response.text();
        })
        .then(function(body) {
            document.querySelector('header').innerHTML = body;
        });
    // Local Fetch Nav Html Partial, target to DOM
    fetch('views/nav.html')
        .then(function(response) {
            return response.text();
        })
        .then(function(body) {
            document.querySelector('nav').innerHTML = body;
        });
    // Local Fetch Aside Html Partial, target to DOM
    fetch('views/aside.html')
        .then(function(response) {
            return response.text();
        })
        .then(function(body) {
            document.querySelector('aside').innerHTML = body;
        });
    // Local Fetch Footer Html Partial, target to DOM
    fetch('views/footer.html')
        .then(function(response) {
            return response.text();
        })
        .then(function(body) {
            document.querySelector('footer').innerHTML = body;
        });

})();

