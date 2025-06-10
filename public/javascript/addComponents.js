export async function addComponent(id, url) {
  const target = document.getElementById(id);
  if (!target) throw new Error(`No existe #${id} para inyectar ${url}`);

  const res = await fetch(url);
  const html = await res.text();
  target.innerHTML = html;

  // Devolvemos el elemento para quien lo llame si lo necesita
  return target;
}

export function addNavFunc() {
  const hamburger = document.querySelector(".navbar__hamburger");
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".sidebar__close");
  const links = document.querySelectorAll(
    ".sidebar__links a, .navbar__links a"
  );

  // abre/cierra sidebar
  hamburger.addEventListener("click", () => sidebar.classList.add("open"));
  closeBtn.addEventListener("click", () => sidebar.classList.remove("open"));
  links.forEach((link) =>
    link.addEventListener("click", () => sidebar.classList.remove("open"))
  );

  // establece la clase active según la URL actual
  function setActiveLink() {
    const currentPath = window.location.pathname;
    links.forEach((link) => {
      const linkPath = link.getAttribute("href");
      link.classList.toggle("active", linkPath === currentPath);
    });
  }

  // al cargar la página
  setActiveLink();
  // opcional: si usas history.pushState para cambiar ruta sin recarga
  window.addEventListener("popstate", setActiveLink);
}
