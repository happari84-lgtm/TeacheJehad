// Language toggler: when on Arabic pages, EN button goes to English equivalent and vice versa
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('langBtn');
  if(btn){
    btn.addEventListener('click', function(){
      // map current path to english path
      const map = {'index.html':'index_en.html','courses.html':'courses_en.html','pricing.html':'pricing_en.html','contact.html':'contact_en.html','checkout.html':'checkout_en.html'};
      const path = location.pathname.split('/').pop() || 'index.html';
      const target = map[path] || 'index_en.html';
      location.href = target;
    });
  }
});