const post = {
  title: "post title",
  img: "postImage.png",
  content: {
    list: {
      type: "ul",
      text: ["listItem1", "listItem2"],
      fontSize: "20px",
      fontWeight: 500,
      color: "black",
      listStyleType: "disc",
    },

    p: {
      text: "Lorem ipsum dolor",
      fontSize: "24px",
      fontWeight: 500,
      textAlign: "center",
      color: "black",
    },

    img: {
      src: "postImages/image.png",
      width: "350px",
    },
  },
};

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
        mainImg.style.setProperty("width", "100%");
      }
    };

    const title = templateCopy.querySelector(".news-title");
    title.textContent = this.title;

    const shortText = templateCopy.querySelector(".news-short-text");
    if (this.content.p1.text.split("").length < 50) {
      shortText.textContent = this.content.p1.text;
    } else {
      shortText.textContent = this.content.p1.text.substring(0, 50) + "...";
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

    const detailsElementsContainer = templateCopy.querySelector(".details");
    Object.keys(this.content).forEach((key) => {
      const keyFirstLetter = key.substring(0, 1);
      switch (keyFirstLetter) {
        case "p":
          detailsElementsContainer.insertAdjacentElement(
            "afterbegin",
            createParagraph(this.content.p1)
          );
          break;

        case "l":
          break;

        case "i":
          break;

        default:
          alert("error");
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
  paragraph.style.setProperty("font-size", pProperties.fontSize);
  paragraph.style.setProperty("font-weight", pProperties.fontWeight);
  paragraph.style.setProperty("color", pProperties.color);
  paragraph.style.setProperty("text-align", pProperties.textAlign);

  return paragraph;
};

const createList = (listProperties) => {
  //funkcja generująca liste
  const list = "";
  if (listProperties.type == "ul") list = document.createElement("ul");
  else list = document.createElement("ol");

  list.classList.add("post-details-list");

  listProperties.text.forEach((listElText) => {
    const li = document.createElement("li");
    li.textContent = listElText;
    list.appendChild(li);
  });

  list.style.setProperty("font-size", listProperties.fontSize);
  list.style.setProperty("font-weight", listProperties.fontWeight);
  list.style.setProperty("color", listProperties.color);
  list.style.setProperty("list-style-type", listProperties.listStyleType);

  return list;
};

const createImg = (imgProperties) => {
  //funkcja generująca obrazek
  const img = document.createElement("img");
  img.classList.add("post-details-img");
  img.src = imgProperties.src;
  img.style.setProperty("width", imgProperties.width);

  return img;
};

const posts = [
  new Post("cool post title ;3:3;3:3", "images/post-images/pxfuel (7).jpg", {
    p1: {
      text: "DZIAŁA!!",
      fontSize: "24px",
      fontWeight: 800,
      textAlign: "left",
      color: "yellowgreen",
    },

    list: {
      text: ["listItem1", "listItem2"],
      fontSize: "24px",
      fontWeight: 500,
      color: "black",
    },

    img: {
      src: "postImages/image.png",
      width: 70,
    },
  }),

  new Post("second cool post", "images/post-images/pxfuel (8).jpg", {
    list: {
      text: ["listItem1", "listItem2"],
      fontSize: "24px",
      fontWeight: 500,
      color: "palevioletred",
    },

    img: {
      src: "postImages/image.png",
      width: 70,
    },

    p1: {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      fontSize: "24px",
      fontWeight: 500,
      textAlign: "center",
      color: "palevioletred",
    },
  }),
  new Post("cool post title", "images/post-images/pxfuel (10).jpg", {
    p1: {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      fontSize: "24px",
      fontWeight: 500,
      textAlign: "center",
      color: "black",
    },

    list: {
      text: ["listItem1", "listItem2"],
      fontSize: "24px",
      fontWeight: 500,
      color: "black",
    },

    img: {
      src: "postImages/image.png",
      width: 70,
    },
  }),

  new Post("second cool post", "images/post-images/pxfuel (9).jpg", {
    list: {
      text: ["listItem1", "listItem2"],
      fontSize: "24px",
      fontWeight: 500,
      color: "black",
    },

    img: {
      src: "postImages/image.png",
      width: 70,
    },

    p1: {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      fontSize: "24px",
      fontWeight: 500,
      textAlign: "center",
      color: "black",
    },
  }),
  new Post(
    "cool post title",
    "images/post-images/MPKT2024-Insta-stories-edited_1.png",
    {
      p1: {
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        fontSize: "24px",
        fontWeight: 500,
        textAlign: "center",
        color: "black",
      },

      list: {
        text: ["listItem1", "listItem2"],
        fontSize: "24px",
        fontWeight: 500,
        color: "black",
      },

      img: {
        src: "postImages/image.png",
        width: 70,
      },
    }
  ),

  new Post("second cool post", "images/post-images/pxfuel (8).jpg", {
    list: {
      text: ["listItem1", "listItem2"],
      fontSize: "24px",
      fontWeight: 500,
      color: "black",
    },

    img: {
      src: "postImages/image.png",
      width: 70,
    },

    p1: {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      fontSize: "24px",
      fontWeight: 500,
      textAlign: "center",
      color: "black",
    },
  }),
];

posts.forEach((post) => {
  post.renderPost();
});
