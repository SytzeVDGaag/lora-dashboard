function getOption(){
    var string = document.getElementById('sort').value;
    getAPIData(string);
}

function getAPIData(sortSetting) {
    var request = new XMLHttpRequest();
    var url = 'https://lora2d.herokuapp.com/getnodes?filter=' + sortSetting;

    request.open('GET', url, true);

    request.onload = function () {

        var data = JSON.parse(this.response)
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].temperature + ' is a ' + data[i].humidity + '.');
        }

    }

    request.send();
}