
function createMenuItem(name, price, description="") {
    const menuItem = document.createElement("div");
    menuItem.setAttribute("class", "menu-item");

    const itemName = document.createElement("div");
    itemName.setAttribute("class", "menu-name");
    itemName.textContent = name;
    menuItem.appendChild(itemName);
    
    const itemPrice = document.createElement("span");
    itemPrice.setAttribute("class", "menu-price");
    itemPrice.textContent = price;
    menuItem.appendChild(itemPrice);


    const itemDescription = document.createElement("div");
    itemDescription.setAttribute("class", "menu-description");
    itemDescription.textContent = description;
    menuItem.appendChild(itemDescription);

    return menuItem;
}

function createAppetizerMenu() {
    const menuSection = document.querySelector(".menu-section");
    
    if (!(menuSection.classList.contains("menu-appetizer"))){
        const appetizerLink = document.querySelector(".appetizer-link");
        const menuList = document.querySelector(".menu-list");
        const menuTitle = document.querySelector(".menu-title");

        // reset previous choices
        menuList.textContent = "";

        // select current link
        const menuLinks = document.querySelectorAll(".menu-link");
        menuLinks.forEach(link => link.classList.remove("menu-selected"));
        appetizerLink.classList.add("menu-selected");
        menuSection.setAttribute("class", "menu-section menu-appetizer");
        
        // set new menu title
        menuTitle.textContent = "Appetizers & Salads";

        // create menu item divs
        menuList.appendChild(createMenuItem("Fries", "5.49", "Golden, crispy fries"));
        menuList.appendChild(createMenuItem("Garlic Bread", "6.49"));
        menuList.appendChild(createMenuItem("Cheesy Bread", "6.49"));
        menuList.appendChild(createMenuItem("Breaded Shrimp", "9.99", "with marinara sauce"));
        menuList.appendChild(createMenuItem("Coconut Shrimp", "10.99", "with tartar sauce"));
        menuList.appendChild(createMenuItem("Poutine", "6.49", "Delicious fries topped with gravy and fresh cheese curds"));
        menuList.appendChild(createMenuItem("Sweet Potato Fries", "5.49", "with spicy mayo"));
        menuList.appendChild(createMenuItem("Onion Rings", "6.99"));
    }
}

function createFACMenu() {
    const menuSection = document.querySelector(".menu-section");

    if (!(menuSection.classList.contains("menu-fac"))){
        const FACLink = document.querySelector(".fac-link");
        const menuList = document.querySelector(".menu-list");
        const menuTitle = document.querySelector(".menu-title");

        // reset previous choices
        menuList.textContent = "";

        // select current link
        const menuLinks = document.querySelectorAll(".menu-link");
        menuLinks.forEach(link => link.classList.remove("menu-selected"));
        FACLink.classList.add("menu-selected");
        menuSection.setAttribute("class", "menu-section menu-fac");
        
        // set new menu title
        menuTitle.textContent = "Fish and Chips";

        // create menu items and add them to the menu list section
        menuList.appendChild(createMenuItem("Haddock (1 Pc)", "10.49"));
        menuList.appendChild(createMenuItem("Haddock (2 Pc)", "14.99"));
        menuList.appendChild(createMenuItem("Cod (1 Pc)", "14.49"));
        menuList.appendChild(createMenuItem("Cod (2 Pc)", "18.49"));
        menuList.appendChild(createMenuItem("Halibut (1 Pc)", "10.49"));
        menuList.appendChild(createMenuItem("Halibut (2 Pc)", "14.99"));
        menuList.appendChild(createMenuItem("Pollock (1 Pc)", "10.49"));
        menuList.appendChild(createMenuItem("Pollock (2 Pc)", "14.99"));

    }
}

function createCombosMenu() {
    const menuSection = document.querySelector(".menu-section");

    if (!(menuSection.classList.contains("menu-combos"))){
        const combosLink = document.querySelector(".combos-link");
        const menuList = document.querySelector(".menu-list");
        const menuTitle = document.querySelector(".menu-title");

        // reset previous choices
        menuList.textContent = "";

        // select current link
        const menuLinks = document.querySelectorAll(".menu-link");
        menuLinks.forEach(link => link.classList.remove("menu-selected"));
        combosLink.classList.add("menu-selected");
        menuSection.setAttribute("class", "menu-section menu-combos");
        
        // set new menu title
        menuTitle.textContent = "Seafood Combos";

        // create menu items and add them to the menu list section
        menuList.appendChild(createMenuItem("Shrimp Platter", "18.99", "10 pieces of grilled shrimp on a plate of fried rice"));
        menuList.appendChild(createMenuItem("Seafood Sampler", "27.99", "2 pieces of your choice of fish, 5 pieces of shrimp, and any 2 appetizers"));
    }
}

function createSandwichMenu() {
    const menuSection = document.querySelector(".menu-section");

    if (!(menuSection.classList.contains("menu-sandwich"))){
        const sandwichesLink = document.querySelector(".sandwiches-link");
        const menuList = document.querySelector(".menu-list");
        const menuTitle = document.querySelector(".menu-title");

        // reset previous choices
        menuList.textContent = "";

         // select current link
         const menuLinks = document.querySelectorAll(".menu-link");
         menuLinks.forEach(link => link.classList.remove("menu-selected"));
         sandwichesLink.classList.add("menu-selected");
         menuSection.setAttribute("class", "menu-section menu-sandwich");
         
         // set new menu title
         menuTitle.textContent = "Sandwiches & Burgers";

        // create menu items and add them to the menu list section
        menuList.appendChild(createMenuItem("Fish Burger", "15.25", "Breaded haddock with lettuce, tomato and mayo"));
        menuList.appendChild(createMenuItem("Chicken Breast Burger", "12.29", "Grilled chicken breast with lettuce and tomato on a sesame bun"));
        menuList.appendChild(createMenuItem("Shrimp Wrap", "12.49", "Breaded shrimp with lettuce, pickles and tartar sauce in a pita wrap"));
        menuList.appendChild(createMenuItem("Chicken Wrap", "11.49", "Grilled chicken pieces with lettuce and mayo wrapped in pita"));
    }
}

export function createMenuTab() {
    // clear the current tab
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = "";

    // set class of #content to get menu page styles
    contentDiv.setAttribute("class", "menu-page");

    // create the div that contains the meals
    const menuWrapper = document.createElement("div");
    menuWrapper.setAttribute("class", "menu-wrapper");

    //create the menu selector links and add event listeners to them to change the menu list
    const menuSelector = document.createElement("div");
    menuSelector.setAttribute("class", "menu-selector");
    menuWrapper.appendChild(menuSelector);

    // create appetizer link and add event listener
    const menuLinkAppetizer = document.createElement("a");
    menuLinkAppetizer.textContent = "Appetizers & Salads";
    menuLinkAppetizer.setAttribute("class", "menu-link appetizer-link");
    menuSelector.appendChild(menuLinkAppetizer);
    menuLinkAppetizer.addEventListener("click", createAppetizerMenu);

    // create fish n chips link
    const menuLinkFAC = document.createElement("a");
    menuLinkFAC.textContent = "Fish and Chips";
    menuLinkFAC.setAttribute("class", "menu-link fac-link");
    menuSelector.appendChild(menuLinkFAC);
    menuLinkFAC.addEventListener("click", createFACMenu);

    // create seafood combos link
    const menuLinkCombos = document.createElement("a");
    menuLinkCombos.textContent = "Seafood Combos";
    menuLinkCombos.setAttribute("class", "menu-link combos-link");
    menuSelector.appendChild(menuLinkCombos);
    menuLinkCombos.addEventListener("click", createCombosMenu);

    // create sandwiches link
    const menuLinkSandwiches = document.createElement("a");
    menuLinkSandwiches.textContent = "Sandwiches & Burgers";
    menuLinkSandwiches.setAttribute("class", "menu-link sandwiches-link");
    menuSelector.appendChild(menuLinkSandwiches);
    menuLinkSandwiches.addEventListener("click", createSandwichMenu);

    // create divs for where the menu items appear
    const menuSection = document.createElement("section");
    menuSection.setAttribute("class", "menu-section");
    menuWrapper.appendChild(menuSection);

    const menuTitle = document.createElement("header");
    menuTitle.setAttribute("class", "menu-title");
    menuSection.appendChild(menuTitle);

    const menuList = document.createElement("div");
    menuList.setAttribute("class", "menu-list");
    menuSection.appendChild(menuList);

    contentDiv.appendChild(menuWrapper);

    // this is called so that appetizer shows on initial "Menu" button click
    createAppetizerMenu();
}