import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://rkothgsgephdymsoevkv.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_IepXz-tcIjqXCIrEzKN9QQ_UwAmVBE4';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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

async function submitPreinscription(payload) {
  const { error } = await supabase
    .from('preinscriptions')
    .insert([payload]);

  if (error) throw error;
}

function setRegisterMessage(message, isError = false) {
  registerMessage.textContent = message;
  registerMessage.classList.toggle('error', isError);
  registerMessage.classList.toggle('success', !isError);
}

function bindRegisterForm() {
  if (!registerForm || !registerMessage) return;

  registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = registerForm.querySelector('button[type="submit"]');
    const formData = new FormData(registerForm);
    const payload = {
      event_id: String(formData.get('eventId') || '').trim(),
      event_label: String(formData.get('eventLabel') || '').trim(),
      category: String(formData.get('category') || '').trim(),
      full_name: String(formData.get('fullName') || '').trim(),
      email: String(formData.get('email') || '').trim().toLowerCase(),
      phone: String(formData.get('phone') || '').trim(),
      partner: String(formData.get('partner') || '').trim(),
      notes: String(formData.get('notes') || '').trim(),
      source: 'web',
      status: 'pending',
      user_agent: navigator.userAgent,
    };
    const accepted = formData.get('accept');
    const honeypot = String(formData.get('website') || '').trim();

    registerMessage.classList.remove('error', 'success');

    if (honeypot) {
      setRegisterMessage('No se ha podido procesar la solicitud.', true);
      return;
    }

    if (!payload.event_id || !payload.event_label || !payload.category || !payload.full_name || !payload.email || !payload.phone || !accepted) {
      setRegisterMessage('Completa los campos obligatorios y acepta el tratamiento de datos.', true);
      return;
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
    if (!validEmail) {
      setRegisterMessage('Introduce un email válido.', true);
      return;
    }

    const validPhone = /^[+()\d\s-]{7,20}$/.test(payload.phone);
    if (!validPhone) {
      setRegisterMessage('Introduce un teléfono válido.', true);
      return;
    }

    try {
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
      }

      await submitPreinscription(payload);
      setRegisterMessage('Preinscripción enviada correctamente. Queda guardada en Supabase con estado pending para revisión del equipo.');
      registerForm.reset();
    } catch (error) {
      console.error('Supabase insert error:', error);
      setRegisterMessage('No se ha podido guardar la preinscripción. Revisa la configuración de Supabase o inténtalo de nuevo.', true);
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Enviar preinscripción';
      }
    }
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


const adminLoginForm = document.getElementById('admin-login-form');
const adminAuthMessage = document.getElementById('admin-auth-message');
const adminLogoutButton = document.getElementById('admin-logout');
const adminRefreshButton = document.getElementById('admin-refresh');
const adminPanelLocked = document.getElementById('admin-panel-locked');
const adminPanel = document.getElementById('admin-panel');
const adminSessionEmail = document.getElementById('admin-session-email');
const adminList = document.getElementById('admin-list');
const adminPanelMessage = document.getElementById('admin-panel-message');
const adminSearch = document.getElementById('admin-search');
const adminStatusFilter = document.getElementById('admin-status-filter');
const statTotal = document.getElementById('stat-total');
const statPending = document.getElementById('stat-pending');
const statReviewed = document.getElementById('stat-reviewed');
const statConfirmed = document.getElementById('stat-confirmed');

let adminRows = [];
let adminSession = null;

function escapeAttr(value) {
  return sanitize(String(value ?? '')).replace(/"/g, '&quot;');
}

function formatDateTime(value) {
  if (!value) return '—';
  try {
    return new Date(value).toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' });
  } catch {
    return value;
  }
}

function setAdminAuthMessage(message, isError = false) {
  if (!adminAuthMessage) return;
  adminAuthMessage.textContent = message;
  adminAuthMessage.classList.toggle('error', isError);
  adminAuthMessage.classList.toggle('success', !!message && !isError);
}

function setAdminPanelMessage(message, isError = false) {
  if (!adminPanelMessage) return;
  adminPanelMessage.textContent = message;
  adminPanelMessage.classList.toggle('error', isError);
  adminPanelMessage.classList.toggle('success', !!message && !isError);
}

function updateAdminVisibility() {
  const email = adminSession?.user?.email || '';
  if (adminPanelLocked) adminPanelLocked.classList.toggle('hidden', !!email);
  if (adminPanel) adminPanel.classList.toggle('hidden', !email);
  if (adminSessionEmail) adminSessionEmail.textContent = email || '-';
}

function updateAdminStats(rows) {
  if (!statTotal) return;
  const counts = rows.reduce((acc, row) => {
    acc.total += 1;
    acc[row.status] = (acc[row.status] || 0) + 1;
    return acc;
  }, { total: 0, pending: 0, reviewed: 0, confirmed: 0, cancelled: 0 });

  statTotal.textContent = counts.total;
  statPending.textContent = counts.pending || 0;
  statReviewed.textContent = counts.reviewed || 0;
  statConfirmed.textContent = counts.confirmed || 0;
}

function getFilteredAdminRows() {
  const q = String(adminSearch?.value || '').trim().toLowerCase();
  const status = adminStatusFilter?.value || 'all';
  return adminRows.filter((row) => {
    const matchesStatus = status === 'all' || row.status === status;
    if (!matchesStatus) return false;
    if (!q) return true;
    const haystack = [row.full_name, row.email, row.phone, row.event_label, row.category, row.partner].join(' ').toLowerCase();
    return haystack.includes(q);
  });
}

function buildMailto(row) {
  const subject = encodeURIComponent(`InPlay · Estado de tu preinscripción: ${row.event_label}`);
  const body = encodeURIComponent(`Hola ${row.full_name},

Te escribimos desde InPlay sobre tu preinscripción para ${row.event_label}.

Estado actual: ${row.status.toUpperCase()}
Categoría: ${row.category}

Próximos pasos:
- Si está revisada, te confirmaremos disponibilidad y horario.
- Si está confirmada, te enviaremos el siguiente detalle operativo.

Gracias,
Equipo InPlay`);
  return `mailto:${encodeURIComponent(row.email)}?subject=${subject}&body=${body}`;
}

function renderAdminRows() {
  if (!adminList) return;
  const rows = getFilteredAdminRows();
  updateAdminStats(adminRows);

  if (!rows.length) {
    adminList.innerHTML = '<div class="admin-empty-state compact"><strong>Sin resultados</strong><p>No hay preinscripciones que coincidan con los filtros actuales.</p></div>';
    return;
  }

  adminList.innerHTML = rows.map((row) => `
    <article class="admin-row">
      <div class="admin-row-main">
        <div class="admin-row-top">
          <div>
            <h4>${sanitize(row.full_name)}</h4>
            <p>${sanitize(row.event_label)} · ${sanitize(row.category)}</p>
          </div>
          <span class="status-chip status-${escapeAttr(row.status)}">${sanitize(row.status)}</span>
        </div>
        <div class="admin-row-meta">
          <span>${sanitize(row.email)}</span>
          <span>${sanitize(row.phone)}</span>
          <span>Creada: ${sanitize(formatDateTime(row.created_at))}</span>
          <span>Partner: ${sanitize(row.partner || '—')}</span>
        </div>
        ${row.notes ? `<p class="admin-row-notes">${sanitize(row.notes)}</p>` : ''}
      </div>
      <div class="admin-row-actions">
        <label>
          <span>Estado</span>
          <select data-status-id="${escapeAttr(row.id)}">
            <option value="pending" ${row.status === 'pending' ? 'selected' : ''}>Pending</option>
            <option value="reviewed" ${row.status === 'reviewed' ? 'selected' : ''}>Reviewed</option>
            <option value="confirmed" ${row.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
            <option value="cancelled" ${row.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
          </select>
        </label>
        <div class="admin-inline-actions">
          <button type="button" class="btn btn-secondary btn-dark-outline small" data-email-id="${escapeAttr(row.id)}">Email</button>
          <button type="button" class="btn btn-primary small" data-save-id="${escapeAttr(row.id)}">Guardar</button>
        </div>
      </div>
    </article>
  `).join('');
}

async function loadAdminRows() {
  const { data, error } = await supabase
    .from('preinscriptions')
    .select('id, created_at, event_id, event_label, category, full_name, email, phone, partner, notes, status')
    .order('created_at', { ascending: false })
    .limit(200);

  if (error) throw error;
  adminRows = data || [];
  renderAdminRows();
}

async function updatePreinscriptionStatus(id, status) {
  const { error } = await supabase
    .from('preinscriptions')
    .update({ status })
    .eq('id', id);

  if (error) throw error;
}

async function handleAdminSession(session) {
  adminSession = session;
  updateAdminVisibility();

  if (!session?.user) {
    adminRows = [];
    renderAdminRows();
    return;
  }

  try {
    setAdminPanelMessage('');
    await loadAdminRows();
  } catch (error) {
    console.error('Admin load error:', error);
    setAdminPanelMessage('No se ha podido cargar el panel. Revisa las políticas RLS y que tu email admin esté autorizado.', true);
  }
}

function bindAdminAuth() {
  if (!adminLoginForm) return;

  adminLoginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(adminLoginForm);
    const email = String(formData.get('adminEmail') || '').trim().toLowerCase();
    const password = String(formData.get('adminPassword') || '');
    if (!email) {
      setAdminAuthMessage('Introduce un email de administración.', true);
      return;
    }
    if (!password) {
      setAdminAuthMessage('Introduce la contraseña del usuario admin.', true);
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;
      setAdminAuthMessage('Sesión iniciada correctamente.');
      adminLoginForm.reset();
    } catch (error) {
      console.error('Admin auth error:', error);
      setAdminAuthMessage('No se ha podido iniciar sesión. Revisa email, contraseña y que el usuario exista en Supabase Auth.', true);
    }
  });

  adminLogoutButton?.addEventListener('click', async () => {
    await supabase.auth.signOut();
    setAdminAuthMessage('Sesión cerrada.');
    setAdminPanelMessage('');
  });

  adminRefreshButton?.addEventListener('click', async () => {
    if (!adminSession?.user) return;
    try {
      await loadAdminRows();
      setAdminPanelMessage('Panel actualizado.');
    } catch (error) {
      console.error('Admin refresh error:', error);
      setAdminPanelMessage('No se ha podido actualizar el panel.', true);
    }
  });

  adminSearch?.addEventListener('input', renderAdminRows);
  adminStatusFilter?.addEventListener('change', renderAdminRows);

  document.addEventListener('click', async (event) => {
    const emailBtn = event.target.closest('[data-email-id]');
    if (emailBtn) {
      const row = adminRows.find((item) => String(item.id) === String(emailBtn.getAttribute('data-email-id')));
      if (row) {
        window.location.href = buildMailto(row);
        setAdminPanelMessage('Borrador de email abierto en tu cliente local.');
      }
      return;
    }

    const saveBtn = event.target.closest('[data-save-id]');
    if (saveBtn) {
      const id = saveBtn.getAttribute('data-save-id');
      const select = document.querySelector(`[data-status-id="${CSS.escape(id)}"]`);
      const nextStatus = select?.value;
      if (!id || !nextStatus) return;

      try {
        saveBtn.disabled = true;
        saveBtn.textContent = 'Guardando...';
        await updatePreinscriptionStatus(id, nextStatus);
        const row = adminRows.find((item) => String(item.id) === String(id));
        if (row) row.status = nextStatus;
        renderAdminRows();
        setAdminPanelMessage(`Estado actualizado a ${nextStatus}.`);
      } catch (error) {
        console.error('Status update error:', error);
        setAdminPanelMessage('No se ha podido actualizar el estado. Revisa permisos RLS para usuarios autenticados.', true);
      }
    }
  });
}

async function initAdminSession() {
  const { data } = await supabase.auth.getSession();
  await handleAdminSession(data.session);

  supabase.auth.onAuthStateChange(async (_event, session) => {
    await handleAdminSession(session);
  });
}

bindAdminAuth();
initAdminSession();
