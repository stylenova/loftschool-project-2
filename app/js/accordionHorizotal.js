var accordionHorizotal = (function () {
  var init = function () {
      console.log('Подключен Horizotal accordion');
    }
  return {init: init};
})();

$(function () {

	$('.team-acco__trigger').on('click', function(e) {
		e.preventDefault();

		var $this = $(this),
				item = $this.closest('.team-acco__item'),
				container = $this.closest('.team-acco'),
				items = container.find('.team-acco__item'),
				content = item.find('.team-acco__content'),
				otherContent = container.find('.team-acco__content');

		if (!item.hasClass('active')) {
			items.removeClass('active');
			item.addClass('active');
			otherContent.slideUp();
			content.slideDown();

		} else {
			item.removeClass('active');
			content.slideUp();
		}
	});
});