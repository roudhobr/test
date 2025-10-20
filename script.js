// slideshow sederhana untuk index.html
document.addEventListener('DOMContentLoaded', function(){
  var slides = document.querySelectorAll('.slideshow .slide');
  var idx = 0;
  if(slides && slides.length > 0){
    setInterval(function(){
      slides[idx].classList.remove('active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('active');
    }, 3000);
  }

  var enterBtn = document.getElementById('enterBtn');
  if(enterBtn){
    enterBtn.addEventListener('click', function(){
      window.location.href = 'home.html';
    });
  }

  // konfirmasi pengiriman form
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      // biarkan form submit normal ke Formspree
      // tampilkan pesan singkat di client
      var btn = form.querySelector('button');
      btn.disabled = true;
      btn.textContent = 'Mengirim...';
      // after submit browser akan redirect ke formspree response
      // Kita tidak mencegah default submission
    });
  }
});
