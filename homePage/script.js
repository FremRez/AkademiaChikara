import renderRoot from "../root.js";

const enterSiteButton = document.querySelector("#enter-site-button");
const scrollTarget = document.querySelector("main");
const homePageContent = document.querySelector(".homePage-start-content");
enterSiteButton.addEventListener("click", () => {
  scrollTarget.scrollIntoView({
    behavior: "smooth",
  });
});

const renderBackIcon = (container, removeSection) => {
  const backIcon = document.createElement("ion-icon");
  backIcon.name = "arrow-back-circle-outline";
  backIcon.classList.add("back-icon");
  backIcon.addEventListener("click", () => {
    removeSection.remove();
    homePageContent.classList.remove("hidden");
    homePageContent.classList.add("showAnimation");
    scrollTarget.scrollIntoView({
      behavior: "smooth",
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
    image.src = "./homePage/images/about-us/trainers/" + this.image;
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
    "Założyciel Akademii Sportu Chikara oraz prezes klubu. Od 7. roku życia trenuje karate, zdobywając liczne medale krajowe i międzynarodowe, w tym tytuł Mistrza Polski oraz medale na Mistrzostwach Europy. Pełni także rolę trenera personalnego i kierownika wypoczynków dzieci oraz młodzieży.",
    "sensei marek.png",
    "1 Dan"
  ),
  new Trainer(
    "Piotr Ramot",
    "Jest Mistrzem Polski w Karate Tradycyjnym i wielokrotnym medalistą Mistrzostw Polski. Angażuje się w różnorodne projekty, prowadząc zajęcia karate dla osób niepełnosprawnych, niewidomych, seniorów oraz przedszkolaków. Autor książki ''Karate - na krawędzi inspiracji''.",
    "sensei piotr.png",
    "2 Dan"
  ),
  new Trainer(
    "Agnieszka Sajdutka",
    "Instruktorka Karate Tradycyjnego. Trenuje karate od 20 lat. Wielokrotna Mistrzyni Polski, Europy i świata. Jedna z najbardziej utytułowanych zawodniczek w Historii Polskiego Karate.",
    "sensei agnieszka.png",
    "3 Dan"
  ),
  new Trainer(
    "Daria Bąk",
    "Instruktor Karate Tradycyjnego, Mistrzyni Polski oraz aktywna zawodniczka kadry Polski. Od 2022 roku pełni rolę trenerki w Akademii Sportu Chikara w Rzeszowie. Jej zaangażowanie w karate oraz umiejętności przyczyniają się do efektywnego prowadzenia treningów i pomagania uczniom w osiąganiu ich celów.",
    "sensei daria.png",
    "1 Dan"
  ),
  new Trainer(
    "Dawid Jędrzejczyk",
    "Mistrz Polski w Karate Tradycyjnym oraz członek Kadry Polski, z bogatym doświadczeniem w rywalizacji i treningach. Od 2022 roku pełni rolę Instruktora w Akademii Sportu Chikara, gdzie skupia się na doskonaleniu technik i strategii kumite, rozwijając umiejętności swoich uczniów oraz promując ducha sportowego i samodyscyplinę.",
    "sensei dawid.png",
    "1 Dan"
  ),
  new Trainer(
    "Mariusz Kazanowski",
    "Legenda Karate Tradycyjnego w Polsce i Rzeszowie. Jest znanym i utytułowanym zawodnikiem. Wielokrotnie zdobywał medale na Mistrzostwach Polski, a także zdobył brązowy medal w kumite drużynowym podczas Mistrzostw Europy. Jego osiągnięcia i zaangażowanie w rozwój karate w regionie Rzeszowa są szeroko doceniane.",
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
  arrowsImg.src = "./homePage/images/about-us/arrows.png";
  arrowsImg.classList.add("title-arrows");
  arrowsImg2.src = "./homePage/images/about-us/arrows.png";
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
    "W Akademii Sportu Chikara każdy znajdzie coś dla siebie. Prowadzimy różnorodne treningi, które łączą klasyczne techniki karate z nowoczesnymi metodami. Nasza oferta obejmuje zajęcia dla dzieci, które rozwijają koordynację i pewność siebie, oraz zaawansowane kursy dla dorosłych, które poprawiają kondycję i technikę. Nasi doświadczeni nauczyciele motywują uczniów do osiągania nowych celów i przekraczania własnych ograniczeń. Dysponujemy komfortowymi salami treningowymi i organizujemy obozy oraz zawody, które umożliwiają rozwijanie umiejętności w praktyce i zdrową rywalizację. W Akademii Sportu Chikara karate to nie tylko technika walki, ale także ścieżka do odkrywania siebie, kształtowania charakteru i budowania harmonii ciała oraz umysłu.";
  contentContainer.insertAdjacentElement("beforeend", paragraph);

  //placeholder na film
  const placeholder = document.createElement("img");
  placeholder.src = "./homePage/images/about-us/placeholder.jpg";
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
    listItemImg.src = "./homePage/images/about-us/list-item.png";
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
    "Jak długo trwa, aby osiągnąć czarny pas?",
    "Zdobycie czarnego pasa w karate tradycyjnym zwykle zajmuje od 4 do 6 lat regularnego treningu, w zależności od stylu karate, częstotliwości treningów oraz postępów ucznia. Proces ten obejmuje opanowanie technik, kata i uczestnictwo w egzaminach na kolejne stopnie zaawansowania."
  ),
  new Question(
    "Czym różni się karate tradycyjne od innych stylów karate?",
    "Karate tradycyjne, takie jak Shotokan, Goju-Ryu, Shito-Ryu czy Wado-Ryu, kładzie duży nacisk na techniki kata (sekwencje ruchów) i filozofię samodoskonalenia. W przeciwieństwie do niektórych nowoczesnych stylów, które mogą koncentrować się bardziej na sportowej rywalizacji, karate tradycyjne skupia się na nauce technik, etyce i duchowym rozwoju."
  ),
  new Question(
    "Jak często powinienem trenować, aby osiągnąć postępy?",
    "Aby osiągnąć widoczne postępy, zaleca się regularne treningi co najmniej 2-3 razy w tygodniu. Regularność i zaangażowanie są kluczowe dla rozwoju umiejętności i poprawy techniki."
  ),
  new Question(
    "Co to są kata i jaką rolę odgrywają w treningu?",
    "Kata to precyzyjnie zaplanowane sekwencje ruchów, które symulują walkę z wyimaginowanym przeciwnikiem. Odgrywają kluczową rolę w nauce technik, równowagi i koordynacji, a także w doskonaleniu strategii i formy."
  ),
];

const karateInfo = () => {
  homePageContent.classList.add("hidden");
  homePageContent.classList.remove("showAnimation");

  const karateInfoSection = document.createElement("section");
  karateInfoSection.classList.add("karate-info");

  const karateInfoContainer = document.createElement("div");
  karateInfoContainer.classList.add("karate-info-content");

  //ikonka do powrotu
  renderBackIcon(karateInfoContainer, karateInfoSection);

  //tytuł
  const infoSiteTitle = document.createElement("h1");
  infoSiteTitle.classList.add("info-site-title");
  infoSiteTitle.textContent = "Informacje dla nowych osób";
  karateInfoContainer.insertAdjacentElement("afterbegin", infoSiteTitle);

  //informacje dla nowych
  const needToKnowArray = [
    {
      title: "Korzyści zdrowotne płynące z treningu karate",
      text: "Poprawa parametrów wydolności i sprawności organizmu, lepsza regeneracja, wzmocnienie odporności, elastyczność i wzmocnienie mięśni i stawów, korekcja wad postawy, wzmocnienie mięśni posturalnych",
    },

    {
      title: "Korzyści mentalne",
      text: "Lepsza samoocena i odpowiedzialność, dyscyplina i pewność siebie, odpowiedzialność i empatia, determinacja i umiejętność radzenia sobie z niepowodzeniami, nabieranie kompetencji społecznych, szacunek",
    },

    {
      title: "Jak przygotować się na trening",
      text: "Pozytywne nastawienie i otwartość na nowe doświadczenia, odpowiedni strój nie krępujący ruchów (na początek koszulka i spodenki), napój (najlepiej woda niegazowana)",
    },

    {
      title: "Jak wygląda zapis",
      text: "Przychodzimy na pierwszy trening, który jest bezpłatny. Przed i po zajęciach mamy możliwość rozmowy z trenerem. Zapisujemy nowego karateke w naszym biurze",
    },

    {
      title: "Jak możemy zdobywać pasy w karate?",
      text: "Nasza akademia należy do Polskiej Unii Karate Tradycyjnego, w której prowadzone są egzaminy na stopnie uczniowskie. Egzaminy nasza akademia przeprowadza dwa razy w roku. Karateka ma możliwość założenia własnego konta w systemie PUKT, dzięki któremu mamy możlowość zapisu na wszelkiego rodzaju aktywności klubowe i związkowe, w tym egzaminy",
    },
  ];

  const newPeopleInfoContainer = document.createElement("div");
  newPeopleInfoContainer.classList.add("new-people-info");

  const infoTitle = document.createElement("h3");
  infoTitle.textContent =
    "Co należy wiedzieć przed rozpoczęciem treningów karate".toUpperCase();
  newPeopleInfoContainer.insertAdjacentElement("afterbegin", infoTitle);

  const needToKnow = document.createElement("div");
  needToKnow.classList.add("need-to-know");

  needToKnowArray.forEach((item) => {
    const itemTitle = document.createElement("h4");
    itemTitle.textContent = item.title.toUpperCase();

    const itemText = document.createElement("p");
    itemText.textContent = item.text;

    needToKnow.insertAdjacentElement("beforeend", itemTitle);
    needToKnow.insertAdjacentElement("beforeend", itemText);
  });

  newPeopleInfoContainer.insertAdjacentElement("beforeend", needToKnow);

  karateInfoContainer.insertAdjacentElement(
    "beforeend",
    newPeopleInfoContainer
  );

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
    "Karate Shotokan to jeden z najpopularniejszych stylów karate, założony przez mistrza Gichin Funakoshi w Japonii w latach 30. XX wieku. Charakteryzuje się prostymi i skutecznymi technikami, które koncentrują się na precyzyjnych uderzeniach, kopnięciach oraz blokach. W Shotokan duży nacisk kładzie się na rozwijanie siły ciała, stabilności oraz równowagi. Styl ten jest również znany z nauki kata – sekwencji ruchów wykonywanych samodzielnie, które mają na celu doskonalenie techniki i strategii walki. Trening w Shotokan rozwija nie tylko umiejętności fizyczne, ale także dyscyplinę, koncentrację i szacunek.";
  basicInfo.insertAdjacentElement("beforeend", basicInfoText);

  const basicInfoArrowImg = document.createElement("img");
  basicInfoArrowImg.src = "./homePage/images/karate-info/arrow.png";
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
    "Dojo Kun to zbiór zasad etycznych i wartości, które są fundamentem treningu w karate. Obejmuje pięć kluczowych zobowiązań. Jest to kodeks postępowania, który kieruje zarówno techniką, jak i zachowaniem praktykujących, podkreślając moralne i filozoficzne aspekty sztuk walki.";
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
  dojoKunImg.src = "./homePage/images/karate-info/dojokun.png";
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

renderRoot("homePageLink");
