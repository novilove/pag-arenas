import { setLoading } from "./loader.js";
import { routeServer } from "../javascript/utils.js";

const BRAND_PATH = `${routeServer}/iconos/logos`;
const MOBILE_PATH = `${routeServer}/marcas/mobile`;
const WEB_PATH = `${routeServer}/marcas/web`;
const BRANDS = ["london", "hey", "pipicat", "gatuna"];
const CATEGORIES = {
  london: ["basica", "black"],
  gatuna: ["premium"],
  pipicat: ["premium", "super"],
  hey: ["basica"],
};

const MOBILE_BREAK = 767;

// Saber móvil vs. web
function isMobile() {
  return window.innerWidth <= MOBILE_BREAK;
}

// Leer brand de URL
function getBrand() {
  const p = new URLSearchParams(location.search);
  return p.get("brand") || "london";
}

// Render row de logos
async function renderBrands(active) {
  const row = document.getElementById("brand-row");
  row.innerHTML = "";
  let index = 1;
  for (const b of BRANDS) {
    const url = `${BRAND_PATH}/${index}.png`;
    const img = document.createElement("img");
    img.src = url;
    img.alt = b;
    if (b === active) img.classList.add("active");
    img.addEventListener("click", () => {
      history.pushState({ brand: b }, "", `?brand=${b}`);
      init();
    });
    row.appendChild(img);
    index++;
  }
}

// Render productos para la marca (todas las categorías que existan)
async function renderProducts(brand) {
  setLoading(true);
  const cont = document.getElementById("products-container");
  cont.innerHTML = "";
  const base = (isMobile() ? MOBILE_PATH : WEB_PATH) + "/" + brand;
  console.log(brand);
  for (const cat of CATEGORIES[brand]) {
    const imgUrl = `${base}/${cat}.svg`;
    /*  if (await imageExists(imgUrl)) { */
    const block = document.createElement("a");
    block.className = "product-block";

    console.log(`Cargando imagen: ${imgUrl}`);
    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = `${brand} ${cat}`;

    const btn = document.createElement("a");
    btn.className = "btn-vermas";
    btn.textContent = cat[0].toUpperCase() + cat.slice(1);
    btn.addEventListener("click", () => {
      window.location.href = `/views/item-marca.html?brand=${brand}&category=${cat}`;
    });
    block.addEventListener("click", () => {
      window.location.href = `/views/item-marca.html?brand=${brand}&category=${cat}`;
    });

    block.append(img, btn);
    cont.appendChild(block);
    /*     } */
  }
  // Si sólo hay un bloque, agregar clase 'single'
  if (cont.children.length === 1) {
    cont.classList.add("single");
  } else {
    cont.classList.remove("single");
  }
  setTimeout(() => {
    setLoading(false);
  }, 1000); // Simula carga de imágenes
}

// Inicializa todo
async function init() {
  const brand = getBrand();
  await renderBrands(brand);
  await renderProducts(brand);
}

// React to history nav & resize
window.addEventListener("popstate", init);
window.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", () => {
  clearTimeout(window._r);
  window._r = setTimeout(init, 200);
});
