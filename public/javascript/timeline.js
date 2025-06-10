// timeline.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".timeline");
  const svg = container.querySelector(".timeline-svg");
  const path = svg.querySelector(".timeline-path");
  const circles = Array.from(container.querySelectorAll(".circle"));

  function drawCurve() {
    // Ajustamos el viewBox
    const {
      width,
      height,
      top: cTop,
      left: cLeft,
    } = container.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

    // Obtengo centros de los círculos
    const pts = circles.map((c) => {
      const r = c.getBoundingClientRect();
      return {
        x: r.left + r.width / 2 - cLeft,
        y: r.top + r.height / 2 - cTop,
      };
    });

    // Construyo el atributo d usando cubics
    let d = `M ${pts[0].x},${pts[0].y} `;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i],
        p1 = pts[i + 1];
      // control points: manejando curva suave
      const dx = (p1.x - p0.x) * 1;
      const dy = (p1.y - p0.y) * 1;
      const c1x = p0.x + dx,
        c1y = p0.y;
      const c2x = p1.x - dx,
        c2y = p1.y;
      d += `C ${c1x},${c1y} ${c2x},${c2y} ${p1.x},${p1.y} `;
    }

    path.setAttribute("d", d.trim());
  }

  drawCurve();
  window.addEventListener("resize", drawCurve);
});
