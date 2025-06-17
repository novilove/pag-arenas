import { setLoading } from "./loader.js";

/* carousel.js */
export function carruselBanner() {
  // 1. Parámetros básicos
  const MAX_NUMBER = 6;
  const mobileBasePath =
    "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/banners/mobile/";
  const webBasePath =
    "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/banners/web/";
  const MOBILE_MAX_WIDTH = 767;
  const AUTOPLAY_INTERVAL = 5000;
  const BANNERS_STATIC = [
    {
      name: "1.jpg",
      urlRedirect: "./views/item-marca.html?brand=london&category=black",
    },
    {
      name: "2.jpg",
      urlRedirect: "./views/item-marca.html?brand=hey&category=basica",
    },
    {
      name: "3.jpg",
      urlRedirect: "./views/item-marca.html?brand=pipicat&category=premium",
    },
    {
      name: "4.jpg",
      urlRedirect: "./views/item-marca.html?brand=gatuna&category=premium",
    },
    {
      name: "5.jpg",
      urlRedirect: "./views/item-marca.html?brand=pipicat&category=super",
    },
    {
      name: "6.jpg",
      urlRedirect: "./views/item-marca.html?brand=london&category=basica",
    },
  ];

  // 2. Referencias al DOM
  const imgElement = document.getElementById("carouselImage");
  const hrefBanner = document.getElementById("hrefBanner");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const dotsContainer = document.getElementById("carouselDots");
  const progressFill = document.querySelector(".progress-fill");

  // 3. Estado interno
  let imageFileNames = [];
  let currentIndex = 0;
  let slideshowTimer = null;

  // 4. Simula getAvailableImages (toma BANNERS_STATIC)
  async function getAvailableImages() {
    return BANNERS_STATIC.map((item) => item.name);
  }

  function isMobileScreen() {
    return window.innerWidth <= MOBILE_MAX_WIDTH;
  }

  function buildImageUrl(index) {
    const fileName = imageFileNames[index];
    const basePath = isMobileScreen() ? mobileBasePath : webBasePath;
    return basePath + fileName;
  }

  // 8. Muestra la imagen y configura enlace
  function showImageAt(index) {
    imgElement.classList.remove("loaded");
    imgElement.src = buildImageUrl(index);
    hrefBanner.href = BANNERS_STATIC[index].urlRedirect;
    imgElement.addEventListener(
      "load",
      () => {
        imgElement.classList.add("loaded");
      },
      { once: true }
    );
    updateActiveDot(index);
    resetProgressBar();
    startProgressBar();
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % imageFileNames.length;
    showImageAt(currentIndex);
  }

  function showPrevImage() {
    currentIndex =
      (currentIndex - 1 + imageFileNames.length) % imageFileNames.length;
    showImageAt(currentIndex);
  }

  function createDots() {
    dotsContainer.innerHTML = "";
    imageFileNames.forEach((_, idx) => {
      const dot = document.createElement("div");
      dot.classList.add("carousel-dot");
      dot.textContent = idx + 1;
      dot.addEventListener("click", () => {
        stopAutoplay();
        currentIndex = idx;
        showImageAt(currentIndex);
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateActiveDot(activeIndex) {
    const dots = dotsContainer.querySelectorAll(".carousel-dot");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === activeIndex);
    });
  }

  function startProgressBar() {
    progressFill.style.visibility = "visible";
    progressFill.style.transition = "none";
    progressFill.style.width = "0%";
    // force reflow
    void progressFill.offsetWidth;
    progressFill.style.transition = `width ${AUTOPLAY_INTERVAL}ms linear`;
    progressFill.style.width = "100%";
  }

  function resetProgressBar() {
    progressFill.style.transition = "none";
    progressFill.style.width = "0%";
    progressFill.style.visibility = "hidden";
  }

  function startAutoplay() {
    if (slideshowTimer) return;
    slideshowTimer = setInterval(showNextImage, AUTOPLAY_INTERVAL);
    startProgressBar();
  }

  function stopAutoplay() {
    if (!slideshowTimer) return;
    clearInterval(slideshowTimer);
    slideshowTimer = null;
    resetProgressBar();
  }

  // 14. Listeners
  nextButton.addEventListener("click", () => {
    stopAutoplay();
    showNextImage();
  });

  prevButton.addEventListener("click", () => {
    stopAutoplay();
    showPrevImage();
  });

  window.addEventListener("resize", () => {
    showImageAt(currentIndex);
  });

  // 15. Init
  async function initCarousel() {
    setLoading(true);
    const available = await getAvailableImages();
    if (available.length === 0) return;
    imageFileNames = available;
    createDots();
    showImageAt(0);
    startAutoplay();
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simula carga de imágenes
  }

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
  const LOGOS_URLS = [
    {
      name: "1.png",
      urlRedirect: "./views/marcas-de-arenas.html?brand=london",
    },
    { name: "2.png", urlRedirect: "./views/marcas-de-arenas.html?brand=hey" },
    {
      name: "3.png",
      urlRedirect: "./views/marcas-de-arenas.html?brand=pipicat",
    },
    {
      name: "4.png",
      urlRedirect: "./views/marcas-de-arenas.html?brand=gatuna",
    },
  ];
  const imageUrls = [];
  let idx = 0;
  const container = document.getElementById("infiniteScroll");

  // Genera URLs de 1.png a MAX_NUMBER.png si existen
  async function generateImageUrls() {
    for (let brand of LOGOS_URLS) {
      const url = `${BASE_URL}${brand.name}`;
      brand.name = url; // Actualiza el nombre con la URL completa
      /*       if (await imageExists(url)) { */
      imageUrls.push(brand);
      /*    } */
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
    /*     if (idx > 4) return; */
    const url = imageUrls[idx % imageUrls.length].name;
    const link = document.createElement("a");
    link.href = imageUrls[idx % imageUrls.length].urlRedirect; // Asigna el enlace

    const img = document.createElement("img");
    img.className = "lazy-img";
    img.dataset.src = url;
    link.appendChild(img);
    container.appendChild(link);
    imgObserver.observe(img);
    idx++;
  }

  // Scroll automático
  let autoScrolling = true;
  const scrollSpeed = 1; // píxeles por frame

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

  const MAX = 4;
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
