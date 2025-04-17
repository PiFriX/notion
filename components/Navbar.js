// 导航栏滚动渐变效果
     window.addEventListener('scroll', () => {
       const navbar = document.querySelector('.navbar');
       if (window.scrollY > 100) {
         navbar.style.background = 'rgba(255,255,255,0.98)';
       } else {
         navbar.style.background = 'rgba(255,255,255,0.95)';
       }
     });
