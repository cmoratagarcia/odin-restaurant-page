function homePage() {
  const container = document.getElementById("content");
  const section = document.createElement("section");
  section.classList.add("hero-section");

  const heroContent = document.createElement("div");
  heroContent.classList.add("hero-content");
  heroContent.innerHTML =
    "<h1>Welcome to Our Restaurant</h1>" +
    "<p>Delicious food served with love.</p>";

  section.appendChild(heroContent);
  container.appendChild(section);

  return container;
}

export default homePage;
