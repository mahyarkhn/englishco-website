// TODO: data must be resolved through API

document.addEventListener("DOMContentLoaded", onLoad());

var books, leveledBooks, subjectedBooks, otherBooks;


function onLoad() {
    console.log("onLoad")
    resolveLists();
    let booksList = document.querySelector("#booksList");
    let leveledBooksList = document.querySelector("#leveledBooksList");
    let subjectedBooksList = document.querySelector("#subjectedBooksList");
    let otherBooksList = document.querySelector("#otherBooksList");
    if(books.length > 0) {
        books.forEach(book => {
            let element = createBookCardElement(book.id, book.title, book.level, book.imageSrc);
            booksList.appendChild(element);
        });
    }
    if(leveledBooks.length > 0) {
        leveledBooks.forEach(book => {
            let element = createBookCardElement(book.id, book.title, book.level, book.imageSrc);
            leveledBooksList.appendChild(element);
        });
    }
    if(subjectedBooks.length > 0) {
        subjectedBooks.forEach(book => {
            let element = createBookCardElement(book.id, book.title, book.level, book.imageSrc);
            subjectedBooksList.appendChild(element);
        });
    }
    if(otherBooks.length > 0) {
        otherBooks.forEach(book => {
            let element = createBookCardElement(book.id, book.title, book.level, book.imageSrc);
            otherBooksList.appendChild(element);
        });
    }
}


function createBookCardElement(id, title, level, imageSrc){
    let card = document.createElement("a");
    card.className = "text-decoration-none card border-0 text-bg-dark rounded-4 big-card mx-2";
    card.href = "?bookId=" + id;
    let image = document.createElement("img");
    image.className = "card-img-top object-fit-cover rounded-top-4"
    // image.alt = title;
    // image.src = imageSrc;
    image.height = "170";
    let cardBody = document.createElement("div");
    cardBody.className = "card-body pt-3 pe-2 text-center";
    let cardTitle = document.createElement("p");
    cardTitle.className = "card-title fs-5";
    cardTitle.innerText = title;
    let cardSubtitle = document.createElement("p");
    cardSubtitle.className = "card-subtitle text-center";
    cardSubtitle.innerText = level;
    
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardSubtitle);
    card.appendChild(image);
    card.appendChild(cardBody);
    return card;
}

function resolveLists() {
    resolveBooks();
    resolveLeveledBooks();
    resolveSubjectedBooks();
    resolveOtherBooks();
}


function resolveBooks(){
    books = [
        {id: 0, title: "504 واژه کاملا ضروری", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "1100 واژه که باید دانست", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "واژگان ضروری تافل", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "4000 واژه ضروری", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "واژگان ضروری آزمون GRE", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "چهارهزار واژه ضروری انگلیسی 1", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "چهارهزار واژه ضروری انگلیسی 2", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "چهارهزار واژه ضروری انگلیسی 3", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "چهارهزار واژه ضروری انگلیسی 4", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "چهارهزار واژه ضروری انگلیسی 5", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "چهارهزار واژه ضروری انگلیسی 6", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "واژگان برای دانش آموزان دبیرستانی", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
    ];
}

function resolveLeveledBooks(){
    leveledBooks = [
        {id: 0, title: "واژگان سطح مبتدی", level: "A1-A2", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "واژگان سطح متوسط", level: "B1-B2", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "واژگان سطح پیشرفته", level: "C1-C2", imageSrc: "./assets/images/cover-essential-words.jpg"},
    ];
}

function resolveSubjectedBooks(){
    subjectedBooks = [
        {id: 0, title: "خوراکی ها", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "حیوانات", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "زمان ها", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "اعضای بدن", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "جغرافیا", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "مکان ها", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "لباس ها", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "شغل ها", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "خانواده", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "اشکال هندسی", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
    ];
}

function resolveOtherBooks(){
    otherBooks = [
        {id: 0, title: "اصطلاحات اقتصادی", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "اصطلاحات سیاسی", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "اصطلاحات عاشقانه", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "اصطلاحات مکالمات روزمره", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "اصطلاحات مذهبی", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "اصطلاحات علمی", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
        {id: 0, title: "ضرب المثل", level: "", imageSrc: "./assets/images/cover-essential-words.jpg"},
    ];
}
