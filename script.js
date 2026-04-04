const events = [
  {
    id: "foncal-2026",
    type: "Torneo principal",
    title: "Open Foncal 2026",
    date: "18 · 20 abril 2026",
    place: "Maspalomas Padel Center",
    text: "Prueba destacada de pádel con categorías masculinas, femeninas y mixtas, welcome pack y un entorno orientado a comunidad y competición.",
    categories: "Masculina B · Femenina C · Mixto iniciación",
    format: "Parejas · cuadro final",
    price: "Desde 25 €",
    prize: "Premio por categoría",
    cta: "Solicitar plaza",
    image: "linear-gradient(135deg, rgba(10, 16, 32, 0.12), rgba(10, 16, 32, 0.28)), url('https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=80') center/cover",
    badge: "Evento destacado",
    status: "Inscripción próxima",
    schedule: [
      "Viernes: bienvenida y primera ronda",
      "Sábado: cuadro principal y activaciones",
      "Domingo: finales, contenido y cierre"
    ],
    venueInfo: "Club con pistas indoor y outdoor, zona social y espacio para partners.",
    categoriesOptions: ["Masculina B", "Femenina C", "Mixto iniciación"]
  },
  {
    id: "summer-series",
    type: "Serie de verano",
    title: "Summer Series by InPlay",
    date: "Mayo · julio 2026",
    place: "Gran Canaria",
    text: "Serie de pruebas conectadas por imagen y continuidad de marca, pensada para evolucionar a ranking, seguimiento de puntos y comunidad de temporada.",
    categories: "3 pruebas · ranking futuro",
    format: "Circuito por fases",
    price: "Desde 20 €",
    prize: "Ranking + premios finales",
    cta: "Ver circuito",
    image: "linear-gradient(135deg, rgba(10, 16, 32, 0.12), rgba(10, 16, 32, 0.3)), url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80') center/cover",
    badge: "Circuito",
    status: "Próximamente",
    schedule: [
      "Prueba 1: apertura del circuito",
      "Prueba 2: continuidad de ranking",
      "Prueba 3: cierre y clasificaciones"
    ],
    venueInfo: "Formato multi-sede con comunicación unificada y seguimiento por fases.",
    categoriesOptions: ["Prueba 1", "Prueba 2", "Prueba 3"]
  },
  {
    id: "tejeda-experience",
    type: "Experiencia",
    title: "Tejeda Experience & Networking",
    date: "03 mayo 2026",
    place: "Gran Canaria",
    text: "Actividad outdoor para comunidad InPlay con networking, experiencia compartida y una línea de producto más allá del torneo tradicional.",
    categories: "Ticket general",
    format: "Experiencia de comunidad",
    price: "18 €",
    prize: "Welcome pack + networking",
    cta: "Reservar interés",
    image: "linear-gradient(135deg, rgba(10, 16, 32, 0.14), rgba(10, 16, 32, 0.32)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80') center/cover",
    badge: "Comunidad",
    status: "Abierto interés",
    schedule: [
      "Salida de mañana",
      "Ruta y experiencia guiada",
      "Cierre social y contenido"
    ],
    venueInfo: "Formato de comunidad pensado para ampliar el portfolio de InPlay.",
    categoriesOptions: ["Ticket general"]
  }
];

const grid = document.getElementById('events-grid');
const toggle = document.getElementById('toggle-view');
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const eventModal = document.getElementById('event-modal');
const eventModalContent = document.getElementById('event-modal-content');
const registerModal = document.getElementById('register-modal');
const registerForm = document.getElementById('register-form');
const registerMessage = document.getElementById('register-message');

function sanitize(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getEventById(eventId) {
  return events.find((event) => event.id === eventId);
}

function renderEvents() {
  if (!grid) return;

  grid.innerHTML = events.map((event) => `
    <article>
      <div class="card-image" style="background: ${event.image};">
        <span class="card-badge">${sanitize(event.badge)}</span>
        <div class="card-overlay">
          <span>${sanitize(event.date)}</span>
          <span>${sanitize(event.status)}</span>
        </div>
      </div>
      <div class="card-body">
        <div class="meta">
          <span class="tag">${sanitize(event.type)}</span>
          <span class="tag">${sanitize(event.place)}</span>
        </div>
        <h3>${sanitize(event.title)}</h3>
        <p>${sanitize(event.text)}</p>
        <div class="card-summary">
          <article>
            <span>Categorías / acceso</span>
            <strong>${sanitize(event.categories)}</strong>
          </article>
          <article>
            <span>Formato</span>
            <strong>${sanitize(event.format)}</strong>
          </article>
        </div>
        <div class="card-info-grid">
          <article>
            <span>Precio</span>
            <strong>${sanitize(event.price)}</strong>
          </article>
          <article>
            <span>Premio / extra</span>
            <strong>${sanitize(event.prize)}</strong>
          </article>
          <article>
            <span>Estado</span>
            <strong>${sanitize(event.status)}</strong>
          </article>
        </div>
        <div class="card-footer">
          <span class="price">${sanitize(event.price)}</span>
          <div class="card-actions">
            <button class="btn btn-secondary small btn-dark-outline" type="button" data-open-event="${sanitize(event.id)}">Ver detalle</button>
            <button class="btn btn-primary small" type="button" data-open-register="${sanitize(event.id)}">Inscribirme</button>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

function renderEventModal(eventId) {
  const event = getEventById(eventId);
  if (!event || !eventModalContent) return;

  eventModalContent.innerHTML = `
    <div class="event-modal-hero" style="background: ${event.image};">
      <span class="card-badge">${sanitize(event.badge)}</span>
      <div class="event-modal-headline">
        <span class="eyebrow eyebrow-dark">${sanitize(event.type)}</span>
        <h2 id="event-modal-title">${sanitize(event.title)}</h2>
        <p>${sanitize(event.text)}</p>
      </div>
    </div>
    <div class="event-modal-body">
      <div class="event-modal-main">
        <div class="detail-grid">
          <article class="detail-card">
            <span>Fecha</span>
            <strong>${sanitize(event.date)}</strong>
          </article>
          <article class="detail-card">
            <span>Sede</span>
            <strong>${sanitize(event.place)}</strong>
          </article>
          <article class="detail-card">
            <span>Precio</span>
            <strong>${sanitize(event.price)}</strong>
          </article>
          <article class="detail-card">
            <span>Formato</span>
            <strong>${sanitize(event.format)}</strong>
          </article>
        </div>
        <div class="detail-section">
          <p class="mini-title">Categorías</p>
          <div class="trust-pills">${event.categoriesOptions.map((category) => `<span>${sanitize(category)}</span>`).join('')}</div>
        </div>
        <div class="detail-section">
          <p class="mini-title">Sede y experiencia</p>
          <p>${sanitize(event.venueInfo)}</p>
        </div>
        <div class="detail-section">
          <p class="mini-title">Agenda estimada</p>
          <ul class="clean-list">
            ${event.schedule.map((item) => `<li>${sanitize(item)}</li>`).join('')}
          </ul>
        </div>
      </div>
      <aside class="event-modal-side">
        <div class="sticky-box">
          <p class="mini-title">Acción</p>
          <h3>Este evento ya tiene una ficha pública útil.</h3>
          <p>En esta fase puedes consultar el detalle e iniciar una preinscripción desde la propia web.</p>
          <div class="sticky-box-actions">
            <button class="btn btn-primary" type="button" data-modal-register="${sanitize(event.id)}">Iniciar inscripción</button>
            <a class="btn btn-secondary btn-dark-outline" href="#contacto">Solicitar información</a>
          </div>
        </div>
      </aside>
    </div>
  `;
}

function openModal(modal) {
  if (!modal) return;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  if (![eventModal, registerModal].some((item) => item?.classList.contains('is-open'))) {
    document.body.classList.remove('modal-open');
  }
}

function openEventModal(eventId) {
  renderEventModal(eventId);
  openModal(eventModal);
}

function openRegisterModal(eventId) {
  const event = getEventById(eventId);
  if (!event || !registerForm) return;

  registerForm.reset();
  registerMessage.textContent = '';
  registerMessage.classList.remove('error');

  registerForm.elements.eventId.value = event.id;
  registerForm.elements.eventLabel.value = `${event.title} · ${event.date}`;
  registerForm.elements.category.innerHTML = event.categoriesOptions
    .map((category) => `<option value="${sanitize(category)}">${sanitize(category)}</option>`)
    .join('');

  openModal(registerModal);
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

    formMessage.classList.remove('error');

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

    formMessage.textContent = 'Mensaje preparado. La siguiente fase conectará este formulario a un envío real.';
    contactForm.reset();
  });
}

function bindRegisterForm() {
  if (!registerForm || !registerMessage) return;

  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(registerForm);
    const fullName = String(formData.get('fullName') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const accepted = formData.get('accept');

    registerMessage.classList.remove('error');

    if (!fullName || !email || !phone || !accepted) {
      registerMessage.textContent = 'Completa los campos obligatorios y acepta el tratamiento de datos.';
      registerMessage.classList.add('error');
      return;
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validEmail) {
      registerMessage.textContent = 'Introduce un email válido.';
      registerMessage.classList.add('error');
      return;
    }

    registerMessage.textContent = 'Preinscripción registrada en esta demo. El siguiente paso es conectarla a almacenamiento y email real.';
    registerForm.reset();
  });
}

function bindEventActions() {
  document.addEventListener('click', (event) => {
    const openEventButton = event.target.closest('[data-open-event]');
    if (openEventButton) {
      openEventModal(openEventButton.getAttribute('data-open-event'));
      return;
    }

    const openRegisterButton = event.target.closest('[data-open-register], [data-modal-register]');
    if (openRegisterButton) {
      const eventId = openRegisterButton.getAttribute('data-open-register') || openRegisterButton.getAttribute('data-modal-register');
      openRegisterModal(eventId);
      return;
    }

    if (event.target.closest('[data-close-modal]')) {
      closeModal(eventModal);
      return;
    }

    if (event.target.closest('[data-close-register]')) {
      closeModal(registerModal);
    }
  });
}

function bindKeyboard() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal(eventModal);
      closeModal(registerModal);
    }
  });
}

function bindReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length || !('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  elements.forEach((element) => observer.observe(element));
}

renderEvents();
bindToggleView();
bindMobileNav();
bindForm();
bindRegisterForm();
bindEventActions();
bindKeyboard();
bindReveal();
