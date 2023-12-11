import "./style.css";

export function createMenuTab(e) {
    // clear the current tab
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = "";

    // set class of #content to get menu page styles
    contentDiv.setAttribute("class", "menu-page");

    // create the div that contains the meals
    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("class", "menu-div");



    contentDiv.appendChild(menuDiv);
}