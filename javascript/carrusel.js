/* carousel.js */
export function carruselBanner() {
  /* carousel.js */

  // 1. Parámetros básicos
  const MAX_NUMBER = 6; // recorreremos 1..10
  const mobileBasePath =
    "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/banners/mobile/";
  const webBasePath =
    "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/banners/web/";
  const MOBILE_MAX_WIDTH = 767; // umbral de “pantalla mobile”
  const AUTOPLAY_INTERVAL = 5000; // 5 segundos

  // 2. Referencias al DOM
  const imgElement = document.getElementById("carouselImage");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const dotsContainer = document.getElementById("carouselDots");
  const progressFill = document.querySelector(".progress-fill");

  // 3. Estado interno
  let imageFileNames = []; // Array de strings como ["1.jpg", "3.jpg", ...]
  let currentIndex = 0; // Índice actual dentro de imageFileNames
  let autoplayTimer = null;

  // 4. Función que verifica si una URL de imagen existe (promesa)
  function imageExists(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;

      img.onload = () => {
        // Si carga sin error, existe
        resolve(true);
      };
      img.onerror = () => {
        // Si da error (404, etc), no existe
        resolve(false);
      };
    });
  }

  // 5. Recorre los números 1..MAX_NUMBER y devuelve los que existen en “web”
  async function getAvailableImages() {
    const available = [];

    for (let num = 1; num <= MAX_NUMBER; num++) {
      const fileName = `${num}.jpg`;
      const urlToCheck = webBasePath + fileName;

      // Preguntar si ese archivo realmente existe en "web"
      // (podrías hacer la misma verificación en "mobile" si lo necesitas)
      /* eslint-disable no-await-in-loop */
      const exists = await imageExists(urlToCheck);
      /* eslint-enable no-await-in-loop */

      if (exists) {
        // Si existe en web, damos por hecho que también está en mobile
        available.push(fileName);
      }
      // si no existe, lo saltamos
    }

    return available; // p. ej. ["1.jpg","2.jpg","4.jpg","5.jpg","8.jpg"] (según existan)
  }

  // 6. Decide si estamos en mobile o web (0..MOBILE_MAX_WIDTH => mobile)
  function isMobileScreen() {
    return window.innerWidth <= MOBILE_MAX_WIDTH;
  }

  // 7. Construye la URL completa de la imagen para un índice dado
  function buildImageUrl(index) {
    const fileName = imageFileNames[index];
    const basePath = isMobileScreen() ? mobileBasePath : webBasePath;
    return basePath + fileName;
  }

  // 8. Muestra la imagen en el carousel e inicia la transición
  function showImageAt(index) {
    imgElement.classList.remove("loaded"); // quita opacidad para reactivar fade-in
    imgElement.src = buildImageUrl(index); // asigna la URL

    imgElement.addEventListener(
      "load",
      () => {
        // Cuando cargue, le aplicamos opacidad 1
        imgElement.classList.add("loaded");
      },
      { once: true }
    );

    updateActiveDot(index); // Actualiza cuál dot está activo
    resetProgressBar();
    startProgressBar();
  }

  // 9. Cambiar a la siguiente y anterior imagen
  function showNextImage() {
    currentIndex = (currentIndex + 1) % imageFileNames.length;
    showImageAt(currentIndex);
  }

  function showPrevImage() {
    currentIndex =
      (currentIndex - 1 + imageFileNames.length) % imageFileNames.length;
    showImageAt(currentIndex);
  }

  // 10. Crea los dots dinámicos según imageFileNames
  function createDots() {
    dotsContainer.innerHTML = ""; // limpia cualquier dot previo

    imageFileNames.forEach((fileName, idx) => {
      const dot = document.createElement("div");
      dot.classList.add("carousel-dot");
      dot.textContent = idx + 1; // mostramos “1”, “2”, etc.

      // Al hacer click en este dot, saltamos a esa imagen
      dot.addEventListener("click", () => {
        currentIndex = idx;
        showImageAt(currentIndex);
        resetAutoplay(); // reinicia el autoplay cuando el usuario navega manualmente
      });

      dotsContainer.appendChild(dot);
    });
  }

  // 11. Marca el dot activo
  function updateActiveDot(activeIndex) {
    const dots = dotsContainer.querySelectorAll(".carousel-dot");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === activeIndex);
    });
  }

  // 12. Barra de progreso: animar de 0% a 100% en un intervalo lineal
  function startProgressBar() {
    progressFill.style.transition = "none";
    progressFill.style.width = "0%";

    // Forzamos un reflow para que la transición vuelva a aplicarse
    // sin esto, a veces el navegador no reinicia la animación
    void progressFill.offsetWidth;

    progressFill.style.transition = `width ${AUTOPLAY_INTERVAL}ms linear`;
    progressFill.style.width = "100%";
  }

  function resetProgressBar() {
    progressFill.style.transition = "none";
    progressFill.style.width = "0%";
  }

  // 13. Autoplay: cambiar de foto cada AUTOPLAY_INTERVAL y animar progressBar
  function startAutoplay() {
    var slideshowTimer = setInterval(showNextImage, AUTOPLAY_INTERVAL);
    startProgressBar();
  }

  function stopAutoplay() {
    clearInterval(slideshowTimer);
    slideshowTimer = null;
    resetProgressBar();
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // 14. Listeners de botones y de resize
  nextButton.addEventListener("click", () => {
    showNextImage();
    resetAutoplay();
  });

  prevButton.addEventListener("click", () => {
    showPrevImage();
    resetAutoplay();
  });

  window.addEventListener("resize", () => {
    // Si cambió de mobile a web (o viceversa), recargamos la misma imagen
    showImageAt(currentIndex);
  });

  // 15. Función principal de inicialización
  async function initCarousel() {
    // 15.1. Obtenemos la lista de archivos válidos
    const availableFiles = await getAvailableImages();
    // Ejemplo de availableFiles: ["1.jpg", "2.jpg", "4.jpg", "7.jpg", "9.jpg"]

    if (availableFiles.length === 0) {
      console.warn(
        "No se encontraron imágenes 1..10 en la carpeta /web/. El carrusel quedará vacío."
      );
      return;
    }

    // 15.2. Asignamos a imageFileNames ese array ordenado
    imageFileNames = availableFiles;

    // 15.3. Creamos los dots con base en esa lista
    createDots();

    // 15.4. Mostramos la primera imagen
    showImageAt(0);

    // 15.5. Iniciamos autoplay
    startAutoplay();
  }

  // 16. Ejecutamos la inicialización
  initCarousel();
}

export function iconsAndBackgorund() {
  const lazyBackgrounds = document.querySelectorAll(".lazy-bg");

  if (!("IntersectionObserver" in window)) {
    lazyBackgrounds.forEach((section) => {
      loadBackground(section);
    });
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px 200px 0px",
    threshold: 0.1,
  };

  const bgObserver = new IntersectionObserver(onIntersection, observerOptions);

  lazyBackgrounds.forEach((section) => {
    bgObserver.observe(section);
  });

  function onIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        loadBackground(el);
        observer.unobserve(el);
      }
    });
  }

  function loadBackground(element) {
    const bgUrl = element.getAttribute("data-bg");
    if (!bgUrl) return;

    const img = new Image();
    img.src = bgUrl;
    img.onload = () => {
      element.style.backgroundImage = `url('${bgUrl}')`;
      element.classList.add("loaded");
    };
  }
}

export async function scrollInfinitoImg() {
  const BASE_URL =
    "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/iconos/logos/"; // Ajusta tu dominio
  const MAX_NUMBER = 5;
  const imageUrls = [];
  let idx = 0;
  const container = document.getElementById("infiniteScroll");

  // Verifica si existe la imagen
  function imageExists(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  }

  // Genera URLs de 1.png a MAX_NUMBER.png si existen
  async function generateImageUrls() {
    for (let i = 1; i <= MAX_NUMBER; i++) {
      const url = `${BASE_URL}${i}.png`;
      if (await imageExists(url)) {
        imageUrls.push(url);
      }
    }
  }

  // Observer para lazy-load
  const imgObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.onload = () => img.classList.add("loaded");
          obs.unobserve(img);
        }
      });
    },
    {
      root: container,
      rootMargin: "0px 200px",
      threshold: 0.1,
    }
  );

  // Añade una imagen al scroll
  function appendImage() {
    if (imageUrls.length === 0) return;
    const url = imageUrls[idx % imageUrls.length];
    const img = document.createElement("img");
    img.className = "lazy-img";
    img.dataset.src = url;
    container.appendChild(img);
    imgObserver.observe(img);
    idx++;
  }

  // Scroll automático
  let autoScrolling = true;
  const scrollSpeed = 0.5; // píxeles por frame

  function autoScroll() {
    if (autoScrolling) {
      container.scrollLeft += scrollSpeed;
    }
    requestAnimationFrame(autoScroll);
  }

  // Pause/resume al hover sobre logo (imagen)
  container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("lazy-img")) {
      autoScrolling = false;
    }
  });
  container.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("lazy-img")) {
      autoScrolling = true;
    }
  });

  // Inicialización
  await generateImageUrls();
  for (let i = 0; i < 8; i++) appendImage();
  autoScroll();

  // Scroll infinito: cargar más cuando llegue al final
  container.addEventListener("scroll", () => {
    const { scrollLeft, scrollWidth, clientWidth } = container;
    if (scrollLeft + clientWidth >= scrollWidth - 100) {
      for (let i = 0; i < 4; i++) appendImage();
    }
  });
}

export function setCarruselVideos() {
  const BASE =
    "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/video/home/";

  const MAX = 5;
  const videos = [];
  let current = 0;

  // Genera lista 1.mp4 … 10.mp4
  for (let i = 1; i <= MAX; i++) {
    videos.push(`${BASE}${i}.mp4`);
  }

  const vidEl = document.getElementById("carouselVideo");
  const prevB = document.getElementById("prevBtn");
  const nextB = document.getElementById("nextBtn");
  const dotsC = document.getElementById("videoDots");

  // Crea los dots
  function buildDots() {
    dotsC.innerHTML = "";
    videos.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.className =
        "carousel-dot home-fondo " + (i === current ? " active" : "");
      dot.textContent = i + 1; // mostramos “1”, “2”, etc.

      dot.addEventListener("click", () => playAt(i));
      dotsC.append(dot);
    });
  }

  // Actualiza estilo de dots
  function updateDots() {
    const all = dotsC.children;
    for (let i = 0; i < all.length; i++) {
      all[i].classList.toggle("active", i === current);
    }
  }

  // Carga y pausa el video en índice
  function playAt(i) {
    current = i;
    vidEl.pause();
    vidEl.src = videos[current];
    vidEl.load();
    updateDots();
  }

  // Botones
  prevB.addEventListener("click", () => {
    playAt((current - 1 + videos.length) % videos.length);
  });
  nextB.addEventListener("click", () => {
    playAt((current + 1) % videos.length);
  });

  // Play on hover, pause on leave
  vidEl.addEventListener("mouseenter", () => vidEl.play());
  vidEl.addEventListener("mouseleave", () => vidEl.pause());

  // Inicial
  buildDots();
  playAt(0);
}
