import contactBgImgSrc from "./assets/loren-biser-irDMyeyV4QE-unsplash-transparent.png";

export function createContactTab() {
    // clear the current tab
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = "";

    // set class about-page to the content div
    contentDiv.setAttribute("class", "contact-page");

    // create a wrapper for the whole content section
    const contactWrapper = document.createElement("div");
    contactWrapper.setAttribute("class", "contact-wrapper");

    // create a wrapper for the scroll image, as well as the text
    const contactContentWrapper = document.createElement("div");
    contactContentWrapper.style.backgroundImage = `url(${contactBgImgSrc})`;
    contactContentWrapper.setAttribute("class", "contact-content");
    contactWrapper.appendChild(contactContentWrapper);

    // create a div for the text portion of the page, which will be on the image
    const contactTextWrapper = document.createElement("div");
    contactTextWrapper.setAttribute("class", "contact-text-wrapper");
    contactContentWrapper.appendChild(contactTextWrapper);


    contentDiv.appendChild(contactWrapper);

}