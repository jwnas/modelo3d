AFRAME.registerComponent('touch-scale', {
  init: function () {
    const el = this.el;
    let initialDistance = null;
    let initialScale = el.object3D.scale.clone();
    let scaling = false;

    // Zoom com dois dedos
    window.addEventListener('touchstart', function (e) {
      if (e.touches.length === 2) {
        initialDistance = getDistance(e.touches[0], e.touches[1]);
        initialScale = el.object3D.scale.clone();
        scaling = true;
      }
    });

    window.addEventListener('touchmove', function (e) {
      if (e.touches.length === 2 && scaling) {
        const currentDistance = getDistance(e.touches[0], e.touches[1]);
        const scaleFactor = currentDistance / initialDistance;
        el.object3D.scale.set(
          initialScale.x * scaleFactor,
          initialScale.y * scaleFactor,
          initialScale.z * scaleFactor
        );
      }
    });

    window.addEventListener('touchend', function (e) {
      if (e.touches.length === 0 && e.changedTouches.length === 1) {
        // Toque simples com um dedo
        el.emit('tap');
      }
      scaling = false;
    });

    function getDistance(touch1, touch2) {
      const dx = touch1.clientX - touch2.clientX;
      const dy = touch1.clientY - touch2.clientY;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }
});