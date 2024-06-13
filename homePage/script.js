const enterSiteButton = document.querySelector("#enter-site-button");
const enterSiteContent = document.querySelector(".enter-site");
const homePageContent = document.querySelector(".homePage-start-content");
enterSiteButton.addEventListener("click", () => {
  setTimeout(() => {
    enterSiteContent.remove();
  }, 600);
});

//-----------ABOUT US-----------//
class Trainer {
  constructor(name, dsc, img, rank) {
    this.name = name;
    this.description = dsc;
    this.image = img;
    this.rank = rank;
  }
  renderCard(trainersList) {
    // const trainersList = document.querySelector(".trainers-list");
    let trainerCard = document.createElement("div");
    trainerCard.classList.add("trainer-card");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("trainer-img-container");
    let image = document.createElement("img");
    image.src = "images/about-us/trainers/" + this.image;
    console.log(imgContainer);
    imgContainer.insertAdjacentElement("afterbegin", image);
    trainerCard.insertAdjacentElement("afterbegin", imgContainer);

    let shortDescription = document.createElement("div");
    shortDescription.classList.add("trainer-short");

    let shortDscNameParagaph = document.createElement("p");
    shortDscNameParagaph.textContent = "Sensei ";
    let shortName = document.createElement("span");
    shortName.textContent = this.name;
    shortDscNameParagaph.insertAdjacentElement("beforeend", shortName);

    let dscRank = document.createElement("p");
    dscRank.textContent = this.rank;
    dscRank.classList.add("trainer-rank");

    let shortText = document.createElement("span");
    shortText.textContent = this.description;

    shortDescription.insertAdjacentElement("afterbegin", shortDscNameParagaph);
    shortDescription.insertAdjacentElement("beforeend", dscRank);
    shortDescription.insertAdjacentElement("beforeend", shortText);
    trainerCard.insertAdjacentElement("beforeend", shortDescription);

    trainersList.insertAdjacentElement("beforeend", trainerCard);

    if (this.name !== "Mariusz Kazanowski") {
      let line = document.createElement("div");
      line.classList.add("line", "center-line");
      trainersList.insertAdjacentElement("beforeend", line);
    }
  }
}
const trainers = [
  new Trainer(
    "Marek Żyłka",
    "Urodził się 26.07.1991r. w Rzeszowie. Założyciel Akademii Sportu Chikara w roku 2014. Prezes Klubu, Właściciel Firmy, Szczęśliwy Tata Dwójki Córek.",
    "sensei marek.png",
    "???"
  ),
  new Trainer(
    "Piotr Ramot",
    "Posiada stopień 2 Dan – urodzony 14 października 1985r. w Rzeszowie. Treningi Karate rozpoczął w 1998.  W 2005 roku kiedy to zdobył czarny pas.",
    "sensei piotr.png",
    "2 Dan"
  ),
  new Trainer(
    "Agnieszka Sajdutka",
    "Instruktor Karate Tradycyjnego, trenuje karate od 20 lat.  Mistrzyni Świata w Karate Tradycyjnym, Mistrzyni Europy, Zdobywczyni Pucharu Świata, Wielokrotna Mistrzyni Polski.",
    "sensei agnieszka.png",
    "3 Dan"
  ),
  new Trainer(
    "Daria Bąk",
    "Instruktor Karate Tradycyjnego, Stopień 1 Dan, Zawodniczka Kadry Polski, Mistrzyni Polski w Karate Tradycyjnym.  Od 2022 roku Trenerka w Akademii Sportu Chikara Rzeszów.",
    "sensei daria.png",
    "1 Dan"
  ),
  new Trainer(
    "Dawid Jędrzejczyk",
    "Mistrz Polski w Karate Tradycyjnym. Członek Kadry Polski. Od 2022 roku Instruktor w Akademii Sportu Chikara. Stopień 1 DAN.",
    "sensei dawid.png",
    "1 Dan"
  ),
  new Trainer(
    "Filip Horski",
    "Mistrz Polski w Karate Tradycyjnym. Członek Kadry Polski  w karate. Stopień 1 Dan. Od 2022 roku Instruktor w Akademii Sportu Chikara.",
    "sensei filip.png",
    "1 Dan"
  ),
  new Trainer(
    "Mariusz Kazanowski",
    "Legenda Karate Tradycyjnego w Polsce i Rzeszowie Stopień 3 dan. Wielokrotny medalista Mistrzostw Polski, brązowy medalista Mistrzostw Europy w kumite drużynowym.",
    "sensei mariusz.png",
    "3 Dan"
  ),
];

const aboutUs = () => {
  homePageContent.classList.add("hidden");

  const aboutUsSection = document.createElement("section");
  aboutUsSection.classList.add("about-us");
  aboutUsSection.id = "about-us";
  document.body.appendChild(aboutUsSection);
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("about-us-content");

  //ikonka do powrotu
  const backIcon = document.createElement("ion-icon");
  backIcon.name = "arrow-back-circle-outline";
  backIcon.classList.add("back-icon");
  backIcon.addEventListener("click", () => {
    aboutUsSection.remove();
    homePageContent.classList.remove("hidden");
    homePageContent.classList.add("showAnimation");
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  });
  contentContainer.insertAdjacentElement("afterbegin", backIcon);

  //pasek z tytulem
  const titleBar = document.createElement("div");
  titleBar.classList.add("about-us-title");
  const arrowsImg = document.createElement("img");
  const arrowsImg2 = document.createElement("img");
  arrowsImg.src = "images/about-us/arrows.png";
  arrowsImg.classList.add("title-arrows");
  arrowsImg2.src = "images/about-us/arrows.png";
  arrowsImg2.classList.add("title-arrows");
  const title = document.createElement("h1");
  title.textContent = "O NAS";

  titleBar.insertAdjacentElement("afterbegin", arrowsImg);
  titleBar.insertAdjacentElement("beforeend", title);
  titleBar.insertAdjacentElement("beforeend", arrowsImg2);
  contentContainer.insertAdjacentElement("beforeend", titleBar);

  //linia
  const line = document.createElement("div");
  line.classList.add("line", "center-line");
  contentContainer.insertAdjacentElement("beforeend", line);

  //tekst
  const paragraph = document.createElement("p");
  paragraph.classList.add("about-us-description");
  paragraph.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipismolestiae deleniti aut. Ratione dolorum, distinctio labore, ab veliticing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicimolestiae deleniti autmolestiae deleniti aut. Ratione dolorum, distinctio labore, ab velit. Ratione dolorum, distinctio labore, ab velitng elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  contentContainer.insertAdjacentElement("beforeend", paragraph);

  //placeholder na film
  const placeholder = document.createElement("img");
  placeholder.src = "images/about-us/placeholder.jpg";
  placeholder.classList.add("about-us-video");
  contentContainer.insertAdjacentElement("beforeend", placeholder);

  //lista miejsc
  const spotListTitle = document.createElement("h3");
  spotListTitle.classList.add("spot-list-title");
  spotListTitle.textContent = "Gdzie prowadzimy zajęcia?";
  contentContainer.insertAdjacentElement("beforeend", spotListTitle);

  const spotList = document.createElement("ul");
  spotList.classList.add("spot-list");

  const spots = [
    "Rzeszów, ul. Hanasiewicza 10",
    "Zajęcia w Krasnym – Budynek Crasnovii",
    "Zajęcia w Białobrzegach – Fitness Park",
  ];
  spots.forEach((spot) => {
    const listItemsContainer = document.createElement("div");
    const listItemImg = document.createElement("img");
    listItemImg.src = "images/about-us/list-item.png";
    listItemsContainer.insertAdjacentElement("afterbegin", listItemImg);

    const listItemText = document.createElement("li");
    listItemText.textContent = spot;
    listItemsContainer.insertAdjacentElement("beforeend", listItemText);

    spotList.insertAdjacentElement("beforeend", listItemsContainer);
  });

  contentContainer.insertAdjacentElement("beforeend", spotList);

  //kadra
  const trainersListTitle = document.createElement("h2");
  trainersListTitle.textContent = "Nasi trenerzy";
  trainersListTitle.classList.add("trainers-list-title");
  contentContainer.insertAdjacentElement("beforeend", trainersListTitle);

  const trainersList = document.createElement("div");
  trainersList.classList.add("trainers-list");
  contentContainer.insertAdjacentElement("beforeend", trainersList);
  trainers.forEach((trainer) => {
    trainer.renderCard(trainersList);
  });

  //koniec :3
  contentContainer.classList.add("showAnimation");
  aboutUsSection.insertAdjacentElement("afterbegin", contentContainer);
  window.scrollTo({
    top: 0,
    behaviour: "smooth",
  });
};

const aboutUsButton = document.querySelector(".homepage-about-us-text button");
aboutUsButton.addEventListener("click", aboutUs);

//-----------KARATE INFO-----------//
