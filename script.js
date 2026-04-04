const events = [
  {
    title: 'Open Foncal 2026',
    type: 'Torneo',
    place: 'Gran Canaria',
    date: '18-20 abril 2026',
    price: '25€',
    text: 'Torneo principal de pádel con categorías masculinas, femeninas y mixtas.',
    cta: 'Ver evento'
  },
  {
    title: 'Circuito InPlay Verano',
    type: 'Circuito',
    place: 'Canarias',
    date: 'Mayo - agosto 2026',
    price: 'Desde 20€',
    text: 'Pruebas encadenadas con seguimiento de resultados y evolución del ranking.',
    cta: 'Explorar circuito'
  },
  {
    title: 'Excursión Tejeda & Networking',
    type: 'Experiencia',
    place: 'Gran Canaria',
    date: '03 mayo 2026',
    price: '18€',
    text: 'Actividad outdoor para comunidad y patrocinadores con networking final.',
    cta: 'Más información'
  }
];

const grid = document.getElementById('events-grid');
const toggle = document.getElementById('toggle-view');

function renderEvents() {
  grid.innerHTML = events.map((event, index) => `
    <article>
      <div class="card-image" style="background:${index === 0 ? 'linear-gradient(135deg,#111827,#334155)' : index === 1 ? 'linear-gradient(135deg,#1d4ed8,#38bdf8)' : 'linear-gradient(135deg,#14532d,#4ade80)'}"></div>
      <div class="card-body">
        <div class="meta">
          <span class="tag">${event.type}</span>
          <span class="tag">${event.place}</span>
        </div>
        <h3>${event.title}</h3>
        <p>${event.text}</p>
        <p><strong>${event.date}</strong></p>
        <div class="card-footer">
          <span class="price">${event.price}</span>
          <a class="btn btn-secondary small" href="#contacto">${event.cta}</a>
        </div>
      </div>
    </article>
  `).join('');
}

if (toggle) {
  toggle.addEventListener('click', () => {
    grid.classList.toggle('list-view');
  });
}

renderEvents();
