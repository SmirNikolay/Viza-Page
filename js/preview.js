document.addEventListener('click', function (event) {
    let a = event.target;
    let b = a.getAttribute('src');
    let c = a.className;
    let d = document.querySelector ('.slideshow__img').className;
    let video = document.querySelector ('.excursion__preview');

    if (c === d) {
      video.setAttribute('src', b);  
    };
    
  });