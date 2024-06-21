const post = {
  title: "post title",
  img: "postImage.png",
  content: {
    list: {
      text: ["listItem1", "listItem2"],
      fontSize: 24,
      fontWeight: 500,
      color: black,
    },

    p: {
      text: "Lorem ipsum dolor",
      fontSize: 24,
      fontWeight: 500,
      color: black,
    },

    img: {
      src: "postImages/image.png",
      width: 70,
    },
  },
};

class Post {
  constructor(title, img, content) {
    this.title = title;
    this.img = img;
    this.content = content;
  }

  renderPost() {
    //metoda generująca "miniaturke" do posta na stronie z aktualnosciami, daje event listener do miniaturki ktory po kliknieciu bedzie wykonywal metode renderPostDetails
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
