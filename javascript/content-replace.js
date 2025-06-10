import { contentMapping, pageMapping } from "./contentMapping.js";

function getParam(name, def) {
  const p = new URLSearchParams(window.location.search);
  return p.get(name) || def;
}

function applyContent() {
  const category = getParam("filtro", "basica");
  const brand = getParam("brand", "hey");
  const key = `${category}-${brand}`;
  const map = contentMapping[key];

  if (!map) {
    console.warn(`No mapping for ${key}`);
    return;
  }

  // 1) Aplica colores CSS variables
  if (map.colors) {
    const root = document.documentElement;
    root.style.setProperty("--light", map.colors.light);
    root.style.setProperty("--dark", map.colors.dark);
  }

  // 2) Reemplaza solo el innerHTML de cada selector
  Object.entries(map).forEach(([selector, html]) => {
    if (selector === "colors") return;
    const el = document.querySelector(selector);
    if (el) {
      el.innerHTML = html;
    } else {
      console.warn(`Selector not found: ${selector}`);
    }
  });
}
/* 

function initCarouselAndBrands() {
  const category = getParam("category", "basica");
  const brand = getParam("brand", "hey");
  const key = `${category}-${brand}`;
  const cfg = pageMapping[key];

  if (!cfg) {
    console.warn(`No mapping for "${key}"`);
    return;
  }

  // 1) actualiza SRC del video
  const videoEl = document.getElementById("carouselVideo");
  videoEl.src = cfg.videoSrc;

  // 2) construye brand-row dinámicamente
  const row = document.getElementById("brand-row");
  row.innerHTML = "";
  cfg.brands.forEach((item) => {
    const a = document.createElement("a");
    a.href = item.href;
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    if (item.brand === brand && item.category === category) {
      img.classList.add("active");
    }
    a.appendChild(img);
    row.appendChild(a);
  });
}

// inicializa
window.addEventListener("DOMContentLoaded", initCarouselAndBrands);
window.addEventListener("popstate", initCarouselAndBrands); */

window.addEventListener("DOMContentLoaded", applyContent);
window.addEventListener("popstate", applyContent);
