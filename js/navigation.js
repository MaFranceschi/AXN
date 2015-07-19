window.onload = function() {

  var videos = document.querySelectorAll('section.previews article');
  for(var i = 0; i < videos.length; i++)
  {
      videos[i].addEventListener('click', function() {
        window.location.href = "player.html";
      });
  }

};
