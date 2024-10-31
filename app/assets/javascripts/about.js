document.addEventListener("DOMContentLoaded", () => {
    const teamCarousel = document.querySelector('#teamCarousel');
  
    teamCarousel.addEventListener('slide.bs.carousel', () => {
      // Reset opacity and transform for all team members
      document.querySelectorAll('.team-member').forEach(member => {
        member.style.opacity = '0';
        member.style.transform = 'translateY(20px)';
      });
  
      // Delay the animation for each member
      setTimeout(() => document.getElementById('ceo').style.opacity = '1', 500);
      setTimeout(() => document.getElementById('cto').style.opacity = '1', 1000);
      setTimeout(() => document.getElementById('cfo').style.opacity = '1', 1500);
    });
  });
  