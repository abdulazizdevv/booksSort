let elInput = document.querySelector(".js-input");
let elList = document.querySelector(".js-list");
let elSort = document.querySelector(".js-sort");
let elNameBtn = document.querySelector(".js-name");
let elYearBtn = document.querySelector(".js-year");
let elPageBtn = document.querySelector(".js-page");
let elLanguagesBtn = document.querySelector(".js-languages");

let newArr = [];
elInput.addEventListener("input", (evt) => {
  evt.preventDefault();
  newArr = [];

  let InputVal = elInput.value.toLocaleLowerCase();

  books.forEach((el) => {
    if (el.title.toLocaleLowerCase().includes(InputVal)) {
      newArr.push(el);
    }
  });
  renderBook(newArr, elList);
});

function renderBook(books) {
  let res = "";
  for (i of books) {
    res += `
    <div class="card shadow p-2 mb-5  rounded rounded-4 ms-5 mt-2 mb-5 me-5" ">
    <img src="${i.imageLink}" class="card-img-top" alt="books">
    </button>
        <div class="card-body">
        <h4 class="card-text">Name: ${i.author}</h4>
        <h4 class="card-text">Name: ${i.title}</h4>
        <h5 class="card-title">Languages: ${i.language}</h5>
        <h6 class="card-title">Years: ${i.year}</h6>
        <p class="card-text">Pages: ${i.pages}</p>
        <a href="${i.link}" target="blank" class="btn btn-primary">more..</a>
        </div>
        </div>
        `;
  }

  elList.innerHTML = res;
  return res;
}
renderBook(books);

elSort.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (evt.target.matches(".js-name")) {
    renderBook(
      books.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
    );
    elNameBtn.classList.add("active");
  } else {
    elNameBtn.classList.remove("active");
  }
  if (evt.target.matches(".js-year")) {
    renderBook(books.sort((a, b) => a.year - b.year));
    elYearBtn.classList.add("active");
  } else {
    elYearBtn.classList.remove("active");
  }
  if (evt.target.matches(".js-page")) {
    renderBook(books.sort((a, b) => a.pages - b.pages));
    elPageBtn.classList.add("active");
  } else {
    elPageBtn.classList.remove("active");
  }
  if (evt.target.matches(".js-languages")) {
    renderBook(
      books.sort((a, b) => a.language.charCodeAt(0) - b.language.charCodeAt(0))
    );
    elLanguagesBtn.classList.add("active");
  } else {
    elLanguagesBtn.classList.remove("active");
  }
});

let elMode = document.querySelector(".mode");

let theme = false;

elMode.addEventListener("click", (evt) => {
  evt.preventDefault();
  theme = !theme;
  let newBg = theme ? "dark" : "light";
  window.localStorage.setItem("theme", newBg);
  changeBack();
});

function changeBack() {
  if (window.localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}
changeBack();
