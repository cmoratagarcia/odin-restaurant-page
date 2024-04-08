import "./style.css";
import homepage from "./homepage.js";
import menu from "./menu.js";
import contact from "./contact.js";

const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => {
  handleClick(homepage);
});
const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", () => {
  handleClick(menu);
});
const contactBtn = document.getElementById("contact-btn");
contactBtn.addEventListener("click", () => {
  handleClick(contact);
});
const content = document.getElementById("content");
content.appendChild(homepage());

function handleClick(selectedPage) {
  content.innerHTML = "";
  content.appendChild(selectedPage());
}
