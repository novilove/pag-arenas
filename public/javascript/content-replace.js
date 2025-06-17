import { contentMapping } from "./contentMapping.js";

function getParam(name, def) {
  const p = new URLSearchParams(window.location.search);
  return p.get(name) || def;
}

async function applyContent() {
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
  Object.entries(map.text).forEach(([selector, html]) => {
    const el = document.getElementById(`${selector}`);
    if (el) {
      el.innerHTML = html;
      console.log(`Contenido actualizado para ${selector}`);
    } else {
      console.warn(`Selector not found: ${selector}`);
    }
  });
  /* VIDEO */
  const video = document.getElementById(`video-wrapper`);
  /*  video.innerHTML = "";
c */
  let newVideo;
  if (map.video.isVideo) {
    newVideo = document.createElement("video");
    newVideo.id = "carouselVideo";
    newVideo.className = "carousel-video";
    newVideo.controls = true;
    newVideo.muted = true;
    newVideo.preload = "metadata";
    newVideo.src = map.videoSrc;
  } else {
    newVideo = document.createElement("img");
    newVideo.id = "carouselVideo";
    newVideo.className = "carousel-video";
    newVideo.src = map.videoSrc;
  }
  // Limpia el contenido previo
  video.appendChild(newVideo);

  /* MORE PRODUCTS */
  const moreProducts = document.getElementById("brand-row");
  map.extra.map((item) => {
    const a = document.createElement("a");
    a.href = item.urlRedirect;
    const img = document.createElement("img");
    img.src = item.src;
    a.appendChild(img);
    moreProducts.appendChild(a);
  });
  /* <!-- <video
            id="carouselVideo"
            class="carousel-video"
            controls=""
            muted=""
            preload="metadata"
            src="https://stalwart-faloodeh-22bebe.netlify.app/public/assets/video/hey-basica.mp4"
          */
}
export { applyContent, getParam };

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

/* window.addEventListener("DOMContentLoaded", applyContent);
window.addEventListener("popstate", applyContent); */
