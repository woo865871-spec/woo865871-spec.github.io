(function () {
  document.addEventListener('DOMContentLoaded', function () {

    // Email obfuscation: assemble from data attributes
    document.querySelectorAll('[data-user][data-domain]').forEach(function (el) {
      var email = el.getAttribute('data-user') + '@' + el.getAttribute('data-domain');
      el.href = 'mailto:' + email;
      if (el.textContent.trim() === '이메일') {
        el.textContent = email;
      }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

  });
})();
