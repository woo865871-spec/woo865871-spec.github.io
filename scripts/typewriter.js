(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var el = document.querySelector('.typewriter-text');
    if (!el) return;

    var text = el.textContent || el.innerText;
    el.textContent = '';
    el.style.visibility = 'visible';
    el.classList.add('typewriter-cursor');

    var i = 0;
    var delay = 600; // initial pause before typing starts

    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, 40);
      } else {
        el.classList.remove('typewriter-cursor');
        el.classList.add('typewriter-done');
      }
    }

    setTimeout(type, delay);
  });
})();
