const events = [
  {
    title: 'Open Foncal 2026',
    type: 'Torneo',
    place: 'Gran Canaria',
    date: '18 · 20 abril 2026',
    price: '25€',
    text: 'Prueba principal de pádel con una comunicación más cuidada, mejor presencia visual y estructura preparada para evolucionar a inscripción real.',
    cta: 'Ver evento',
    badge: 'Evento principal',
    gradient: 'linear-gradient(135deg, #0f172a, #243b68 48%, #7aaef8)'
  },
  {
    title: 'Circuito InPlay Verano',
    type: 'Circuito',
    place: 'Canarias',
    date: 'Mayo · agosto 2026',
    price: 'Desde 20€',
    text: 'Serie de pruebas conectadas con potencial para ranking, seguimiento estacional y visibilidad reforzada de patrocinadores y comunidad.',
    cta: 'Explorar circuito',
    badge: 'Serie de pruebas',
    gradient: 'linear-gradient(135deg, #1a2440, #0f6bcf 45%, #8fd6ff)'
  },
  {
    title: 'Tejeda Outdoor & Networking',
    type: 'Experiencia',
    place: 'Gran Canaria',
    date: '03 mayo 2026',
    price: '18€',
    text: 'Actividad experiencial para ampliar el valor de la marca fuera de pista y reforzar comunidad, partners y momentos compartidos.',
    cta: 'Más información',
    badge: 'Experiencia premium',
    gradient: 'linear-gradient(135deg, #11261d, #21724b 45%, #8cd4ab)'
  }
];

const grid = document.getElementById('events-grid');
const toggle = document.getElementById('toggle-view');
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

function sanitize(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function renderEvents() {
  if (!grid) return;

  grid.innerHTML = events.map((event) => `
    <article>
      <div class="card-image" style="background:${sanitize(event.gradient)}">
        <span class="card-badge">${sanitize(event.badge)}</span>
      </div>
      <div class="card-body">
        <div class="meta">
          <span class="tag">${sanitize(event.type)}</span>
          <span class="tag">${sanitize(event.place)}</span>
        </div>
        <h3>${sanitize(event.title)}</h3>
        <p>${sanitize(event.text)}</p>
        <span class="card-date">${sanitize(event.date)}</span>
        <div class="card-footer">
          <span class="price">${sanitize(event.price)}</span>
          <a class="btn btn-secondary small" href="#contacto">${sanitize(event.cta)}</a>
        </div>
      </div>
    </article>
  `).join('');
}

function bindToggleView() {
  if (!toggle || !grid) return;
  toggle.addEventListener('click', () => {
    const listMode = grid.classList.toggle('list-view');
    toggle.textContent = listMode ? 'Ver en cuadrícula' : 'Cambiar vista';
  });
}

function bindMobileNav() {
  if (!navToggle || !mainNav) return;

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function bindForm() {
  if (!contactForm || !formMessage) return;

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      formMessage.textContent = 'Completa nombre, email y mensaje antes de enviar.';
      formMessage.classList.add('error');
      return;
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validEmail) {
      formMessage.textContent = 'Introduce un email válido.';
      formMessage.classList.add('error');
      return;
    }

    formMessage.textContent = 'Mensaje preparado. En la siguiente fase se conectará a un envío real.';
    formMessage.classList.remove('error');
    contactForm.reset();
  });
}

function bindReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  elements.forEach((element) => observer.observe(element));
}

renderEvents();
bindToggleView();
bindMobileNav();
bindForm();
bindReveal();
