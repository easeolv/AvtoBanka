function initMap() {

    // кординаты одной карты
    var options = {
        center: {lat: 56.8963, lng:  24.2107},
        zoom: 15,
        disableDefaultUI: false,
    };

    // кординаты 2 карты
    var options2 = {
        center: {lat: 55.8963, lng:  24.2107},
        zoom: 15,
        disableDefaultUI: false,
    };

    // кординаты 3 карты
    var options3 = {
        center: {lat: 57.8963, lng:  24.2107},
        zoom: 15,
        disableDefaultUI: false,
    };

    // инициализация карт
    var map = new google.maps.Map(document.getElementById("map"), options);
    var map2 = new google.maps.Map(document.getElementById("map2"), options2);
    var map3 = new google.maps.Map(document.getElementById("map3"), options3);

    // добавление маркеров на 1 карте
    addMarker({lat: 56.8963, lng: 24.2107});
    addMarker({lat: 56.8960, lng: 24.2110});
    addMarker({lat: 56.8700, lng: 24.2109});
    addMarker({lat: 56.8970, lng: 24.2207});
    addMarker({lat: 56.8965, lng: 24.2100});

    // добавление маркеров на 2 карте
    addMarker2({lat: 55.8963, lng: 24.2107});
    addMarker2({lat: 55.8960, lng: 24.2110});
    addMarker2({lat: 55.8700, lng: 24.2109});
    addMarker2({lat: 55.8970, lng: 24.2207});
    addMarker2({lat: 55.8965, lng: 24.2100});

    // добавление маркеров на 3 карте
    addMarker3({lat: 57.8963, lng: 24.2107});
    addMarker3({lat: 57.8960, lng: 24.2110});
    addMarker3({lat: 57.8700, lng: 24.2109});
    addMarker3({lat: 57.8970, lng: 24.2207});
    addMarker3({lat: 57.8965, lng: 24.2100});

    // ф-ия маркера 1 карты
    function addMarker(coordinates) {
        var marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: 'img/loc.svg'
        });
    }

    // ф-ия маркера 2 карты
    function addMarker2(coordinates2) {
        var marker = new google.maps.Marker({
            position: coordinates2,
            map: map2,
            icon: 'img/loc.svg'
        });
    }

    // ф-ия маркера 3 карты
    function addMarker3(coordinates3) {
        var marker = new google.maps.Marker({
            position: coordinates3,
            map: map3,
            icon: 'img/loc.svg'
        });
    }
}

initMap();


