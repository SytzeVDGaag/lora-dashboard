function getData() {
    document.getElementById("classroomcontainer").innerHTML="";
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
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        if (Http.readyState == 4 && Http.status == 200) {
            var data = JSON.parse(Http.responseText);
            console.log(Http.responseText);
            for (var i = 0; i < data.nodes.length; i++) {
                createElement(data.nodes[i]);
            }
        }
    }
}

function createElement(data){
    var roomcontainer = document.createElement("a",);
    roomcontainer.classList.add("roomstats");
    roomcontainer.setAttribute("href", "classroomINT.html")
    roomcontainer.innerHTML = "<div class='classroom'><h2>1.016</h2></div><div class='stat'><img src='img/tempIMG.png' alt='thermometer'><h3>" + data.temperature + "&deg;C</h3></div><div class='stat'><img src='img/humidIMG.png' alt='waterdrop'><h3>" + data.humidity + "%</h3></div>";
    var block = document.getElementById("classroomcontainer");
    block.appendChild(roomcontainer);
}


