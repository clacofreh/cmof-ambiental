document.addEventListener('DOMContentLoaded', function() {
    var parallax = document.querySelectorAll('.parallax');
    var instancesParallax = M.Parallax.init(parallax);
    var tapTarget = document.querySelectorAll('.tap-target');
    var instancesTapTarget = M.TapTarget.init(tapTarget);
    var slider = document.querySelectorAll('.slider');
    var instancesSlider = M.Slider.init(slider,{
        indicators: false,
        height: 500
    });
    var scrollspy = document.querySelectorAll('.scrollspy');
    var instancesParallax = M.ScrollSpy.init(scrollspy,{
        
        throttle:500
    });
    var modal = document.querySelectorAll('.modal');
    var instancesModal = M.Modal.init(modal);
    var collapsible = document.querySelectorAll('.collapsible');
    var instancesCollapsible = M.Collapsible.init(collapsible);
  });

console.log('Hola')