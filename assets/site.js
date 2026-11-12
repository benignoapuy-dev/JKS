/* JKS CR — comportamiento compartido */
(function(){
  var FORM_URL = 'https://formspree.io/f/mzdknben';

  // ---------- Nav ----------
  var nav = document.querySelector('.nav');
  if (nav && !nav.classList.contains('solid')) {
    var onScroll = function(){ nav.classList.toggle('scrolled', window.scrollY > 30); };
    window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  }
  var burger = document.querySelector('.burger');
  if (burger) burger.addEventListener('click', function(){ nav.classList.toggle('open'); });
  document.querySelectorAll('.nav-links a').forEach(function(a){
    a.addEventListener('click', function(){ nav.classList.remove('open'); });
  });

  // ---------- Reveal on scroll ----------
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(el){ io.observe(el); });
  } else { els.forEach(function(el){ el.classList.add('in'); }); }

  // ---------- Modal de cotización ----------
  var modal = document.getElementById('modalCot');
  window.abrirCotizacion = function(prefill){
    if (!modal) return;
    var ta = modal.querySelector('[name="Productos"]');
    if (ta && typeof prefill === 'string') ta.value = prefill;
    modal.classList.add('on');
    document.body.style.overflow = 'hidden';
  };
  window.cerrarCotizacion = function(){
    if (!modal) return;
    modal.classList.remove('on');
    document.body.style.overflow = '';
  };
  if (modal) {
    modal.addEventListener('click', function(e){ if (e.target === modal) cerrarCotizacion(); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') cerrarCotizacion(); });
  }
  document.querySelectorAll('[data-cotizar]').forEach(function(b){
    b.addEventListener('click', function(e){ e.preventDefault(); abrirCotizacion(b.getAttribute('data-cotizar') || undefined); });
  });

  // Cantones por provincia
  var cantones = {
    'San José':['San José','Escazú','Desamparados','Puriscal','Tarrazú','Aserrí','Mora','Goicoechea','Santa Ana','Alajuelita','Vásquez de Coronado','Acosta','Tibás','Moravia','Montes de Oca','Turrubares','Dota','Curridabat','Pérez Zeledón','León Cortés'],
    'Alajuela':['Alajuela','San Ramón','Grecia','San Mateo','Atenas','Naranjo','Palmares','Poás','Orotina','San Carlos','Zarcero','Sarchí','Upala','Los Chiles','Guatuso','Río Cuarto'],
    'Cartago':['Cartago','Paraíso','La Unión','Jiménez','Turrialba','Alvarado','Oreamuno','El Guarco'],
    'Heredia':['Heredia','Barva','Santo Domingo','Santa Bárbara','San Rafael','San Isidro','Belén','Flores','San Pablo','Sarapiquí'],
    'Guanacaste':['Liberia','Nicoya','Santa Cruz','Bagaces','Carrillo','Cañas','Abangares','Tilarán','Nandayure','La Cruz','Hojancha'],
    'Puntarenas':['Puntarenas','Esparza','Buenos Aires','Montes de Oro','Osa','Quepos','Golfito','Coto Brus','Parrita','Corredores','Garabito','Monteverde','Puerto Jiménez'],
    'Limón':['Limón','Pococí','Siquirres','Talamanca','Matina','Guácimo']
  };
  var prov = document.getElementById('f-prov'), cant = document.getElementById('f-cant');
  if (prov && cant) prov.addEventListener('change', function(){
    cant.innerHTML = '<option value="" disabled selected>Seleccione su cantón</option>';
    (cantones[prov.value]||[]).forEach(function(c){ var o=document.createElement('option'); o.textContent=c; cant.appendChild(o); });
  });

  // Envío por fetch (sin salir de la página)
  var form = document.getElementById('formCot');
  if (form) form.addEventListener('submit', function(e){
    e.preventDefault();
    var msg = form.querySelector('.fmsg'), btn = form.querySelector('button[type=submit]');
    msg.className = 'fmsg'; btn.disabled = true; btn.style.opacity = .6;
    fetch(FORM_URL, {method:'POST', body:new FormData(form), headers:{'Accept':'application/json'}})
      .then(function(r){
        if (!r.ok) throw new Error();
        msg.className = 'fmsg ok';
        msg.textContent = '¡Gracias! Recibimos su solicitud y le contactaremos pronto.';
        form.reset();
        if (window.onCotizacionEnviada) window.onCotizacionEnviada();
      })
      .catch(function(){
        msg.className = 'fmsg err';
        msg.textContent = 'No se pudo enviar. Escríbanos directamente a contacto@jkscr.com';
      })
      .then(function(){ btn.disabled = false; btn.style.opacity = 1; });
  });

  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();
