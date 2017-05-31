var ajaxRequest = (function () {
	var init = function () {
		console.log('Подключен Ajax Request');
	}

	return {
		init: init
	};
})();


$('#btn-ajx').on('click', function () {
	var name = $('input[name=name]').val(),
		phone = $('input[name=phone]').val(),
		street = $('input[name=street]').val(),
		home = $('input[name=home]').val(),
		part = $('input[name=part]').val(),
		appt = $('input[name=appt]').val(),
		floor = $('input[name=floor]').val();
	$.ajax({
		url: '/form-handler.php',
		method: 'post',
		data: {
			name: name,
			phone: phone,
			street: street,
			home: home,
			part: part,
			appt: appt,
			floor: floor
		}
	}).done(function (response) {
		var converted = JSON.parse(response);

		var html = 'Your name: ' + converted.name;

		$('#result').html(html);
		alert(converted.status);
	});
});