import { createHomeTab } from "./home";
import { createMenuTab } from "./menu";
import { createAboutTab } from "./about";
import { createContactTab } from "./contact";
import "./style.css";

document.addEventListener("DOMContentLoaded", createHomeTab);

const homeButton = document.querySelector(".home-side-title");
homeButton.addEventListener("click", createHomeTab);

const menuButton = document.querySelector(".home-menu-btn");
menuButton.addEventListener("click", createMenuTab);

const aboutButton = document.querySelector(".home-about-btn");
aboutButton.addEventListener("click", createAboutTab);

const contactButton = document.querySelector(".home-contact-btn");
contactButton.addEventListener("click", createContactTab);