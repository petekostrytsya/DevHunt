
  $('document').ready(function() {
    $('#button').on('click', function() {
      $('.form_box .rfield').each(function() {
        if ($(this).val() != '') {
          console.log(32);
          // Если поле не пустое удаляем класс-указание
          $(this).removeClass('empty_field');
        } else {
          console.log(33);
          // Если поле пустое добавляем класс-указание
          $(this).addClass('empty_field');
        }
      });
    });
  });