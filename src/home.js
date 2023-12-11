import "./style.css";
import { createMenuTab } from "./menu";
import seafoodImgSrc from "./assets/crab-7144038.svg";
import uberEatsImgSrc from "./assets/uber-eats-logo.png";
import doorDashImgSrc from "./assets/doordash-logo.png";
import waveImgSrc from "./assets/wave4.svg";

export function createHomeTab() {
    const div = document.getElementById("content");
    div.setAttribute("class", "home-page");

    // create the right side of the page, containing a hero and links to order online
    const divHomeIntro = document.createElement("div");
    divHomeIntro.setAttribute("class", "home-intro");

    // wave svg images 
    const wave1 = new Image();
    wave1.src = waveImgSrc;
    wave1.setAttribute("class", "home-wave-img wave-1");

    const wave2 = new Image();
    wave2.src = waveImgSrc;
    wave2.setAttribute("class", "home-wave-img wave-2");

    divHomeIntro.appendChild(wave1);
    divHomeIntro.appendChild(wave2);

    const introTitle = document.createElement("h1");
    introTitle.setAttribute("class", "home-intro-title");
    introTitle.textContent = "IT'S TIME TO ";
    divHomeIntro.appendChild(introTitle);

    const introContent = document.createElement("h3");
    introContent.textContent = "We have the best seafood in town!";
    introContent.setAttribute("class", "home-intro-content");
    divHomeIntro.appendChild(introContent);

    const orderLinksDiv = document.createElement("div");
    orderLinksDiv.setAttribute("class", "order-links");
    divHomeIntro.appendChild(orderLinksDiv);

    const orderOnlinePara = document.createElement("p");
    orderOnlinePara.textContent = "Order online today!"
    orderOnlinePara.setAttribute("class", "order-online-text");
    orderLinksDiv.appendChild(orderOnlinePara);

    const uberEatsImg = new Image();
    uberEatsImg.src = uberEatsImgSrc;
    uberEatsImg.setAttribute("class", "order-link-logo");
    orderLinksDiv.appendChild(uberEatsImg);

    const doorDashImg = new Image();
    doorDashImg.src = doorDashImgSrc;
    doorDashImg.setAttribute("class", "order-link-logo doordash-logo");
    orderLinksDiv.appendChild(doorDashImg);

    div.appendChild(divHomeIntro);
}