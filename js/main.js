const btns = document.querySelectorAll(".modal-btn");
const modal = document.querySelector(".modal");

btns.forEach((el) => {
  el.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

modal.addEventListener("click", (ev) => {
  console.log(ev.target);
  if (
    ev.target === ev.currentTarget ||
    ev.target.classList.contains("modal__close")
  ) {
    modal.style.display = "none";
  }
});

// --------------------------------------------------

const menu = document.querySelector(".tabheader__items");
const tabcontainer = document.querySelectorAll(".tabcontent");

menu.addEventListener("click", (ev) => {
  if (ev.target !== ev.currentTarget) {
    [...menu.children].forEach((el) => {
      el.classList.remove("tabheader__item_active");
    });
    ev.target.classList.add("tabheader__item_active");
    tabcontainer.forEach((el) => {
      if (el.dataset.item === ev.target.dataset.id) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    });
  }
});

// -----------------------------------------------------------------

const offer__slider = document.querySelector(".offer__slider-counter");
const current = document.querySelector("#current");
const offer__slide = document.querySelectorAll(".offer__slide");

offer__slider.addEventListener("click", (ev) => {
  if (ev.target === offer__slider.firstElementChild) {
    offer__slide[+current.textContent - 1].style.display = "none";
    current.textContent = "0" + --current.textContent;
    if (current.textContent < "01") {
      current.textContent = "04";
    }
  } else if (ev.target === offer__slider.lastElementChild) {
    offer__slide[+current.textContent - 1].style.display = "none";
    current.textContent = "0" + ++current.textContent;
    if (current.textContent > "04") {
      current.textContent = "01";
    }
  }
  offer__slide[+current.textContent - 1].style.display = "block";
});

//---------------------------------------------------------------------

const forms = document.forms;

const modal__input = document.querySelectorAll(".modal__input");
const names = "";
const btn_min = document.querySelector(".btn__min");
const modal__span = document.querySelector(".modal__title-span");


modal__input[0].addEventListener("blur", (ev) => {
  ev.target.nextElementSibling.style.display = "none";

  if (ev.target.value.length <= 10) {
    ev.target.nextElementSibling.style.display = "none";
  } else {
    ev.target.nextElementSibling.style.display = "flex";
  }
  for (let i = 0; i <= ev.target.value.length; i++) {
    if (ev.target.value[i].charCodeAt() <= 90) {
      ev.target.nextElementSibling.style.display = "none";
    } else {
      ev.target.nextElementSibling.style.display = "flex";
    }
  }
});

modal__input[1].addEventListener("blur", (ev) => {
  ev.target.nextElementSibling.style.display = "none";

  if (ev.target.value.length === 12 && ev.target.value.contains("+")) {
    names = ev.target.value;
  } else {
    ev.target.nextElementSibling.style.display = "flex";
  }
});

forms[1].addEventListener("submit", (ev) => {
  ev.preventDefault();

  forms[1].reset();
});


const timer = document.querySelectorAll(".timer__block span");

function dataTimer() {
  let dateEnd = new Date("12.31.2024").getTime();
  let dateStart = new Date().getTime();
  let time = dateEnd - dateStart;

  if(time > 0) {
    let days = Math.floor(time / 1000 / 60 / 60 / 24);
    let hours = Math.floor(time % (1000 * 60 * 60 * 24) / 1000 / 60 / 60);
    let minutes = Math.floor(time % (1000 * 60 * 60) / 1000 / 60);
    let seconds = Math.floor((time % (1000 * 60)) / 1000);
    let timeing = [days,hours,minutes,seconds]
    timer.forEach((span,idx) => span.textContent = timeing[idx])
  }
}

setInterval(dataTimer,1000)


// ------------------------------------------------------------------


const menuScroll = document.querySelector(".menu");
const menuScrollItems = document.querySelectorAll(".menu__item");

window.addEventListener("scroll",(ev) => {
  if(ev.target.documentElement.scrollTop + window.innerHeight / 2 >= menuScroll.offsetTop) {
    menuScrollItems.forEach(el => {
    el.style.transform = "translateX(0)";
    
    })    
  }
  
})