const post = {
  title: "post title",
  img: "postImage.png",
  content: {
    list: {
      text: ["listItem1", "listItem2"],
      fontSize: 24,
      fontWeight: 500,
      color: "black",
    },

    p: {
      text: "Lorem ipsum dolor",
      fontSize: 24,
      fontWeight: 500,
      textAlign: "center",
      color: "black",
    },

    img: {
      src: "postImages/image.png",
      width: 70,
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
    const template = document.querySelector("template");
    const templateCopy = template.content.cloneNode(true);
    const newsList = document.querySelector(".news");

    const newsCardContainer = document.createElement("div");
    newsCardContainer.classList.add("news-card");
    newsCardContainer.addEventListener("click", this.renderPostDetails);

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
    if (this.content.p.text.split("").length < 50) {
      shortText.textContent = this.content.p.text;
    } else {
      shortText.textContent = this.content.p.text.substring(0, 50) + "...";
    }

    newsCardContainer.appendChild(templateCopy);
    newsList.insertAdjacentElement("afterbegin", newsCardContainer);
  }

  renderPostDetails() {
    //wrzuca na srodek ekranu okienko z cala zawartoscia posta i iteruje po calym obiekcie przypisanym przypisanym do klucza "content" sprawdzajac w switchu nazwy kluczy i w zaleznosci od nich wywoluje funkcje generujace poszczegolne elementy
  }
}

const createParagraph = (pProperties) => {
  //funkcja generujaca element p
};

const createList = (listProperties) => {
  //funkcja generująca liste
};

const createImg = (imgProperties) => {
  //funkcja generująca obrazek
};

const posts = [
  new Post("cool post title ;3:3;3:3", "images/post-images/pxfuel (7).jpg", {
    p: {
      text: "Lorem ipsum dolor sit amet consectetu",
      fontSize: 24,
      fontWeight: 500,
      textAlign: "center",
      color: "black",
    },

    list: {
      text: ["listItem1", "listItem2"],
      fontSize: 24,
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
      fontSize: 24,
      fontWeight: 500,
      color: "black",
    },

    img: {
      src: "postImages/image.png",
      width: 70,
    },

    p: {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      fontSize: 24,
      fontWeight: 500,
      textAlign: "center",
      color: "black",
    },
  }),
  new Post("cool post title", "images/post-images/pxfuel (10).jpg", {
    p: {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      fontSize: 24,
      fontWeight: 500,
      textAlign: "center",
      color: "black",
    },

    list: {
      text: ["listItem1", "listItem2"],
      fontSize: 24,
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
      fontSize: 24,
      fontWeight: 500,
      color: "black",
    },

    img: {
      src: "postImages/image.png",
      width: 70,
    },

    p: {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      fontSize: 24,
      fontWeight: 500,
      textAlign: "center",
      color: "black",
    },
  }),
  new Post(
    "cool post title",
    "images/post-images/MPKT2024-Insta-stories-edited_1.png",
    {
      p: {
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        fontSize: 24,
        fontWeight: 500,
        textAlign: "center",
        color: "black",
      },

      list: {
        text: ["listItem1", "listItem2"],
        fontSize: 24,
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
      fontSize: 24,
      fontWeight: 500,
      color: "black",
    },

    img: {
      src: "postImages/image.png",
      width: 70,
    },

    p: {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      fontSize: 24,
      fontWeight: 500,
      textAlign: "center",
      color: "black",
    },
  }),
];

posts.forEach((post) => {
  post.renderPost();
});
