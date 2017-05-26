var onePageScroll = (function () {
  var init = function () {
    console.log('Подключен One page scroll');
  }

  return {
    init: init
  };
})();

(function () {

  var display = $('.maincontent');
  var section = $('.section');
  var inScroll = false;

  var performTransition = function (sectionEq) { //принимает номер секции
    if (inScroll) return;

    inScroll = true;

    var position = (sectionEq * -100) + '%';

    //eq        - Возвращает элемент, идущий под заданным номером в наборе выбранных элементов.
    //siblings  - Осуществляет поиск элементов, являющихся соседними для выбранных элементов (под соседними понимаются элементы, которые имеют общего родителя). При этом, сами выбранные элементы в результат не включаются.
    section.eq(sectionEq).addClass('active').siblings().removeClass('active');

    display.css({
      'transform': 'translate(0, ' + position + ')'
    });

    setTimeout(function () {
      inScroll = false;

      $('.fixed-menu__item').eq(sectionEq).addClass('active').siblings().removeClass('active');
    }, 1300);

  };

  $('.wrapper').on('wheel', function (e) {
    var activeSection = section.filter('.active');
    var nextSection = activeSection.next();
    var prevSection = activeSection.prev();

    if (e.originalEvent.deltaY > 0 && nextSection.length) {
        performTransition(nextSection.index());
    }

    if (e.originalEvent.deltaY < 0 && prevSection.length) {
      performTransition(prevSection.index());
    }
  });  

  $('[data-section-target]').on('click', function (e) {
    e.preventDefault();

    var href = parseInt($(this).attr('href'));

    performTransition(href);
  });

}());