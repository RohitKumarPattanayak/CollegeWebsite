(function($) {

  $(".navbar-nav li a").on('click', function(event) {
    $('.navbar-nav li').removeClass('active');
    $(this).closest('li').addClass('active');
    var $anchor = $(this);
    var nav = $($anchor.attr('href'));
    if (nav.length) {
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');

      event.preventDefault();
    }
  });
  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // Add smooth scrolling to all links in navbar
  $("a.mouse-hover, a.get-quote").on('click', function(event) {
    var hash = this.hash;
    if (hash) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, 'easeInOutExpo');
    }
  });
})(jQuery);

// loading 
function onReady(callback) {``
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 3000);
}
function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}
onReady(function() {
  setVisible('body', true);
  setVisible('#loading', false);
});

// btn loading 
jQuery(function($){
  $(document).ajaxSend(function() {
    $("#overlay").fadeIn(600);　
  });
		
  $('.bt14').click(function(){
    $.ajax({
      type: 'GET',
      success: function(data){
        // console.log(data);
      }
    }).done(function() {
      setTimeout(function(){
        $("#overlay").fadeOut(600);
      },1500);
    });
  });	
});

// ****************************
// contact-form sending email 
// ****************************
function SendEmail(e){
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var sub = document.getElementById('subject').value
  var msg = document.getElementById('message').value
  var phn = document.getElementById('number').value

  var body = 'Name : '+name+'.<br/>'+
              'Phone : '+phn+'.<br/>'+
              'Email : '+email+'.<br/>'+
              '<br/>'+
              'Subject : '+sub+'.<br/>'+
              '<br/>'+              
              'Message : '+msg+'.<br/>'
if (phn != '' && email != '' && name != '' && sub != '' && msg != ''){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "rohitkumarpattanayak@gmail.com",
    Password : "tfbtuulsekbzyvgl",
    To : 'rohitkumarpattanayak@gmail.com',
    From : email,
    Subject : "Query from website",
    Body : body
  }).then(function(message){
    if (message == 'OK'){
      swal("Email sent successfully!", "", "success");
    }else{
      swal("Email could not be sent!", "", "error");
    }
  });
  setTimeout("location.reload(true);",4500);
  
}else{
  swal("Please fill all details!", "", "warning");
}
}

