// Theme: dark by default, remembered per browser.
// The header link names the theme you switch to: "light-side" on dark pages, "dark-side" on light pages.
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  root.setAttribute('data-theme', saved || 'dark');

  document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('theme');
    if (!link) return;
    function label() {
      link.textContent = root.getAttribute('data-theme') === 'dark' ? 'light-side' : 'dark-side';
    }
    label();
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var t = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', t);
      try { localStorage.setItem('theme', t); } catch (e) {}
      label();
    });
  });
})();
