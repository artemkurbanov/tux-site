if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {

  document.body.classList.add('mobile-device');
  

  const desktopElement = document.querySelector('.desktop-only');
  if (desktopElement) {
    desktopElement.innerHTML = '<div class="mobile-version">...</div>';
  }
}