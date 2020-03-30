function getOption() {
    var string = document.getElementById('sort').value;
    getAPIData(string);
}

function getAPIData(sortSetting) {
    /**var request = new XMLHttpRequest();
    
    request.open('GET', url, true);
    request.send();
    request.onload = function () {
        
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].temperature + ' is a ' + data[i].humidity + '.');
        }

    }**/
    
    var Http = new XMLHttpRequest();
        var url = 'https://lora2d.herokuapp.com/getnodes?filter=' + sortSetting;
        Http.open("GET",url);
        Http.send();

        Http.onreadystatechange = (e) => 
        {
            console.log(Http.responseText);
            var data = JSON.stringify(Http.responseText)
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].temperature + ' is a ' + data[i].humidity + '.');
            }
        };
}

