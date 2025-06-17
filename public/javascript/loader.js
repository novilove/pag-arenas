// loader.js
const imageUrls = [
  "../assets/loading_novi/Container.svg",
  "../assets/loading_novi/Container-1.svg",
  "../assets/loading_novi/Container-2.svg",
  "../assets/loading_novi/Container-3.svg",
];

function setLoading(loading) {
  const loader = document.getElementById("page-loader");
  const content = document.getElementById("page-content");
  if (loading) {
    loader.classList.remove("hidden");
    content.classList.remove("visible");

    loader.classList.add("visible");
    content.classList.add("hidden");
    /*    console.log("Loader visible"); */
  } else {
    content.classList.remove("hidden");
    loader.classList.remove("visible");

    loader.classList.add("hidden");
    content.classList.add("visible");

    /*     console.log("Loader ocultado"); */
  }
}
export { setLoading };
