$(document).ready(function() {
  $('#console-box').append('console is ready...');
    $('.activate-btn').on('click', function() {
      $('.activate-btn').removeClass('active');
      $(this).addClass('active');
  
      $('.activate-btn').each(function() {
        var isActive = $(this).hasClass('active');
        var id = $(this).attr('id');
        if ($(this).hasClass('active')) {
          $(this).text('Active').removeClass('btn-secondary').addClass('btn-success');
        } else {
          $(this).text('Unactive').removeClass('btn-success').addClass('btn-secondary');
        }
        $('#console-box').append('<br>car:'+id+'|status:'+$(this).text()+'.');
        $(this).toggleClass('selected').siblings().removeClass('selected');
      });

    });

  });