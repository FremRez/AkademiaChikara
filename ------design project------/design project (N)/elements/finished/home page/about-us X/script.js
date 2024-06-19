class Trainer {
  constructor(name, dsc, img, rank) {
    this.name = name;
    this.description = dsc;
    this.image = img;
    this.rank = rank;
  }
  renderCard() {
    const trainersList = document.querySelector(".trainers-list");
    let trainerCard = document.createElement("div");
    trainerCard.classList.add("trainer-card");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("trainer-img-container");
    let image = document.createElement("img");
    image.src = "images/trainers/" + this.image;
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

trainers.forEach((trainer) => {
  trainer.renderCard();
});
