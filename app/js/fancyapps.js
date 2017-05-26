var fancyapps = (function () {
  var init = function () {
    console.log('Подключен Fancyapps');
  }

  return {
    init: init
  };
})();


$(document).ready(function () {
  $('.icon-close').on('click', function(e) {
    e.preventDefault();

    $.fancybox.close();
  });
});