$(function () {
  ('use strict');

  // ===================================
  // DARK MODE

  // Personalización del Dark Mode
  const ButtonDark = document.getElementById('darkMode');

  // Init Dark Mode
  initDarkMode();

  // Dark Mode: Por Click Button
  ButtonDark.addEventListener('click', () => {
    setTogleDarkMode();
  });

  function initDarkMode() {
    // Dark Mode: Recuperar el estado del modo oscuro almacenado en localStorage
    localStorage.getItem('isDarkMode') === 'true' ? setDarkModeLocalStorage() : setInitialTheme();
  }
  // Function Set DarkMode
  function setDarkModeLocalStorage() {    
    setDark();
    ButtonDark.checked = true;
  }
  // Function to detect system preferences and set initial theme
  function setInitialTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setLight();
    }
  }

  function setDark() {
    var $link = $('<link>', {
      rel: 'stylesheet',
      href: 'assets/css/dark-mode/dark-mode.css',
      id: 'dark',
    });

    $('body').attr('data-gx-mode', 'dark');
    $('#mainCss').after($link);
    $('#colorCss').attr('href', 'assets/css/dark-mode/black.css');
    var headerModes = $('.gx-tools-item.header').attr('data-header-mode');
    if (headerModes == 'light') {
      $(".gx-tools-item.header[data-header-mode='dark']").addClass('active');
      $(".gx-tools-item.header[data-header-mode='light']").removeClass('active');
      $('.gx-header').attr('data-header-mode-tool', 'dark');
    }
    $('.gx-mode.dark').css('display', 'none');
    $('.gx-mode.light').css('display', 'flex');
    //
    localStorage.setItem('isDarkMode', true);
  }

  function setLight() {
    $('body').attr('data-gx-mode', 'light');
    $('#colorCss').attr('href', 'assets/css/blue.css');
    $('#dark').remove();
    var headerModes = $('.gx-tools-item.header').attr('data-header-mode');
    if (headerModes == 'light') {
      $(".gx-tools-item.header[data-header-mode='light']").addClass('active');
      $(".gx-tools-item.header[data-header-mode='dark']").removeClass('active');
      $('.gx-header').attr('data-header-mode-tool', 'light');
    }
    $('.gx-mode.light').css('display', 'none');
    $('.gx-mode.dark').css('display', 'flex');
    //
    localStorage.setItem('isDarkMode', false);
  }

  function setTogleDarkMode() {
    var mode = $('body').attr('data-gx-mode');
    console.log(mode);
    mode == 'dark' ? setLight() : setDark();
  }

  // ===================================
  // END DARK MODE
});
