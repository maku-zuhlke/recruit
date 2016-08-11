/// (C) Ken Fyrstenberg Nilsen, Abdias Software, CC3.0-attribute.
var E = window;
pixelateBegin: E.pixelateBegin = function() {
  if (document.getElementById('canvas')) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d'),
      img = new Image(),
      play = false;

    /// wait until image is actually available
    img.onload = pixelate;

    /// do not use pixel buffer to pixelate, so any image will do
    img.src = 'images/logo-zuhlke-big.png';

    /// MAIN function
    function pixelate(v) {
      var t = 1;
      if (v > 50) {
        t = 100;
      }

      var size = (play ? v : t) * 0.01,

      /// cache scaled width and height
        w = canvas.width * size,
        h = canvas.height * size;

      /// draw original image to the scaled size
      ctx.drawImage(img, 0, 0, w, h);

      /// then draw that scaled image thumb back to fill canvas
      /// As smoothing is off the result will be pixelated
      ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
    }

    /// This runs the demo animation to give an impression of
    /// performance.
    function toggleAnim() {

      /// limit blocksize as we don't want to animate tiny blocks
      var v = 1,
        dx = 0.2; /// "speed"

      /// toggle play flag set by button "Animate"
      play = !play;

      /// if in play mode start loop
      if (play === true) anim();

      /// animation loop
      function anim() {

        /// increase or decrease value
        v += dx;
        dx = (v > 20 ? 0.35 : 0.2);
        /// if at min or max reverse delta
        if (v <= 1) {
          dx = -dx;
        } else if (v > 50) {
          play = false;
          ctx.mozImageSmoothingEnabled = true;
          ctx.webkitImageSmoothingEnabled = true;
          ctx.imageSmoothingEnabled = true;
        }
        /// pixelate image with current value
        pixelate(v);

        /// loop
        if (play === true) requestAnimationFrame(anim);
      }
    }

    /// poly-fill for requestAnmationFrame with fallback for older
    /// browsers which do not support rAF.
    requestAnimationFrame = (function () {
      return E.requestAnimationFrame || E.webkitRequestAnimationFrame || E.mozRequestAnimationFrame || function (callback) {
          E.setTimeout(callback, 1000 / 60);
        };
    })();
    toggleAnim();
  } else {
    setTimeout(E.pixelateBegin, 15);
  }
};
