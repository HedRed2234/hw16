function Cat(breed, age, gender, color, name, photo, isSleeping = false) {
  this.breed = breed;

  if (age >= 0 && age <= 35) {
    this.age = age;
  } else {
    console.log("Некорректный возраст, поставлено 0");
    this.age = 0;
  }

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

  this.goSleep = function () {
    this.isSleeping = true;
    console.log(this.name + " теперь спит 😴");
  };

  this.wakeUp = function () {
    this.isSleeping = false;
    console.log(this.name + " проснулся 😺");
  };

  this.checkSleeping = function () {
    if (this.isSleeping) {
      console.log(this.name + " сейчас спит 😴");
    } else {
      console.log(this.name + " не спит 😺");
    }
  };
}


// коты
let cat1 = new Cat(
  "Дворняга",
  7,
  "male",
  "рижий",
  "Рижик",
  "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=800",
  false
);

let cat2 = new Cat(
  "Сиамский",
  2,
  "male",
  "белый",
  "Барсик",
  "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
);

let cat3 = new Cat(
  "Британский",
  3,
  "female",
  "серый",
  "Мурка",
  "https://cdn.pixabay.com/photo/2018/05/14/21/43/british-shorthair-3401683_1280.jpg"
);

let cat4 = new Cat(
  "Мейн-кун",
  4,
  "male",
  "рыжий",
  "Рыжик",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMGKrQmHA7zJBwSWLFkkXw-w-Jr6wLI27GN4vXbLGyoSuX6MvvK13t04Rb6wz0R5LLHty8M4NGLkYfiNIZSh6_NTj0JgzMHGvlcbm8Q&s=10",
  true
);


let cats = [cat1, cat2, cat3, cat4];


// ---------------- DOM -------------------

const photo = document.getElementById("cat-photo");
const breed = document.getElementById("breed");
const age = document.getElementById("age");
const nameEl = document.getElementById("name");
const gender = document.getElementById("gender");
const color = document.getElementById("color");
const status = document.getElementById("status");
const buttons = document.getElementById("buttons");


// Всё о коте
function showCat(cat) {
  photo.src = cat.photo;
  breed.textContent = cat.breed;
  age.textContent = cat.age;
  nameEl.textContent = cat.name;
  gender.textContent = cat.gender;
  color.textContent = cat.color;

  if (cat.isSleeping) {
    status.textContent = "спит";
  } else {
    status.textContent = "не спит";
  }
}


// Кнопки
function createButtons() {

  cats.forEach(function(cat, index) {
    const button = document.createElement("button");
    button.textContent = `Cat ${index + 1}`;
    button.setAttribute("data-id", index);

    if (index === 0) {
      button.classList.add("active");
    }

    button.addEventListener("click", function() {
      document.querySelectorAll("button")
        .forEach(function(btn) {
          btn.classList.remove("active");
        });

      button.classList.add("active");
      showCat(cat);
    });

    buttons.append(button);
  });
}



showCat(cats[0]);
createButtons();


cats.forEach(cat => cat.askFood());

cats.forEach(cat => cat.checkSleeping());