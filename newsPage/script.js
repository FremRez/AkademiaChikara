const post = {
  title: "post title",
  img: "postImage.png",
  content: [
    {
      name: "p",
      text: "Lorem ipsum dolor",
      fontSize: "24px",
      fontWeight: 500,
      textAlign: "center",
      color: "black",
    },

    {
      name: "p",
      text: "Lorem ipsum dolor",
      fontSize: "24px",
      fontWeight: 500,
      textAlign: "center",
      color: "green",
    },

    {
      name: "ul",
      text: ["listItem1", "listItem2"],
      fontSize: "20px",
      fontWeight: 500,
      color: "black",
      listStyleType: "disc",
    },

    {
      name: "img",
      src: "postImages/image.png",
      width: "350px",
    },
  ],
};

console.log(JSON.stringify(post));

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

const posts = [
  new Post("cool post title ;3:3;3:3", "images/post-images/pxfuel (7).jpg", [
    {
      name: "p",
      text: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
      fontSize: "24px",
      fontWeight: 500,
      textAlign: "center",
      color: "black",
    },

    {
      name: "p",
      text: "Lorem ipsum dolor",
      fontSize: "24px",
      fontWeight: 500,
      textAlign: "center",
      color: "green",
    },

    {
      name: "ul",
      text: ["listItem1", "listItem2"],
      fontSize: "20px",
      fontWeight: 500,
      color: "blue",
      listStyleType: "circle",
      placeSelf: "center",
    },

    {
      name: "img",
      src: "images/post-images/pxfuel (7).jpg",
      width: "80%",
      placeSelf: "center",
    },

    {
      name: "p",
      text: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
      fontSize: "30px",
      fontWeight: 500,
      textAlign: "center",
      color: "violet",
    },
  ]),

  new Post("second cool post", "images/post-images/pxfuel (8).jpg", [
    {
      name: "p",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      fontSize: "24px",
      fontWeight: 500,
      textAlign: "center",
      color: "black",
    },

    {
      name: "p",
      text: "Lorem ipsum dolor",
      fontSize: "24px",
      fontWeight: 500,
      textAlign: "center",
      color: "green",
    },

    {
      name: "ul",
      text: ["listItem1", "listItem2"],
      fontSize: "20px",
      fontWeight: 500,
      color: "black",
      listStyleType: "disc",
      placeSelf: "center",
    },

    {
      name: "img",
      src: "images/post-images/pxfuel (7).jpg",
      width: "80%",
      placeSelf: "center",
    },
  ]),

  new Post("cool post title", "images/post-images/pxfuel (10).jpg", [
    {
      name: "p",
      text: "Lorem ipsum dolor",
      fontSize: "24px",
      fontWeight: 500,
      textAlign: "start",
      color: "black",
    },

    {
      name: "p",
      text: "Lorem ipsum dolor",
      fontSize: "24px",
      fontWeight: 500,
      textAlign: "center",
      color: "green",
    },

    {
      name: "ul",
      text: ["listItem1", "listItem2"],
      fontSize: "20px",
      fontWeight: 500,
      color: "black",
      listStyleType: "disc",
      placeSelf: "center",
    },

    {
      name: "img",
      src: "images/post-images/pxfuel (7).jpg",
      width: "80%",
      placeSelf: "end",
    },

    {
      name: "ol",
      text: ["akademia", "sportu", "chikara", "rzeszow"],
      fontSize: "30px",
      fontWeight: 400,
      color: "red",
      listStyleType: "decimal",
      placeSelf: "end",
    },

    {
      name: "p",
      text: "Lorem ipsum dolor",
      fontSize: "24px",
      fontWeight: 500,
      textAlign: "center",
      color: "green",
    },
  ]),

  new Post("second cool post", "images/post-images/pxfuel (9).jpg", [
    {
      name: "p",
      text: "Lorem ipsum dolor",
      fontSize: "24px",
      fontWeight: 500,
      textAlign: "center",
      color: "black",
    },

    {
      name: "p",
      text: "Lorem ipsum dolor",
      fontSize: "24px",
      fontWeight: 500,
      textAlign: "center",
      color: "green",
    },

    {
      name: "ul",
      text: ["listItem1", "listItem2"],
      fontSize: "20px",
      fontWeight: 500,
      color: "black",
      listStyleType: "disc",
      placeSelf: "center",
    },

    {
      name: "img",
      src: "images/post-images/pxfuel (7).jpg",
      width: "80%",
      placeSelf: "center",
    },
  ]),
  new Post(
    "cool post title",
    "images/post-images/MPKT2024-Insta-stories-edited_1.png",
    [
      {
        name: "p",
        text: "Lorem ipsum dolor",
        fontSize: "24px",
        fontWeight: 500,
        textAlign: "center",
        color: "black",
      },

      {
        name: "p",
        text: "Lorem ipsum dolor",
        fontSize: "24px",
        fontWeight: 500,
        textAlign: "center",
        color: "green",
      },

      {
        name: "ul",
        text: ["listItem1", "listItem2"],
        fontSize: "20px",
        fontWeight: 500,
        color: "black",
        listStyleType: "disc",
        placeSelf: "center",
      },

      {
        name: "img",
        src: "images/post-images/pxfuel (7).jpg",
        width: "60%",
        placeSelf: "center",
      },
    ]
  ),

  new Post("second cool post", "images/post-images/pxfuel (8).jpg", [
    {
      name: "p",
      text: "Lorem ipsum dolor",
      fontSize: "24px",
      fontWeight: 500,
      textAlign: "center",
      color: "black",
    },

    {
      name: "p",
      text: "Lorem ipsum dolor",
      fontSize: "24px",
      fontWeight: 500,
      textAlign: "center",
      color: "green",
    },

    {
      name: "ul",
      text: ["listItem1", "listItem2"],
      fontSize: "20px",
      fontWeight: 500,
      color: "black",
      listStyleType: "disc",
      placeSelf: "center",
    },

    {
      name: "img",
      src: "images/post-images/pxfuel (7).jpg",
      width: "100%",
      placeSelf: "center",
    },
  ]),
];

posts.forEach((post) => {
  post.renderPost();
});
