var valid = (function () {
  var init = function () {
    console.log('Подключен validation');
  }

  return {init: init};
})();



var validation = (function() {
  var _memory = [];
  var validateForm = function(form) {
    // Навешиваем обработчики первый раз и запоминаем, что на форму с таким id события уже навешены.
    var id = form.attr('id');
    if (_memory[id] == void 0) {
      _memory[id] = true;
      _setUpListeners(form);
    }
    // Проверяет, чтобы все поля формы были не пустыми. Если пустые - вызывает тултипы
    var elements = form.find('input[data-content]').not('input[type="hidden"]');
    var valid = true;
    $.each(elements, function(index, element) {
      var $element = $(element);
      var value = $element.val();
      // Момент проверки, можно добавлять свои
      if (!value.length) {
        _addError($element);
        valid = false;
      }
    });

    return valid;
  };
  // Навесить обработчки на валидируемую форму
  function _setUpListeners(form) {
    // Прослушивает все события
    // удаляем красную обводку у элементов форм по нажатию клавиши
    $(form).on('keydown', '.has-error', _removeError);
    // удаляем красную обводку у элементов форм по клику мышки
    $(form).on('click', '.has-error', _removeError);
    // при сбросе формы удаляем также: тултипы и обводку
    $(form).on('reset', _clearForm);
  }
  // Убрать класс ошибки у элементов формы
  function _removeError() {
    $(this).removeClass('has-error'); // Убирает красную обводку у элементов форм
  }
  function _addError(element) {
    element.addClass('has-error');
    _createQtip(element, element.data('position'));
  }
  // обработчик события Reset у формы
  function _clearForm() {
    // Очищает форму
    var $form = $(this);
    $form.find('.has-error').removeClass('has-error'); // удаляем красную подсветку
    $form.find('input[data-content]').trigger('hideTooltip'); // удаляем тултипы
  }
  // Создание тултипа у не введенного инпута
  function _createQtip(element, direction) {
    direction = direction || 'left';
    position = {
      left: {
        my: 'center right',
        at: 'center left'
      },
      right: {
        my: 'center left',
        at: 'center right'
      },
      bottom: {
        my: 'top center',
        at: 'bottom center'
      },
      top: {
        my: 'bottom right',
        at: 'top center'
      }
    };
    element.qtip({
      content: {
        text: function() {
          return $(this).data('content');
        }
      },
      show: {
        event: 'show'
      },
      hide: {
        event: 'keydown click hideTooltip'
      },
      position: position[direction],
      style: {
        classes: 'qtip-mystyle qtip-rounded',
        tip: {
          height: 10,
          width: 10
        }
      }
    }).trigger('show');
  }
  return {
    validateForm: validateForm
  };
})();
