import { createHomeTab } from "./home";
import { createMenuTab } from "./menu";
import "./style.css";

document.addEventListener("DOMContentLoaded", createHomeTab);

const menuButton = document.querySelector(".home-menu-btn");
menuButton.addEventListener("click", createMenuTab);
