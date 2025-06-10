// lazy-load-assets.js

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todas las imágenes SVG y videos marcados para carga diferida
  const lazySvgs = document.querySelectorAll("img.lazy-svg");
  const lazyVideos = document.querySelectorAll("video.lazy-video");

  // Fallback para navegadores que no soporten IntersectionObserver:
  if (!("IntersectionObserver" in window)) {
    // Carga todas las imágenes de inmediato
    lazySvgs.forEach(cargarSvg);
    // Carga todos los videos de inmediato
    lazyVideos.forEach(cargarVideo);
    return;
  }

  // Opciones para el IntersectionObserver:
  // root: null → viewport,
  // rootMargin: carga 200px antes de que entren en pantalla,
  // threshold: 0.1 → cuando el 10% del elemento sea visible
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px 200px 0px",
    threshold: 0.1,
  };

  // Crea un único observer que manejará tanto SVGs como videos
  const observer = new IntersectionObserver(onIntersection, observerOptions);

  // Observa cada imagen SVG
  lazySvgs.forEach((el) => observer.observe(el));
  // Observa cada video
  lazyVideos.forEach((el) => observer.observe(el));

  // Función llamada cuando algún elemento intersecta con el viewport
  function onIntersection(entries, observerInstance) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const elemento = entry.target;

        // Si es una imagen SVG → la cargamos
        if (
          elemento.tagName.toLowerCase() === "img" &&
          elemento.classList.contains("lazy-svg")
        ) {
          cargarSvg(elemento);
        }

        // Si es un video → lo cargamos
        if (
          elemento.tagName.toLowerCase() === "video" &&
          elemento.classList.contains("lazy-video")
        ) {
          cargarVideo(elemento);
        }

        // Una vez cargado, deja de observarlo
        observerInstance.unobserve(elemento);
      }
    });
  }

  // Función que carga un SVG asignando src desde data-src y agrega clase .loaded
  function cargarSvg(imgEl) {
    const dataSrc = imgEl.getAttribute("data-src");
    if (!dataSrc) return;

    imgEl.src = dataSrc;

    // Cuando termine de cargarse, añade la clase .loaded
    imgEl.addEventListener("load", () => {
      imgEl.classList.add("loaded");
    });

    imgEl.removeAttribute("data-src");
  }

  // Función que carga un video asignando src y llamando a load()
  function cargarVideo(videoEl) {
    const dataSrc = videoEl.getAttribute("data-src");
    if (!dataSrc) return;

    // Si el <video> incluye <source> interno, preferimos reemplazarlo:
    const sourceTag = videoEl.querySelector("source");
    if (sourceTag) {
      sourceTag.src = dataSrc;
    } else {
      // Alternativamente, asignamos directamente al atributo src del <video>
      videoEl.src = dataSrc;
    }

    // Invocamos load() para que comience la descarga
    videoEl.load();

    // Cuando el video tenga metadata, agregamos clase .loaded
    videoEl.addEventListener("loadedmetadata", () => {
      videoEl.classList.add("loaded");
    });

    videoEl.removeAttribute("data-src");
  }
});
