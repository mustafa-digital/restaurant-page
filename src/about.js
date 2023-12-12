import aboutBgImgSrc from "./assets/loren-biser-irDMyeyV4QE-unsplash-transparent.png";

export function createAboutTab() {
    // clear the current tab
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = "";

    // set class about-page to the content div
    contentDiv.setAttribute("class", "about-page");

    // create a wrapper for the whole content section
    const aboutWrapper = document.createElement("div");
    aboutWrapper.setAttribute("class", "about-wrapper");

    // create a wrapper for the scroll image, as well as the text
    const bgImgWrapper = document.createElement("div");
    bgImgWrapper.style.backgroundImage = `url(${aboutBgImgSrc})`;
    bgImgWrapper.setAttribute("class", "about-img-wrapper");
    aboutWrapper.appendChild(bgImgWrapper);

    // create a div for the text portion of the page, which will be on the image
    const aboutTextWrapper = document.createElement("div");
    aboutTextWrapper.setAttribute("class", "about-text-wrapper");
    bgImgWrapper.appendChild(aboutTextWrapper);

    // create the heading
    const aboutHeading = document.createElement("h1");
    aboutHeading.textContent = "WHO WE ARE";
    aboutHeading.setAttribute("class", "about-text about-heading");
    aboutTextWrapper.appendChild(aboutHeading);

    // create the body text
    const aboutBody = document.createElement("p");
    aboutBody.textContent = "We are a pirate crew with a passion for seafood and a love for cooking delicious dishes that are the envy of the Seven Seas. Our skilled chefs expertly prepare the freshest catches of the day, from succulent grilled fish to mouth-watering seafood stews. As a crew, we are known for our unwavering commitment to quality, exceptional taste, and our ability to turn any meal into a memorable experience. So come aboard and join us for a culinary adventure that will leave you craving for more.";
    aboutBody.setAttribute("class", "about-text about-body");
    aboutTextWrapper.appendChild(aboutBody);

    contentDiv.appendChild(aboutWrapper);
}