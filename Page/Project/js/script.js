  var menuElem = document.getElementById('nav');
    var titleElem = menuElem.querySelector('.icon');

    titleElem.onclick = function() {
      menuElem.classList.toggle('open');
    };