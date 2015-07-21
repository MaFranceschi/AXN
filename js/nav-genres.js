$(document).ready(function(){

  var genresBar = document.querySelectorAll('nav.genres ul li button');

  for(i = 0; i < genresBar.length; i++ ){
    var genreCategory = genresBar[i];

    genreCategory.addEventListener('click', function(){
      var active = this.className;
      if(!(active === '')){
        console.log('Hola bebé');
      }
      else {
        removeActive();
        this.className = 'active';
      }
    })

    function removeActive() {
      for(i = 0; i < genresBar.length; i++){
        var genreCategory = genresBar[i];
        genreCategory.className = '';
      }
    }

  }

});
