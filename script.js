// Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('nav');
  const menuToggle = document.createElement('button');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  nav.prepend(menuToggle);
  
  const navList = document.querySelector('nav ul');
  
  menuToggle.addEventListener('click', function() {
    navList.classList.toggle('active');
  });
  
  // Закрытие меню при клике на ссылку
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navList.classList.remove('active');
      }
    });
  });
  
  // Адаптация изображений
  function adjustLayout() {
    // Можно добавить дополнительную логику при необходимости
  }
  
  window.addEventListener('resize', adjustLayout);
  adjustLayout();
});
