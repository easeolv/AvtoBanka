function initMap() {

    var position = {lat: 56.89634897327859, lng:  24.21073092909688};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: position,
        zoom: 14,
        disableDefaultUI: false,
    });
    marker = new google.maps.Marker({
        position: position,
        map: map,
        icon: 'img/loc.svg'
    });

}

initMap();

