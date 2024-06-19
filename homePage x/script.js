import renderRoot from "../root.js";

const enterSiteButton = document.querySelector("#enter-site-button");
const enterSiteContent = document.querySelector(".enter-site");
const homePageContent = document.querySelector(".homePage-start-content");
enterSiteButton.addEventListener("click", () => {
  setTimeout(() => {
    enterSiteContent.remove();
  }, 600);
});

const renderBackIcon = (container, removeSection) => {
  const backIcon = document.createElement("ion-icon");
  backIcon.name = "arrow-back-circle-outline";
  backIcon.classList.add("back-icon");
  backIcon.addEventListener("click", () => {
    removeSection.remove();
    homePageContent.classList.remove("hidden");
    homePageContent.classList.add("showAnimation");
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  });
  container.insertAdjacentElement("afterbegin", backIcon);
};

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
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("about-us-content");

  //ikonka do powrotu
  renderBackIcon(contentContainer, aboutUsSection);

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
  document.body.insertAdjacentElement("afterbegin", aboutUsSection);
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
class Question {
  constructor(question, answer) {
    this.questionText = question;
    this.answerText = answer;
  }
  renderQuestion(questionList) {
    const questionContainer = document.createElement("div");
    questionContainer.classList.add("question-container");

    const question = document.createElement("h4");
    question.textContent = this.questionText;
    questionContainer.insertAdjacentElement("afterbegin", question);

    const answer = document.createElement("p");
    answer.textContent = this.answerText;
    questionContainer.insertAdjacentElement("beforeend", answer);

    questionList.insertAdjacentElement("beforeend", questionContainer);
  }
}
const questions = [
  new Question(
    "Jakie są korzyści z trenowania karate?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus ducimus veniam harum ipsam, eius ipsa maiores dolores similique nihil cumque repellat dolore, quod facilis quam eos eveniet rerum pariatur?"
  ),
  new Question(
    "Czy potrzebuję specjalnego sprzętu, aby zacząć?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus ducimus veniam"
  ),
  new Question(
    "Czy muszę mieć dobrą kondycję fizyczną, aby zacząć?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus ducimus veniam harum ipsam, eius ipsa maiores dolores similique nihil cumque repellat dolore, quod facilis quam eos eveniet rerum pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus ducimus"
  ),
  new Question(
    "Jak długo trwa, aby osiągnąć czarny pas?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus ducimus veniam harum ipsam, eius ipsa maiores dolores similique nihil cumque repellat dolore, quod facilis"
  ),
];

const karateInfo = () => {
  homePageContent.classList.add("hidden");

  const karateInfoSection = document.createElement("section");
  karateInfoSection.classList.add("karate-info");

  const karateInfoContainer = document.createElement("div");
  karateInfoContainer.classList.add("karate-info-content");

  //ikonka do powrotu
  renderBackIcon(karateInfoContainer, karateInfoSection);

  //podstawowe info
  const basicInfo = document.createElement("div");
  basicInfo.classList.add("basic-information");

  const basicInfoTitle = document.createElement("h3");
  const infoTitleSpan = document.createElement("span");
  infoTitleSpan.textContent = "Karate Shotokan";
  basicInfoTitle.textContent = "Podstawowe informacje na temat ";
  basicInfoTitle.insertAdjacentElement("beforeend", infoTitleSpan);
  basicInfo.insertAdjacentElement("afterbegin", basicInfoTitle);

  const basicInfoText = document.createElement("p");
  basicInfoText.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea accusantium culpa aliquid delectus soluta animi magni vitae est porro. Architecto dolore fuga harum qui necessitatibus beatae nesciunt, aperiam consequuntur provident fugit quam at vero error id ad odit, numquam modi libero sunt nulla pariatur unde laudantium animi! Minus provident laudantium quos eaque eum minima praesentium eligendi eveniet modi debitis quia adipisci accusamus inventore rerum, qui, alias voluptate. Ipsam non voluptate ipsum quia modi assumenda possimus saepe, inventore, repellat dolorem suscipit minus ratione quam facilis fuga adipisci laudantium, ex corrupti.";
  basicInfo.insertAdjacentElement("beforeend", basicInfoText);

  const basicInfoArrowImg = document.createElement("img");
  basicInfoArrowImg.src = "images/karate-info/arrow.png";
  basicInfo.insertAdjacentElement("beforeend", basicInfoArrowImg);

  karateInfoContainer.insertAdjacentElement("beforeend", basicInfo);

  //dojo kun
  const dojoKun = document.createElement("div");
  dojoKun.classList.add("dojo-kun");

  const dojoKunTitle = document.createElement("h2");
  dojoKunTitle.textContent = "Czym jest Dojo Kun?";
  dojoKun.insertAdjacentElement("afterbegin", dojoKunTitle);

  const dojoKunDescriprion = document.createElement("div");
  dojoKunDescriprion.classList.add("dojo-kun-dsc");

  const desctiptionTextContainer = document.createElement("div");
  const dscText = document.createElement("p");
  dscText.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea accusantium culpa aliquid delectus soluta animi magni vitae est porro. Architecto dolore fuga harum qui necessitatibus beatae nesciunt, aperiam consequuntur provident fugit quam at vero error";
  desctiptionTextContainer.insertAdjacentElement("afterbegin", dscText);

  //lista
  const dojoKunList = document.createElement("ul");
  const dojoKunSpan = [
    " (Po pierwsze: Dążyć do doskonalenia charakteru)",
    " (Po pierwsze: Być wiernym ścieżce prawdy)",
    " (Po pierwsze: Rozwijać ducha wysiłku i wytrwałości)",
    " (Po pierwsze: Szanować innych i praktykować etykietę)",
    " (Po pierwsze: Powstrzymywać się od przemocy i zachować spokój ducha)",
  ];
  const dojoKunLi = [
    "Hitotsu! Jinkaku kansei ni tsutomuru koto ",
    "Hitotsu! Makoto no michi o mamoru koto ",
    "Hitotsu! Doryoku no seishin o yashinau koto ",
    "Hitotsu! Reigi o omonzuru koto ",
    "Hitotsu! Kekki no yu o imashimuru koto ",
  ];
  for (let i = 0; i < dojoKunLi.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = dojoKunLi[i];

    const listItemSpan = document.createElement("span");
    listItemSpan.textContent = dojoKunSpan[i];

    listItem.insertAdjacentElement("beforeend", listItemSpan);
    dojoKunList.insertAdjacentElement("beforeend", listItem);
  }
  desctiptionTextContainer.insertAdjacentElement("beforeend", dojoKunList);
  dojoKunDescriprion.insertAdjacentElement(
    "beforeend",
    desctiptionTextContainer
  );

  const dojoKunImg = document.createElement("img");
  dojoKunImg.src = "images/karate-info/dojokun.png";
  dojoKunDescriprion.insertAdjacentElement("beforeend", dojoKunImg);

  dojoKun.insertAdjacentElement("beforeend", dojoKunDescriprion);

  karateInfoContainer.insertAdjacentElement("beforeend", dojoKun);

  //faq
  const faqTitle = document.createElement("h2");
  faqTitle.classList.add("faq-title");
  faqTitle.textContent = "Najczęściej zadawane pytania";
  karateInfoContainer.insertAdjacentElement("beforeend", faqTitle);

  const faqList = document.createElement("div");
  faqList.classList.add("faq");
  questions.forEach((question) => {
    question.renderQuestion(faqList);
  });
  karateInfoContainer.insertAdjacentElement("beforeend", faqList);

  //koniec
  document.body.insertAdjacentElement("afterbegin", karateInfoSection);
  karateInfoSection.insertAdjacentElement("afterbegin", karateInfoContainer);
  karateInfoContainer.classList.add("showAnimation");
  window.scrollTo({
    top: 0,
    behaviour: "smooth",
  });
};

const karateInfoButton = document.querySelector(".homepage-karate-info button");
karateInfoButton.addEventListener("click", karateInfo);

renderRoot();
