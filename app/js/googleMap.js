var googleMap = (function () {
  var init = function () {
    console.log('Подключен Google Map');
  }

  return {
    init: init
  };
})();


var mapGoogle = (function () {
  var init = function () {
    var uluru = {
      lat: 51.495663,
      lng: 31.299996
    };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru,
      scrollwheel: false      
    });
    var icons = {
      position: {
        icon: {
          url: './img/icons/map-marker.svg',
          size: new google.maps.Size(40, 50),
          scaledSize: new google.maps.Size(40, 50)
        }
      },
      logo: {
        icon: {
          url: './img/icons/map-marker.svg',
          size: new google.maps.Size(37, 45),
          scaledSize: new google.maps.Size(37, 45)
        }
      }
    };
    var features = [{
        position: new google.maps.LatLng(51.495663, 31.299996),
        type: 'position',
        contentString: 'First', // Тултип
        content: 'First market' // балун
      },
      {
        position: new google.maps.LatLng(51.502889, 31.311918),
        type: 'position',
        contentString: 'Second',
        content: 'Second market'
      },
      {
        position: new google.maps.LatLng(51.498655, 31.278047),
        type: 'logo',
        contentString: 'Third',
        content: 'Third market'
      }
    ];

    var infowindow = new google.maps.InfoWindow();

    features.forEach(function (feature) {
      var marker = new google.maps.Marker({
        position: feature.position,
        icon: icons[feature.type].icon,
        map: map,
        animation: google.maps.Animation.DROP,
        title: feature.contentString
      });
      marker.addListener('click', function () {
        infowindow.setContent(feature.content);
        infowindow.open(map, marker);
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function () {
          marker.setAnimation(null);
        }, 1400);
      });
    });
  };

  return {
    init: init
  };
})();


if ($('#map').length) {
  google.maps.event.addDomListener(window, 'load', mapGoogle.init);
}