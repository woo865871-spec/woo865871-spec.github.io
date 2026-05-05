(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var songs = [
      'ySJCufHJC0Q',
      'WCBvE2PbVzM',
      '4Tk_mgKqIsM',
      'kH0GPgmbxjs',
      'R_nLTJxIGoY',
      'VJ4A40OWps0'
    ];

    var frame = document.getElementById('music-frame');
    var counter = document.getElementById('music-counter');
    var dotsEl = document.getElementById('music-dots');
    var prevBtn = document.getElementById('music-prev');
    var nextBtn = document.getElementById('music-next');
    var swipeZone = document.getElementById('carousel-swipe');

    if (!frame) return;

    var current = 0;
    var dots = [];

    songs.forEach(function (_, i) {
      var d = document.createElement('button');
      d.className = 'cdot' + (i === 0 ? ' cdot--active' : '');
      d.setAttribute('aria-label', (i + 1) + '번 곡');
      d.addEventListener('click', function () { goTo(i); });
      dotsEl.appendChild(d);
      dots.push(d);
    });

    function goTo(idx) {
      current = (idx + songs.length) % songs.length;
      frame.src = 'https://www.youtube.com/embed/' + songs[current];
      counter.textContent = (current + 1) + ' / ' + songs.length;
      dots.forEach(function (d, i) {
        d.className = 'cdot' + (i === current ? ' cdot--active' : '');
      });
    }

    prevBtn.addEventListener('click', function () { goTo(current - 1); });
    nextBtn.addEventListener('click', function () { goTo(current + 1); });

    if (swipeZone) {
      var startX = 0;
      swipeZone.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
      }, { passive: true });
      swipeZone.addEventListener('touchend', function (e) {
        var diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) {
          goTo(diff > 0 ? current + 1 : current - 1);
        }
      }, { passive: true });
    }
  });
})();
