function contact() {
  const container = document.createElement("div");
  container.classList.add("container");

  container.innerHTML = `<h2>Contact Us</h2>
  <p>123 Restaurant Street, Cityville</p>
  <p>Phone: 123-456-7890</p>
  <p>Email: info@restaurant.com</p>`;

  return container;
}

export default contact;
