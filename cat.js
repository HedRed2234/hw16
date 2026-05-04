function Cat(breed, age, gender, color, name, photo, isSleeping) {
  this.breed = breed;
  this.age = age;
  this.gender = gender;
  this.color = color;
  this.name = name;
  this.photo = photo;
  this.isSleeping = isSleeping;

  this.askFood = function () {
    if (this.isSleeping) {
      console.log(this.name + " спит и не может просить еду 😴");
    } else {
      console.log(this.name + " просит есть 🐱");
    }
  };

  // this.goSleep = function () {
  //   this.isSleeping = false;
  //   console.log(this.name + " теперь спит 😴");
  // };

  // this.wakeUp = function () {
  //   this.isSleeping = true;
  //   console.log(this.name + " проснулся 😺");
  // };

  this.checkSleeping = function () {
    if (this.isSleeping) {
      console.log(this.name + " сейчас спит 😴");
    } else {
      console.log(this.name + " не спит 😺");
    }
  };
}

let cat1 = new Cat(
  "Сиамский",
  2,
  "мальчик",
  "белый",
  "Барсик",
  "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
  false
);

let cat2 = new Cat(
  "Британский",
  3,
  "девочка",
  "серый",
  "Мурка",
  "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg",
  false
);

let cat3 = new Cat(
  "Мейн-кун",
  4,
  "мальчик",
  "рыжий",
  "Рыжик",
  "https://cdn2.thecatapi.com/images/4RzEwvyzz.jpg",
  false
);

let cat4 = new Cat(
  "Персидский",
  1,
  "девочка",
  "белый",
  "Снежка",
  "https://cdn2.thecatapi.com/images/Zfz5z2rYz.jpg",
  true
);

let cats = [cat1, cat2, cat3, cat4];

console.log(cats);

for (let i = 0; i < cats.length; i++) {
  cats[i].askFood();
}

for (let i = 0; i < cats.length; i++) {
  cats[i].checkSleeping();
}