$(document).ready(function(){
  var hours = document.querySelectorAll('.calendar article');

  for (var i = 0; i < hours.length; i++) {
    var element = hours[i];
    element.addEventListener('click', function(){
      window.location.href = "series.html"
    });
  }


  var prev = document.querySelector('.left-arrow');
  var next = document.querySelector('.right-arrow');

  prev.addEventListener('click', function(){
    $('.calendar').hide('slide',{direction:'right'},700);
    $('.calendar').show('slide',{direction:'left'},700);
  });

  next.addEventListener('click', function(){
    $('.calendar').hide('slide',{direction:'left'},700);
    $('.calendar').show('slide',{direction:'right'},700);
  });

});
