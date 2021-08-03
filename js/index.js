const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const navBar = document.querySelectorAll(".container a");
navBar[0].href = siteContent["nav"]["nav-item-1"];
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].href = siteContent["nav"]["nav-item-2"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].href = siteContent["nav"]["nav-item-3"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].href = siteContent["nav"]["nav-item-4"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].href = siteContent["nav"]["nav-item-5"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].href = siteContent["nav"]["nav-item-6"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];

// Nav color change

navBar.forEach((item) => (item.style.color = "green"));

// Top Section

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"]; // './img/header-img.png';

const headline = document.querySelector(".cta-text h1");
headline.textContent = siteContent["cta"]["h1"]; // 'DOM IS AWESOME';

const buttonName = document.querySelector(".cta-text button");
buttonName.textContent = siteContent["cta"]["button"];

// New Elements Added

const newH2 = document.createElement("h2");
const newP = document.createElement("p");
newH2.textContent = "DOM is fun";
newP.textContent = "Lets not use innerHTML in our code";
document.querySelector(".main-content").prepend(newH2);
document.querySelector(".main-content").appendChild(newP);

// Above the Mid-Photo Content

const topContentH4 = document.querySelectorAll(".top-content h4");
topContentH4[0].textContent = siteContent["main-content"]["features-h4"];
topContentH4[1].textContent = siteContent["main-content"]["about-h4"];

const topContentP = document.querySelectorAll(".top-content p");
topContentP[0].textContent = siteContent["main-content"]["features-content"];
topContentP[1].textContent = siteContent["main-content"]["about-content"];

// Below the Mid-Photo Content

const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"]; // './img/mid-page-accent.jpg';

const bottomContentH4 = document.querySelectorAll(".bottom-content h4");
bottomContentH4[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentH4[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentH4[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomContentP = document.querySelectorAll(".bottom-content p");
bottomContentP[0].textContent = siteContent["main-content"]["services-content"];
bottomContentP[1].textContent = siteContent["main-content"]["product-content"];
bottomContentP[2].textContent = siteContent["main-content"]["vision-content"];

// Contact Section

const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

// Footer Section
const copywriteInfo = document.querySelector("footer p");
copywriteInfo.textContent = siteContent["footer"]["copyright"];
