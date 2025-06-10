const MAX_IMAGES = 6;
const MOBILE_PATH =
  "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/categorias/mobile";
const WEB_PATH =
  "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/categorias/web";
const MOBILE_BREAK = 767;
const SPECIAL_FILE = "table.svg";

let imageUrls = [];
let currentIndex = 0;
let lastIsMobile = null;

// Detecta mobile/web
function isMobile() {
  return window.innerWidth <= MOBILE_BREAK;
}

// Comprueba existencia con Image()
function imageExists(url) {
  return new Promise((res) => {
    const img = new Image();
    img.src = url;
    img.onload = () => res(true);
    img.onerror = () => res(false);
  });
}

// Lee filtro de URL
function getCategory() {
  const p = new URLSearchParams(window.location.search);
  return p.get("filtro") || "basica";
}

// Destaca botón activo
function updateActiveFilter(cat) {
  document
    .querySelectorAll(".filter-button")
    .forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.category === cat)
    );
}

// Genera lista de JPG existentes
async function generateImageUrls(cat) {
  const base = (isMobile() ? MOBILE_PATH : WEB_PATH) + "/" + cat;
  const arr = [];
  for (let i = 1; i <= MAX_IMAGES; i++) {
    const url = `${base}/${i}.jpg`;
    if (await imageExists(url)) arr.push(url);
  }
  return arr;
}

// Construye los dots
function buildDots() {
  const dc = document.getElementById("carouselDots");
  dc.innerHTML = "";
  imageUrls.forEach((_, idx) => {
    const d = document.createElement("span");
    d.className = "dot" + (idx === currentIndex ? " active" : "");
    d.textContent = idx + 1; // mostramos “1”, “2”, etc.

    d.addEventListener("click", () => showSlide(idx));
    dc.appendChild(d);
  });
}

// Muestra slide
function showSlide(idx) {
  currentIndex = idx;
  document.getElementById("carouselImage").src = imageUrls[idx];
  document
    .querySelectorAll(".dot")
    .forEach((d, i) => d.classList.toggle("active", i === idx));
}

// Carga el SVG extra (`table.svg`) y lo muestra
async function loadSpecialImage(cat) {
  const container = document.getElementById("special-container");
  container.innerHTML = ""; // limpio antes
  const base = (isMobile() ? MOBILE_PATH : WEB_PATH) + "/" + cat;
  const url = `${base}/${SPECIAL_FILE}`;

  if (await imageExists(url)) {
    const img = document.createElement("img");
    img.src = url;
    img.alt = `${cat} summary table`;
    container.appendChild(img);
  }
}

// Inicializa o reinicializa todo
async function initCarousel() {
  const cat = getCategory();
  updateActiveFilter(cat);

  const mobileFlag = isMobile();
  if (cat !== initCarousel.lastCategory || mobileFlag !== lastIsMobile) {
    initCarousel.lastCategory = cat;
    lastIsMobile = mobileFlag;

    // Carrusel
    imageUrls = await generateImageUrls(cat);
    currentIndex = 0;
    buildDots();
    if (imageUrls.length) showSlide(0);

    // Imagen extra
    await loadSpecialImage(cat);
  }
}

// Botones filtro
function bindFilters() {
  document.querySelectorAll(".filter-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const c = btn.dataset.category;
      history.pushState({ f: c }, "", `?filtro=${c}`);
      initCarousel();
    });
  });
}

// Flechas Prev/Next
function bindArrows() {
  document.getElementById("prevBtn").addEventListener("click", () => {
    if (!imageUrls.length) return;
    showSlide((currentIndex - 1 + imageUrls.length) % imageUrls.length);
  });
  document.getElementById("nextBtn").addEventListener("click", () => {
    if (!imageUrls.length) return;
    showSlide((currentIndex + 1) % imageUrls.length);
  });
}

// Eventos
window.addEventListener("DOMContentLoaded", () => {
  // Asegura data-category en botones
  document.querySelectorAll(".filter-button").forEach((btn, i) => {
    if (!btn.dataset.category) {
      const cats = ["basica", "premium", "super", "black"];
      btn.dataset.category = cats[i] || "";
    }
  });
  bindFilters();
  bindArrows();
  initCarousel();
});
window.addEventListener("popstate", initCarousel);
window.addEventListener("resize", () => {
  clearTimeout(window._rs);
  window._rs = setTimeout(initCarousel, 200);
});
