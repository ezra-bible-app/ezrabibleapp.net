function init() {
  var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

  if (isMobile) {
    document.body.classList.add('mobile');
  } else { 
    $('#rotatingScreenshot').simplebanner({rotateTimeout: 4997});
  }
}