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

    // create divs for location, hours of business, and contact info
    const hoursDiv = document.createElement("div");
    hoursDiv.setAttribute("class", "contact-text hours-div");
    contactTextWrapper.appendChild(hoursDiv);

    const hoursHeader = document.createElement("h2");
    hoursHeader.textContent = "Hours of Business";
    hoursHeader.setAttribute("class", "hours-header");
    hoursDiv.appendChild(hoursHeader);

    const hoursList = document.createElement("ul");
    hoursList.setAttribute("class", "hours-list");
    hoursDiv.appendChild(hoursList);

    const hoursMon = document.createElement("li");
    hoursMon.textContent = "Monday - 11am to 8pm";
    const hoursTue = document.createElement("li");
    hoursTue.textContent = "Tuesday - 11am to 8pm";
    const hoursWed = document.createElement("li");
    hoursWed.textContent = "Wednesday - 11am to 8pm";
    const hoursThu = document.createElement("li");
    hoursThu.textContent = "Thursday - 11am to 8pm";
    const hoursFri = document.createElement("li");
    hoursFri.textContent = "Friday - 11am to 7pm";
    const hoursSat = document.createElement("li");
    hoursSat.textContent = "Saturday - 3pm to 8pm";
    const hoursSun = document.createElement("li");
    hoursSun.textContent = "Sunday - 3pm to 8pm";

    hoursList.appendChild(hoursMon);
    hoursList.appendChild(hoursTue);
    hoursList.appendChild(hoursWed);
    hoursList.appendChild(hoursThu);
    hoursList.appendChild(hoursFri);
    hoursList.appendChild(hoursSat);
    hoursList.appendChild(hoursSun);

    const locationDiv = document.createElement("div");
    locationDiv.setAttribute("class", "contact-text location-div");
    contactTextWrapper.appendChild(locationDiv);

    const locationHeader = document.createElement("h3");
    locationHeader.textContent = "Location";
    locationDiv.appendChild(locationHeader);

    const locationBody = document.createElement("p");
    locationBody.textContent = "1313 Middle of Nowhere, Atlantic Ocean";
    locationDiv.appendChild(locationBody);

    const contactDiv = document.createElement("div");
    contactDiv.setAttribute("class", "contact-text contact-div");
    contactTextWrapper.appendChild(contactDiv);

    const contactHeader = document.createElement("h3");
    contactHeader.textContent = "Contact";
    contactDiv.appendChild(contactHeader);
    
    const contactInfoWrapper = document.createElement("div");
    contactDiv.appendChild(contactInfoWrapper);

    const contactPhone = document.createElement("p");
    contactPhone.textContent = "555-555-1111";
    contactInfoWrapper.appendChild(contactPhone);

    const contactEmail = document.createElement("p");
    contactEmail.textContent = "fakeemail@notreal.com";
    contactInfoWrapper.appendChild(contactEmail);
    

    contentDiv.appendChild(contactWrapper);
}