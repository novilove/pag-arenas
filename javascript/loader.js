// loader.js
const imageUrls = [
  "../assets/loading_novi/Container.svg",
  "../assets/loading_novi/Container-1.svg",
  "../assets/loading_novi/Container-2.svg",
  "../assets/loading_novi/Container-3.svg",
];

function preloadImages(urls, onProgress, onComplete) {
  let loaded = 0;
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      loaded++;
      onProgress(loaded, urls.length);
      if (loaded === urls.length) onComplete();
    };
    img.onerror = () => {
      // aunque falle, cuenta como cargada para no bloquear
      loaded++;
      onProgress(loaded, urls.length);
      if (loaded === urls.length) onComplete();
    };
  });
}

function hideLoader() {
  const loader = document.getElementById("page-loader");
  const content = document.getElementById("page-content");
  loader.classList.add("hidden");
  loader.addEventListener("transitionend", () => {
    loader.remove();
    content.classList.add("visible");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Opcional: mostrar progreso en consola
  preloadImages(
    imageUrls,
    (loaded, total) => console.log(`Cargadas ${loaded}/${total}`),
    () => hideLoader()
  );
});
