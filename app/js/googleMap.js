var googleMap = (function () {
  var init = function () {
    console.log('Подключен Google Map');
  }

  return {
    init: init
  };
})();


// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    // Какое увеличение вы хотите видеть при старте карты (всегда обязательно)
    zoom: 15,
    // The latitude and longitude to center the map (always required)
    // Ширина и долгота центра каты (всегда обязательно)
    center: new google.maps.LatLng(51.495663, 31.299996), // New York
    // Отключение скрола
    scrollwheel: false
  };

  var image = 'img/icons/map-marker.svg';

  // Get the HTML DOM element that will contain your map 
  // We are using a div with id="map" seen below in the <body>
  // Мы используем div с id="map", видно ниже в <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(51.495663, 31.299996),
    map: map,
    icon: image
  });
}