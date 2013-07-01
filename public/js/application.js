$(document).ready(function(){

  // hide new event form
  $('.new_action').hide();
  // Create event AJAX form
  $('.create').click(function(event){
    event.preventDefault();
    $('.new_action').show();
  });


  // AJAX front page live event loading
  $('.event_link').click(function(event){
    event.preventDefault();
    var current_link = $(this);
    var show_link = $(this).attr('href');
    $.ajax({
      url: show_link,
      method: 'GET'
    }).done(function(requestData){
      $('.invite').remove();
      $(current_link).prepend('<hr/ class="invite">');
      $(current_link).parent().append(requestData + '<br/><hr/ class="invite">');
        // set note fields to be editable and send the edited information to
        $('.edit_note').click(function(event){
          event.preventDefault();
          var edit_link = $(this).attr('href');
          $.ajax({
            url: edit_link,
            method: 'GET'
          }).done(function(requestData){
            $(current_link).siblings().hide();
            $(current_link).parent().append(requestData + '<br/><hr/ class="invite">');
            $()
          });
        });
      }).error(function(){
      });
    });

  // click through the delete link with ajax and hide the information on current page
  $('.delete_me').click(function(event){
    event.preventDefault();
    var current_link = $(this);
    var delete_link = $(this).attr('href');
    $.ajax({
      url: delete_link,
      method: 'GET'
    }).done(function(){
      $(current_link).parent().hide();
    });
  });

  // send an HTTP DELETE request for the sign-out link
  $('a#sign-out').on("click", function (e) {
    e.preventDefault();
    var request = $.ajax({ url: $(this).attr('href'), type: 'delete' });
    request.done(function () { window.location = "/"; });
  });

});
