var accordionVertical = (function () {
  var init = function () {
    console.log('Подключен Vertical accordion');
  }

  return {
    init: init
  };
})();

$(document).ready(function () {

  $(function () {
    $('.menu-acco__trigger').on('click', function (e) {
      e.preventDefault();
      var $this = $(this),
        container = $this.closest('.menu-acco'), // беру соседний тег ul
        item = $this.closest('.menu-acco__item'), // беру соседний тег li
        items = container.find('.menu-acco__item'), // найти в ul Li
        activeItem = items.filter('.active'), // добавь класс active к первому ребенку (menu-acco__item)
        content = item.find('.menu-acco__content'),
        activeContent = activeItem.find('.menu-acco__content'); // найти тег с классом (menu-acco__item.active)

      if (!item.hasClass('active')) {

        items.removeClass('active');
        item.addClass('active');

        activeContent.animate({
          'width': '0px'
        });

        content.animate({
          'width': '550px'
        });


      } else { // при клике на тот-же аккокдион закрыать его
        item.removeClass('active');
        content.animate({
          'width': '0px'
        });
      }
    });

    $(document).on('click', function (e) { //Закрыть аккордеон если клик за предеалми аккордеона
      var $this = $(e.target);

      if (!$this.closest('.menu-acco').length) {
        $('.menu-acco__content').animate({
          'width': '0px'
        });

        $('.menu-acco__item').removeClass('active');
      }
    });
  });

});