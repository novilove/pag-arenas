export const contentMapping = {
  //category+"-"+brand
  "basica-hey": {
    colors: {
      light: "#f0c41d",
      dark: "#ea527e",
    },
    text: {
      // Título principal
      "title-fondo-marca": "Hey! Arena Básica Premium<br/>Aroma lavanda",
      // Lista de pesos
      "list-kg": `<h3 class="gotham white">3kg</h3>
       <h3 class="gotham white">5kg</h3>
       <h3 class="gotham white">12kg</h3>
       <h3 class="gotham white">25kg</h3>`,
      // Descripción corta
      "description-fondo-marca":
        "Esta arena básica combina eficacia y economía, neutralizando olores y reduciendo el rastreo.",
      // Subtítulo imagen
      "description-marca-text":
        "Aglutinación superior con fresco aroma a lavanda. ",
      // Texto dentro de .arena
      "cat-image-text-1": "Ideal para todo<br/>tipo de areneros",
      "cat-image-text-2": "y muy eficaz en hogares<br/>con varios gatos.",
      // Texto en versión móvil
      "cat-image-text-3": "Ideal para todo<br/>tipo de areneros",
      "cat-image-text-4": "y muy eficaz en hogares<br/>con varios gatos.",
      /* CHAT */
      "chat-container": ` <div class="chat-bubble right col-md-7 light" style="display: flex;align-items: center;" >con aroma Lavanda <img src="https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/hey/basica/aroma.png" style="width:32px;height:32px" alt='Hey! Básica' class='logo-marca ml-2'/></div>
        <div class="chat-bubble left col-md-7 dark">
          Los gránulos crean una potente unión para<br />retener la humedad y
          evitar que cualquier<br />líquido llegue al fondo de la bandeja
          higiénica.
        </div>
        <div class="chat-bubble right col-md-7 light">
          Es hipoalergénica a alérgenos comunes como<br />el polvo, las
          proteínas vegetales y las fragancias.
        </div>
        <div class="chat-bubble left col-md-7 dark">
          <strong> Mira el siguiente video</strong>
        </div>`,
    },

    video: {
      isVideo: true,
      src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/video/hey-basica.mp4",
    },
    extra: [
      {
        src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/gatuna/premium.svg",
        urlRedirect: "/item-marca.html?brand=gatuna&category=premium",
      },
      {
        src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/london/basica.svg",
        urlRedirect: "/item-marca.html?brand=london&category=basica",
      },
      {
        src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/pipicat/premium.svg",
        urlRedirect: "/item-marca.html?brand=pipicat&category=premium",
      },
    ],
  },
  "basica-london": {
    colors: {
      light: "#333555",
      dark: "#782E42",
    },
    text: {
      // Título principal
      "title-fondo-marca": "London Cats Arena sanitaria<br/>Aroma lavanda",
      // Lista de pesos
      "list-kg": `<h3 class="gotham white">10kg</h3>
       <h3 class="gotham white">20kg</h3>`,
      // Descripción corta
      "description-fondo-marca":
        "Está hecha de carbón activo que proporciona un control de los olores durante todo el día. Es decir que neutraliza los aromas, además está hecha de bentonita 100% natural y aglutina efectivamente sin dejar soluciones pastosas en el arenero.",
      // Subtítulo imagen
      "description-marca-text":
        "Combate los fuertes olores a amoníaco al instante.",
      // Texto dentro de .arena
      "cat-image-text-1": "100% natural",
      "cat-image-text-2": "y respetuoso con el medio ambiente.",
      // Texto en versión móvil
      "cat-image-text-3": "100% natural",
      "cat-image-text-4": "y respetuoso con el medio ambiente.",
      /* CHAT */
      "chat-container": ` <div class="chat-bubble right col-md-7 light" style="display: flex;align-items: center;" >con aroma Lavanda <img src="https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/london/basica/aroma.png" style="width:32px;height:32px" alt='london Básica' class='logo-marca ml-2'/></div>
        <div class="chat-bubble left col-md-7 dark">
          Tiene una aroma neutro, libre de químicos<br/>y suave que no saturará el espacio de la casa.
        </div>
        <div class="chat-bubble right col-md-7 light">
           La arena de grano fino es muy respetuosa con<br/>las patas del gato.
        </div>
        <div class="chat-bubble left col-md-7 dark">
          <strong> Mira el siguiente video</strong>
        </div>`,
    },
    video: {
      isVideo: true,
      src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/video/london-basica.mp4",
    },
    extra: [
      {
        src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/pipicat/premium.svg",
        urlRedirect: "/item-marca.html?brand=pipicat&category=premium",
      },
      {
        src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/london/black.svg",
        urlRedirect: "/item-marca.html?brand=london&category=black",
      },
      {
        src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/gatuna/premium.svg",
        urlRedirect: "/item-marca.html?brand=gatuna&category=premium",
      },
    ],
  },
  "premium-pipicat": {
    colors: {
      light: "#87BD27",
      dark: "#E8F5D0",
      "text-light-100": "#87BD27",
    },
    text: {
      // Título principal
      "title-fondo-marca": "Pipicat Arena<br/>Ecológica Premium",
      // Lista de pesos
      "list-kg": `<h3 class="gotham white">4kg</h3>
       <h3 class="gotham white">15kg</h3>`,
      // Descripción corta
      "description-fondo-marca":
        "La calidad de la arena para gatos Pipicat la convierte en líder por su excelente relación de precio y calidad. Una alternativa de calidad con buena aglutinación y filtración de polvo.",
      // Subtítulo imagen
      "description-marca-text": "Hecha de bentonita 100% natural",
      // Texto dentro de .arena
      "cat-image-text-1": "Neutraliza los olores",
      "cat-image-text-2": "de manera efectiva.",
      // Texto en versión móvil
      "cat-image-text-3": "Neutraliza los olores",
      "cat-image-text-4": "de manera efectiva.",
      /* CHAT */
      "chat-container": ` <div class="chat-bubble right col-md-7 light" style="display: flex;align-items: center;" >con aromas Manzana, Lavanda y Menta  <img src="https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/pipicat/premium/aroma3.png"style="width:32px;height:32px" alt='Hey! Básica' class='logo-marca mx-1'/> <img src="https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/pipicat/premium/aroma1.png"style="width:40px;height:40px" alt='Hey! Básica' class='logo-marca mx-1'/> <img src="https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/pipicat/premium/aroma2.png"style="width:32px;height:32px" alt='Hey! Básica' class='logo-marca mx-1'/>
     </div>
        <div class="chat-bubble left col-md-7 dark">
         Tecnología especial de neutralización<br/>de olores combate los fuertes olores<br/>a amoníaco al instante.
        </div>
        <div class="chat-bubble right col-md-7 light">
         No ensucia las almohadillas de los michis
        </div>
        <div class="chat-bubble left col-md-7 dark">
          <strong> Mira el siguiente video</strong>
        </div>`,
    },
    video: {
      isVideo: true,
      src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/video/pipicat-premium.mp4",
    },
    extra: [
      {
        src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/hey/basica.svg",
        urlRedirect: "/item-marca.html?brand=hey&category=basica",
      },

      {
        src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/pipicat/super.svg",
        urlRedirect: "/item-marca.html?brand=pipicat&category=super",
      },
      {
        src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/london/black.svg",
        urlRedirect: "/item-marca.html?brand=london&category=black",
      },
    ],
  },
  "premium-gatuna": {
    colors: {
      light: "#F5AEB9",
      dark: "#62CBC9",
    },
    text: {
      // Título principal
      "title-fondo-marca": "Gatuna Arena Premium<br/>Aroma lavanda",
      // Lista de pesos
      "list-kg": `<h3 class="gotham white">4kg</h3>
       <h3 class="gotham white">15kg</h3>`,
      // Descripción corta
      "description-fondo-marca":
        "La arena para gatos Gatuna está hecha de arcilla natural que forma grumos duros para facilitar la recogida. Los gránulos crean una potente unión para retener la humedad y evitar que cualquier líquido llegue al fondo de la caja de arena.",
      // Subtítulo imagen
      "description-marca-text":
        "Hecha de arcilla natural que forma grumos duros para facilitar la limpieza",
      // Texto dentro de .arena
      "cat-image-text-1": "Apta para alérgicos",
      "cat-image-text-2": "libre de polvo, proteínas vegetales y fragancias",
      // Texto en versión móvil
      "cat-image-text-3": "Apta para alérgicos",
      "cat-image-text-4": "libre de polvo, proteínas vegetales y fragancias",
      /* CHAT */
      "chat-container": ` <div class="chat-bubble right col-md-7 light" style="display: flex;align-items: center;" >con aroma Lavanda <img src="https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/gatuna/premium/aroma.png" style="width:32px;height:32px" alt='london Básica' class='logo-marca ml-2'/></div>
        <div class="chat-bubble left col-md-7 dark">
      Genera menos suciedad y evita que la arena se disperse.
        </div>
        <div class="chat-bubble right col-md-7 light">
         Formulada para neutralizar olores rápidamente
        </div>
       `,
    },
    video: {
      isVideo: false,
      src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/gatuna/premium/video.png",
    },
    extra: [
      {
        src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/london/basica.svg",
        urlRedirect: "/item-marca.html?brand=london&category=basica",
      },
      {
        src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/hey/basica.svg",
        urlRedirect: "/item-marca.html?brand=hey&category=basica",
      },
      {
        src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/pipicat/premium.svg",
        urlRedirect: "/item-marca.html?brand=pipicat&category=premium",
      },
    ],
  },
  "super-pipicat": {
    colors: {
      light: "#ACCD72",
      dark: "#888C8D",
    },
    text: {
      // Título principal
      "title-fondo-marca":
        "Pipicat Arena<br/>sanitaria  Super<br/>Premium<br/>Aroma neutro",
      // Lista de pesos
      "list-kg": `<h3 class="gotham white">10kg</h3>
       <h3 class="gotham white">20kg</h3>`,
      // Descripción corta
      "description-fondo-marca":
        "Proporciona un control de los olores durante todo el período de uso en el arenero, es decir, que neutraliza cualquier mal aroma que pueda emanar desde su baño.",
      // Subtítulo imagen
      "description-marca-text": "Neutraliza el olor a pipí",
      // Texto dentro de .arena
      "cat-image-text-1": "Tecnología especial de neutralización de olores",
      "cat-image-text-2": "combate los fuertes olores a amoníaco al instante.",
      // Texto en versión móvil
      "cat-image-text-3": "Tecnología especial de neutralización de olores",
      "cat-image-text-4": "combate los fuertes olores a amoníaco al instante.",
      /* CHAT */
      "chat-container": ` <div class="chat-bubble right col-md-7 light" style="display: flex;align-items: center;" >con aroma Neutro <img src="https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/pipicat/super/aroma.png" style="width:32px;height:32px" alt='london Básica' class='logo-marca ml-2'/></div>
        <div class="chat-bubble left col-md-7 dark">
     Libre de químicos que no saturará el espacio de la casa
        </div>
        <div class="chat-bubble right col-md-7 light">
         Encapsula los olores y los retine eficientemente.
        </div>
         <div class="chat-bubble left col-md-7 dark">
    <strong>Mira el siguiente video</strong>
        </div>
       `,
    },
    video: {
      isVideo: false,
      src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/pipicat/super/video.svg",
    },
    extra: [
      {
        src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/london/basica.svg",
        urlRedirect: "/item-marca.html?brand=london&category=black",
      },

      {
        src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/gatuna/premium.svg",
        urlRedirect: "/item-marca.html?brand=gatuna&category=premium",
      },
      {
        src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/hey/basica.svg",
        urlRedirect: "/item-marca.html?brand=hey&category=basica",
      },
    ],
  },
  "black-london": {
    colors: {
      light: "#A8A5B3",
      dark: "#313B5C",
    },
    text: {
      // Título principal
      "title-fondo-marca":
        "London Cats<br/>Black Arena<br/>sanitaria con<br/>carbón activo",
      // Lista de pesos
      "list-kg": `<h3 class="gotham white">10kg</h3>
       <h3 class="gotham white">20kg</h3>`,
      // Descripción corta
      "description-fondo-marca":
        "Está compuesta por bentonita integrada con carbón activado (Carconita), ambos materiales naturales que garantizan una excelente capacidad de retención de líquidos y control de olores.",
      // Subtítulo imagen
      "description-marca-text":
        "Alta absorción de amonio, eliminador de olor ambiental, antibacterial y libre de polvo",
      // Texto dentro de .arena
      "cat-image-text-1": "Intensa acción aglomerante",
      "cat-image-text-2": "",
      // Texto en versión móvil
      "cat-image-text-3": "Intensa acción aglomerante",
      "cat-image-text-4": "",
      /* CHAT */
      "chat-container": ` <div class="chat-bubble right col-md-7 light" style="display: flex;align-items: center;" >con aroma Carbon <img src="https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/london/black/aroma.png" style="width:32px;height:32px" alt='london Básica' class='logo-marca ml-2'/></div>
        <div class="chat-bubble left col-md-7 dark">
    La carconita proporcionar un ambiente más limpio, fresco y de alta seguridad para los gatos.
        </div>
        <div class="chat-bubble right col-md-7 light">
        Alta absorción de amonio, eliminador de olor ambiental, antibacterial y libre de polvo.
        </div>
         <div class="chat-bubble left col-md-7 dark">
    <strong>Mira el siguiente video</strong>
        </div>
       `,
    },

    video: {
      isVideo: true,
      src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/video/london-black.mp4",
    },
    extra: [
      {
        src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/gatuna/premium.svg",
        urlRedirect: "/item-marca.html?brand=gatuna&category=premium",
      },
      {
        src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/pipicat/premium.svg",
        urlRedirect: "/item-marca.html?brand=pipicat&category=premium",
      },
      {
        src: "https://stalwart-faloodeh-22bebe.netlify.app/public/assets/svg/marcas/web/pipicat/super.svg",
        urlRedirect: "/item-marca.html?brand=pipicat&category=super",
      },
    ],
  },
};

// pageMapping.js
