$('document').ready(function() {
  $('#button').on('click', function() {
    $('input[required]').addClass('req');
  });
});


{/* <script type="text/javascript"> */}
  $('document').ready(function() {
    $('#button').on('click', function() {
      $('modal-send-form .rfield').each(function() {
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
// </script>