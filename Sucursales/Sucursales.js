function iniciarMap(){
    var coord = {lat:19.281116 ,lng: -99.171311};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker1 = new google.maps.Marker({
      position: {lat:19.281116, lng: -99.171311},
      map: map
    });
    var marker2 = new google.maps.Marker({
        position: {lat:19.282324299643946, lng: -99.14395635620562},
        map: map
      });
    var marker3 = new google.maps.Marker({
      position: {lat:19.30570180050515, lng: -99.16632978189834},
      map: map
    });
    var marker4 = new google.maps.Marker({
      position: {lat: 19.30481427101912, lng: -99.1904178425741},
      map: map
    });
    var marker5 = new google.maps.Marker({
      position: {lat:19.300072612843934, lng: -99.13667906333323},
      map: map
    });

    var marker6 = new google.maps.Marker({
        position: {lat: 19.309395019810513, lng: -99.22297959408527},
        map: map
      });

    var marker7 = new google.maps.Marker({
      position: {lat: 19.31645884718288, lng: -99.21245517627541},
      map: map
    });

    var marker8 = new google.maps.Marker({
        position: {lat: 19.29557766343161, lng:-99.12494361191855},
        map: map
    });

    var marker9 = new google.maps.Marker({
        position: {lat: 19.285184327018797, lng: -99.13554454747204},
        map: map
    });

    var marker10 = new google.maps.Marker({
        position: {lat: 19.325455204718136, lng: -99.13594227070703},
        map: map
    });

    var marker11 = new google.maps.Marker({
        position: {lat: 19.328490576553456, lng: -99.21853108851727 },
        map: map
    });

    var marker12 = new google.maps.Marker({
        position: {lat: 19.33977590570318, lng: -99.19400678850724},
        map: map
    });
}
  