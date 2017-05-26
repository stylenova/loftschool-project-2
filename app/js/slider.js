var slider = (function () {
  var init = function () {
    console.log('Подключен Slider');
  }

  return {init: init};
})();

$(document).ready(function() {
 
  $("#slider-burg").owlCarousel({
    loop: true,
		singleItem : true,
		navigation : true,
		navigationText : ["<img src=\"img\/icons\/arrow-scroll.svg\" alt=\"next\">","<img src=\"img\/icons\/arrow-scroll.svg\" alt=\"next\">"],
		pagination: false
	});
 
});

