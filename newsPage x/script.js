class Post {
  constructor(title, imgSrc, content) {
    this.title = title;
    this.imgSrc = imgSrc;
    this.content = content;
  }

  renderPost() {
    //metoda generująca "miniaturke" do posta na stronie z aktualnosciami, daje event listener do miniaturki ktory po kliknieciu bedzie wykonywal metode renderPostDetails
    const template = document.querySelector(".news-short-template");
    const templateCopy = template.content.cloneNode(true);
    const newsList = document.querySelector(".news");

    const newsCardContainer = document.createElement("div");
    newsCardContainer.classList.add("news-card");
    newsCardContainer.addEventListener("click", () => {
      this.renderPostDetails();
    });

    const mainImg = templateCopy.querySelector(".img-container img");
    mainImg.src = this.imgSrc;
    mainImg.onload = () => {
      if (mainImg.naturalWidth > mainImg.naturalHeight) {
        mainImg.style.setProperty("height", "100%");
      } else {
        mainImg.style.setProperty("width", "130%");
      }
    };

    const title = templateCopy.querySelector(".news-title");
    title.textContent = this.title;

    const shortText = templateCopy.querySelector(".news-short-text");
    for (let i = 0; i < this.content.length; i++) {
      if (!this.content[i].name == "p") continue;

      if (this.content[i].text.split("").length < 50) {
        shortText.textContent = this.content[i].text;
      } else {
        shortText.textContent = this.content[i].text.substring(0, 50) + "...";
      }

      break;
    }

    newsCardContainer.appendChild(templateCopy);
    newsList.insertAdjacentElement("afterbegin", newsCardContainer);
  }

  renderPostDetails() {
    //wrzuca na srodek ekranu okienko z cala zawartoscia posta i iteruje po calym obiekcie przypisanym do klucza "content" sprawdzajac w switchu nazwy kluczy i w zaleznosci od nich wywoluje funkcje generujace poszczegolne elementy

    const template = document.querySelector(".news-details-template");
    const templateCopy = template.content.cloneNode(true);
    const newsDetailsContainer = document.createElement("div");
    newsDetailsContainer.classList.add("news-details-container");

    const title = templateCopy.querySelector(".red-bg h2");
    title.textContent = this.title;

    const headerImg = templateCopy.querySelector(".details-header img");
    headerImg.src = this.imgSrc;

    const closeIcon = templateCopy.querySelector("ion-icon");
    closeIcon.addEventListener("click", () => {
      const container = document.querySelector(".news-details-container");
      container.remove();
    });

    //-------------------------------------------------------------------------------------------------------

    const detailsElementsContainer = templateCopy.querySelector(".details");

    this.content.forEach((element, index) => {
      switch (element.name) {
        case "p":
          detailsElementsContainer.insertAdjacentElement(
            "beforeend",
            createParagraph(this.content[index])
          );
          break;

        case "ul":
          detailsElementsContainer.insertAdjacentElement(
            "beforeend",
            createList(this.content[index])
          );
          break;

        case "ol":
          detailsElementsContainer.insertAdjacentElement(
            "beforeend",
            createList(this.content[index])
          );
          break;

        case "img":
          detailsElementsContainer.insertAdjacentElement(
            "beforeend",
            createImg(this.content[index])
          );
          break;
      }
    });

    newsDetailsContainer.appendChild(templateCopy);
    document.body.insertAdjacentElement("afterbegin", newsDetailsContainer);
  }
}

const createParagraph = (pProperties) => {
  //funkcja generujaca element p
  const paragraph = document.createElement("p");
  paragraph.classList.add("post-details-p");
  paragraph.textContent = pProperties.text;
  paragraph.style.setProperty(
    "font-size",
    "calc(" + pProperties.fontSize + " * var(--font-size))"
  );
  paragraph.style.setProperty("font-weight", pProperties.fontWeight);
  paragraph.style.setProperty("color", pProperties.color);
  paragraph.style.setProperty("text-align", pProperties.textAlign);

  return paragraph;
};

const createList = (listProperties) => {
  //funkcja generująca liste
  let list = "";
  if (listProperties.name == "ul") list = document.createElement("ul");
  else list = document.createElement("ol");

  list.classList.add("post-details-list");

  for (let i = 0; i < listProperties.text.length; i++) {
    const li = document.createElement("li");
    li.textContent = listProperties.text[i];
    list.appendChild(li);
  }

  list.style.setProperty(
    "font-size",
    "calc(" + listProperties.fontSize + " * var(--font-size))"
  );
  list.style.setProperty("font-weight", listProperties.fontWeight);
  list.style.setProperty("color", listProperties.color);
  list.style.setProperty("list-style-type", listProperties.listStyleType);
  list.style.setProperty("place-self", listProperties.placeSelf);

  return list;
};

const createImg = (imgProperties) => {
  //funkcja generująca obrazek
  const img = document.createElement("img");
  img.classList.add("post-details-img");
  img.src = imgProperties.src;
  img.style.setProperty("width", imgProperties.width);
  img.style.setProperty("place-self", imgProperties.placeSelf);

  return img;
};

fetch("./posts.JSON")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((postData) => {
      const post = new Post(postData.title, postData.img, postData.content);
      post.renderPost();
    });
  });

posts.forEach((post) => {
  post.renderPost();
});
