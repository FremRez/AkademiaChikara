function renderRoot(linkId) {
  // ----- Navbar ----- //

  const navbar = document.createElement("nav");

  // ----- Miejsce na content ----- //
  const navbarItemsContainer = document.createElement("div");
  navbarItemsContainer.id = "nav-items-container";
  navbar.appendChild(navbarItemsContainer);

  // ----- /Respo/ Miejsce na content ----- //
  const resMenu = document.createElement("div");
  resMenu.id = "responsive-menu";
  navbar.appendChild(resMenu);

  const resMenuLinks = document.createElement("div");
  resMenuLinks.id = "responsive-menu-list";
  resMenu.appendChild(resMenuLinks);

  // ----- Podłączenie całego navbara ----- //
  document.body.insertAdjacentElement("afterbegin", navbar);

  // ----- Content (linki i ion-icon) ----- //
  const navbarLinksTable = [
    {
      id: "homePageLink",
      href: "/",
      content: "Strona główna",
    },
    {
      id: "newsPageLink",
      href: "../newsPage/newspage.html",
      content: "Aktualności",
    },
    {
      id: "campPageLink",
      href: "../campPage/camp.html",
      content: "Obozy i półkolonie",
    },
    {
      id: "pricingPageLink",
      href: "../pricingPage/pricing.html",
      content: "Cennik",
    },
    {
      id: "contactPageLink",
      href: "../contactInfo/contact.html",
      content: "Kontakt",
    },
  ];

  navbarLinksTable.forEach((element) => {
    const links = document.createElement("a");
    links.classList.add("menu-option");
    links.id = element.id;
    links.textContent = element.content;
    links.href = element.href;
    navbarItemsContainer.appendChild(links);
  });
  const menuIcon = document.createElement("ion-icon");
  menuIcon.id = "menu-icon";
  menuIcon.name = "menu-outline";
  navbarItemsContainer.appendChild(menuIcon);

  // ----- Content (harmonogram) ----- //
  const schedule = document.createElement("span");
  const news = document.querySelector("#newsPageLink");

  schedule.classList.add("menu-option");
  schedule.id = "schedulePageLinks";
  schedule.textContent = "Harmonogram treninów";
  news.insertAdjacentElement("afterend", schedule);

  const scheduleList = document.createElement("div");
  scheduleList.id = "menu-training-list";
  schedule.appendChild(scheduleList);

  const scheduleListItems = ["Karate", "Krav Maga", "Grupa niepełnosprawnych"];
  scheduleListItems.forEach((item) => {
    const listItem = document.createElement("a");
    listItem.href = "../trainingSchedule/schedule.html";
    listItem.textContent = item;
    if (item == "Krav Maga") {
      listItem.href = "https://kravmaga-podkarpacie.pl/rzeszow-centrum/";
      listItem.target = "_blank";
    }
    scheduleList.appendChild(listItem);
  });

  // ----- /Respo/ Content (linki i ion-icon) ----- //
  const closeMenuIcon = document.createElement("ion-icon");
  closeMenuIcon.id = "close-menu-icon";
  closeMenuIcon.name = "close-outline";
  resMenuLinks.appendChild(closeMenuIcon);

  const navbarResponsiveLinksTable = [
    {
      href: "../homePage/homepage.html",
      content: "Strona główna",
    },
    {
      href: "../newsPage/newspage.html",
      content: "Aktualności",
    },
    {
      href: "../campPage/camp.html",
      content: "Obozy i półkolonie",
    },
    {
      href: "../pricingPage/pricing.html",
      content: "Cennik",
    },
    {
      href: "../contactInfo/contact.html",
      content: "Kontakt",
    },
  ];
  navbarResponsiveLinksTable.forEach((element) => {
    const links = document.createElement("a");
    links.classList.add("res-menu-option");
    links.textContent = element.content;
    links.href = element.href;
    resMenuLinks.appendChild(links);
  });

  // ----- /Respo/ Content (harmonogram) ----- //
  const showTrainingList = document.createElement("div");
  showTrainingList.classList.add("show-training-list", "res-menu-option");
  const insertNews = document.querySelector("#responsive-menu a:nth-child(3)");
  insertNews.insertAdjacentElement("afterend", showTrainingList);

  const resSchedule = document.createElement("div");
  resSchedule.id = "res-menu-training-schedule";
  showTrainingList.appendChild(resSchedule);

  const resScheduleContent = document.createElement("p");
  resScheduleContent.textContent = "Harmonogram treningów";
  resSchedule.appendChild(resScheduleContent);

  const resScheduleIcon = document.createElement("ion-icon");
  resScheduleIcon.name = "chevron-down-outline";
  resSchedule.appendChild(resScheduleIcon);

  const resScheduleList = document.createElement("div");
  resScheduleList.classList.add("res-menu-training-list", "hidden");
  showTrainingList.appendChild(resScheduleList);

  const resScheduleListItems = [
    "Karate",
    "Krav Maga",
    "Grupa niepełnosprawnych",
  ];
  resScheduleListItems.forEach((item) => {
    const listItem = document.createElement("a");
    listItem.href = "../trainingSchedule/schedule.html";
    listItem.textContent = item;
    if (item == "Krav Maga") {
      listItem.href = "https://kravmaga-podkarpacie.pl/rzeszow-centrum/";
      listItem.target = "_blank";
    }
    resScheduleList.appendChild(listItem);
  });

  // ---- Logo ---- //
  const chikaraLogoLink = document.createElement("a");
  const chikaraLogoNavbar = document.createElement("img");
  chikaraLogoLink.href = "https://akademiachikara.pl/";
  chikaraLogoNavbar.src = "../Logo.png";
  chikaraLogoNavbar.id = "navbar-logo";
  chikaraLogoLink.appendChild(chikaraLogoNavbar);
  schedule.insertAdjacentElement("afterend", chikaraLogoLink);

  // ----- Kod obsługujący navbar ----- //
  const menuButton = document.querySelector("#menu-icon");
  const responsiveMenu = document.querySelector("#responsive-menu");
  const closeMenuButton = document.querySelector("#close-menu-icon");
  const showMenuTrainingListButton = document.querySelector(
    ".show-training-list"
  );
  const menuTrainingList = document.querySelector(".res-menu-training-list");

  menuButton.addEventListener("click", () => {
    responsiveMenu.style.setProperty("display", "flex");
  });

  closeMenuButton.addEventListener("click", () => {
    responsiveMenu.style.setProperty("display", "none");
  });

  showMenuTrainingListButton.addEventListener("click", () => {
    menuTrainingList.classList.toggle("hidden");
  });

  const scheduleLinksTable = document.querySelectorAll(
    "#menu-training-list a, .res-menu-training-list a"
  );
  scheduleLinksTable.forEach((link) => {
    link.addEventListener("click", () => {
      localStorage.removeItem("chosenSchedule");
      localStorage.setItem("chosenSchedule", link.textContent);
    });
  });

  const chosenNavLink = document.querySelectorAll(".menu-option");
  chosenNavLink.forEach((link) => {
    if (linkId == link.id) {
      link.classList.add("selected-menu-option");
    }
  });

  // ----- Footer ---- //

  const footer = document.createElement("footer");

  // ----- Podłączenie całego footera ----- //
  document.body.insertAdjacentElement("beforeend", footer);

  // ----- Logo ----- //
  const chikaraLogoFooter = document.createElement("img");
  chikaraLogoFooter.src = "../Logo.png";
  chikaraLogoFooter.classList.add("footer-chikara-logo");
  footer.appendChild(chikaraLogoFooter);

  // ----- Content ----- //
  const footerItemsContainer = document.createElement("div");
  footerItemsContainer.classList.add("footer-items-container");
  footer.appendChild(footerItemsContainer);

  const location = document.createElement("p");
  const locationIcon = document.createElement("ion-icon");
  locationIcon.name = "location-outline";
  location.textContent = "35-103 Rzeszów, ul. Hanasiewicza 10";
  location.insertAdjacentElement("afterbegin", locationIcon);
  footerItemsContainer.appendChild(location);

  const call = document.createElement("div");
  call.classList.add("footer-call");
  let numbersTable = ["781 231 014", "605 828 755"];
  numbersTable.forEach((number) => {
    const numbers = document.createElement("p");
    const numbersIcon = document.createElement("ion-icon");
    numbersIcon.name = "call-outline";
    numbers.textContent = number;
    numbers.insertAdjacentElement("afterbegin", numbersIcon);
    call.appendChild(numbers);
  });
  footerItemsContainer.appendChild(call);

  const mail = document.createElement("p");
  const mailIcon = document.createElement("ion-icon");
  mailIcon.name = "mail-outline";
  mail.textContent = "karate.rzeszow@gmail.com";
  mail.insertAdjacentElement("afterbegin", mailIcon);
  footerItemsContainer.appendChild(mail);

  const socials = document.createElement("div");
  socials.classList.add("footer-social-media");
  let socialsTable = [
    {
      icon: "logo-facebook",
      link: "https://www.facebook.com/AkademiaSportuChikara/?ref=bookmarks",
    },
    {
      icon: "logo-youtube",
      link: "https://www.youtube.com/@chikaratv",
    },
    {
      icon: "logo-instagram",
      link: "https://www.instagram.com/akademiachikara",
    },
    {
      icon: "logo-tiktok",
      link: "https://www.tiktok.com/@akademiachikara",
    },
    {
      icon: "logo-linkedin",
      link: "https://www.linkedin.com/company/akademia-sportu-chikara-rzesz%C3%B3w",
    },
  ];
  socialsTable.forEach((social) => {
    const socialMedias = document.createElement("a");
    socialMedias.href = social.link;
    socialMedias.target = "_blank";
    const socialMediasIcon = document.createElement("ion-icon");
    socialMediasIcon.name = social.icon;
    socialMedias.appendChild(socialMediasIcon);
    socials.appendChild(socialMedias);
  });
  footerItemsContainer.appendChild(socials);

  // ----- Separator ----- //
  const separator = document.createElement("div");
  separator.classList.add("footer-separator");
  footer.appendChild(separator);

  // ----- PartnersLogos ----- //
  const partners = document.createElement("div");
  partners.classList.add("footer-partners");
  footer.appendChild(partners);

  const partnersButton = document.createElement("button");
  partnersButton.textContent = "Zobacz naszych partnerów";
  partners.appendChild(partnersButton);

  const partnersCaption = document.createElement("span");
  partnersCaption.classList.add("footer-partners-caption");
  partnersCaption.textContent = "Przejdź na stronę klikając Logo";
  partners.appendChild(partnersCaption);

  let partnersTable = [
    {
      logo: "../logos/decathlon.png",
      link: "https://www.decathlon.pl/",
    },
    {
      logo: "../logos/dworzysko.png",
      link: "https://dworzysko-park.pl/kontakt/",
    },
    {
      logo: "../logos/fabrykasily.png",
      link: "https://www.fabrykasily.pl/",
    },
    {
      logo: "../logos/infopodkarpacie.png",
      link: "http://infopodkarpacie.pl/",
    },
    {
      logo: "../logos/lotto.png",
      link: "https://www.lotto.pl/",
    },
    {
      logo: "../logos/passio.svg",
      link: "https://passiopoland.pl/",
    },
    {
      logo: "../logos/pukt.png",
      link: "https://pukt.pl/",
    },
    {
      logo: "../logos/rbeco.png",
      link: "https://rbeco.pl/",
    },
    {
      logo: "../logos/reshouse.jpg",
      link: "https://reshouse.pl/",
    },
    {
      logo: "../logos/rzeszow.jpg",
      link: "https://www.erzeszow.pl/",
    },
    {
      logo: "../logos/rzeszowskie-nieruchomosci.jpg",
      link: "https://rzeszowskie-nieruchomosci.pl/",
    },
    {
      logo: "../logos/sensis.png",
      link: "https://www.sensis.rzeszow.pl/",
    },
    {
      logo: "../logos/titum.png",
      link: "http://titum.pl/",
    },
  ];
  const partnersLogosContainer = document.createElement("div");
  partnersLogosContainer.classList.add("footer-partners-logos");
  partners.appendChild(partnersLogosContainer);

  partnersTable.forEach((partner) => {
    const partnersLogos = document.createElement("img");
    const partnersLinks = document.createElement("a");
    partnersLogos.src = partner.logo;
    partnersLinks.href = partner.link;
    partnersLinks.target = "_blank";
    if (partner.logo == "../logos/titum.png") {
      partnersLogos.id = "lastPartner";
    }
    partnersLinks.appendChild(partnersLogos);
    partnersLogosContainer.appendChild(partnersLinks);
  });

  // ----- Kod obsługujący footer ----- //
  const animationButton = document.querySelector(".footer-partners button");
  const animationCaption = document.querySelector(".footer-partners-caption");
  const animationContainer = document.querySelector(".footer-partners-logos");
  const lastPartner = document.getElementById("lastPartner");

  animationButton.addEventListener("click", () => {
    animationContainer.classList.toggle("partners-animation");
    animationCaption.classList.toggle("caption-animation");

    if (animationContainer.classList.contains("partners-animation")) {
      setTimeout(() => {
        animationContainer.style.setProperty("height", "fit-content");
        lastPartner.scrollIntoView("behavior: 'smooth'");
      }, 300);
    } else {
      animationContainer.style.setProperty("height", "60px");
    }
  });
}

export default renderRoot;
