let meno = document.querySelector(".lests");
let nav_par = document.querySelector(".nav_par");
let next = document.getElementById("next");
let back = document.getElementById("back");
let con_img = document.querySelectorAll(".con-img div");
let time = 8000;
let bt_next = document.querySelector(".bt_next");
let bt_back = document.querySelector(".bt_back");
let cards = document.querySelectorAll(".cards");

meno.onclick = () => {
  nav_par.classList.toggle("active");
  meno.classList.toggle("click");
};

let right = () => {
  let reso = "";
  con_img.forEach((el) => {
    if (el.classList.contains("active")) {
      reso = el;
    }

    el.classList.remove("active");
    el.classList.remove("hidden_left");
  });

  if (reso.nextElementSibling === null) {
    con_img[0].classList.add("active");
    con_img[3].classList.add("hidden_left");
  } else {
    reso.nextElementSibling.classList.add("active");
    reso.classList.add("hidden_left");
  }
};

let left = () => {
  let reso = "";
  con_img.forEach((el) => {
    if (el.classList.contains("hidden_left")) {
      reso = el;
    }

    el.classList.remove("active");
    el.classList.remove("hidden_left");
  });

  if (reso.previousElementSibling === null) {
    con_img[3].classList.add("hidden_left");
    con_img[0].classList.add("active");
  } else {
    reso.previousElementSibling.classList.add("hidden_left");
    reso.classList.add("active");
  }
};

next.addEventListener("click", () => {
  right();
});

back.addEventListener("click", () => {
  left();
});

let nt = () => {
  let resoult = "";
  cards.forEach((e) => {
    if (e.classList.contains("A")) {
      resoult = e.nextElementSibling;
      e.classList.remove("A");
      e.classList.remove("A_Plas1");
      e.classList.remove("A_Plas2");
    }
  });

  if (resoult !== null) {
    resoult.classList.remove("A_Plas1");
    resoult.classList.remove("A_Plas2");
    resoult.classList.add("A");
  } else {
    cards[0].classList.remove("A_Plas1");
    cards[0].classList.remove("A_Plas2");
    cards[0].classList.add("A");
  }

  if (resoult !== null) {
    resoult.classList.remove("A_Plas1");
    resoult.classList.remove("A_Plas2");
    resoult.classList.remove("neg");
    resoult.classList.add("A");
  } else {
    cards[0].classList.remove("A_Plas1");
    cards[0].classList.remove("A_Plas2");
    cards[0].classList.remove("neg");
    cards[0].classList.add("A");
  }

  if (cards[0].classList.contains("A")) {
    cards[1].classList.remove("A_Plas1");
    cards[1].classList.remove("A_Plas2");
    cards[1].classList.remove("neg");

    cards[2].classList.remove("A_Plas1");
    cards[2].classList.remove("A_Plas2");
    cards[2].classList.remove("neg");

    cards[1].classList.add("A_Plas1");
    cards[2].classList.add("A_Plas2");
    cards[3].classList.add("neg");
  } else if (cards[1].classList.contains("A")) {
    cards[2].classList.remove("A_Plas1");
    cards[2].classList.remove("A_Plas2");
    cards[2].classList.remove("neg");

    cards[3].classList.remove("A_Plas1");
    cards[3].classList.remove("A_Plas2");
    cards[3].classList.remove("neg");

    cards[2].classList.add("A_Plas1");
    cards[3].classList.add("A_Plas2");
    cards[4].classList.add("neg");
  } else if (cards[2].classList.contains("A")) {
    cards[3].classList.remove("A_Plas1");
    cards[3].classList.remove("A_Plas2");
    cards[3].classList.remove("neg");

    cards[4].classList.remove("A_Plas1");
    cards[4].classList.remove("A_Plas2");
    cards[4].classList.remove("neg");

    cards[3].classList.add("A_Plas1");
    cards[4].classList.add("A_Plas2");
    cards[0].classList.add("neg");
  } else if (cards[3].classList.contains("A")) {
    cards[4].classList.remove("A_Plas1");
    cards[4].classList.remove("A_Plas2");
    cards[4].classList.remove("neg");

    cards[0].classList.remove("A_Plas1");
    cards[0].classList.remove("A_Plas2");
    cards[0].classList.remove("neg");

    cards[4].classList.add("A_Plas1");
    cards[0].classList.add("A_Plas2");
    cards[1].classList.add("neg");
  } else if (cards[4].classList.contains("A")) {
    cards[0].classList.remove("A_Plas1");
    cards[0].classList.remove("A_Plas2");
    cards[0].classList.remove("neg");

    cards[1].classList.remove("A_Plas1");
    cards[1].classList.remove("A_Plas2");
    cards[1].classList.remove("neg");

    cards[0].classList.add("A_Plas1");
    cards[1].classList.add("A_Plas2");
    cards[2].classList.add("neg");
  }
};

let bk = () => {
  let resoult = "";
  cards.forEach((e) => {
    if (e.classList.contains("A")) {
      resoult = e.previousElementSibling;
    }
    e.classList.remove("A");
    e.classList.remove("A_Plas1");
    e.classList.remove("A_Plas2");
    e.classList.remove("neg");
  });

  if (resoult !== null) {
    resoult.classList.remove("A_Plas1");
    resoult.classList.remove("A_Plas2");
    resoult.classList.remove("neg");
    resoult.classList.add("A");
  } else {
    cards[4].classList.remove("A_Plas1");
    cards[4].classList.remove("A_Plas2");
    cards[4].classList.remove("neg");
    cards[4].classList.add("A");
  }

  if (cards[0].classList.contains("A")) {
    cards[1].classList.remove("A_Plas1");
    cards[1].classList.remove("A_Plas2");
    cards[1].classList.remove("neg");

    cards[2].classList.remove("A_Plas1");
    cards[2].classList.remove("A_Plas2");
    cards[2].classList.remove("neg");

    cards[1].classList.add("A_Plas1");
    cards[2].classList.add("A_Plas2");
    cards[3].classList.add("neg");
  } else if (cards[1].classList.contains("A")) {
    cards[2].classList.remove("A_Plas1");
    cards[2].classList.remove("A_Plas2");
    cards[2].classList.remove("neg");

    cards[3].classList.remove("A_Plas1");
    cards[3].classList.remove("A_Plas2");
    cards[3].classList.remove("neg");

    cards[2].classList.add("A_Plas1");
    cards[3].classList.add("A_Plas2");
    cards[4].classList.add("neg");
  } else if (cards[2].classList.contains("A")) {
    cards[3].classList.remove("A_Plas1");
    cards[3].classList.remove("A_Plas2");
    cards[3].classList.remove("neg");

    cards[4].classList.remove("A_Plas1");
    cards[4].classList.remove("A_Plas2");
    cards[4].classList.remove("neg");

    cards[3].classList.add("A_Plas1");
    cards[4].classList.add("A_Plas2");
    cards[0].classList.add("neg");
  } else if (cards[3].classList.contains("A")) {
    cards[4].classList.remove("A_Plas1");
    cards[4].classList.remove("A_Plas2");
    cards[4].classList.remove("neg");

    cards[0].classList.remove("A_Plas1");
    cards[0].classList.remove("A_Plas2");
    cards[0].classList.remove("neg");

    cards[4].classList.add("A_Plas1");
    cards[0].classList.add("A_Plas2");
    cards[1].classList.add("neg");
  } else if (cards[4].classList.contains("A")) {
    cards[0].classList.remove("A_Plas1");
    cards[0].classList.remove("A_Plas2");
    cards[0].classList.remove("neg");

    cards[1].classList.remove("A_Plas1");
    cards[1].classList.remove("A_Plas2");
    cards[1].classList.remove("neg");

    cards[0].classList.add("A_Plas1");
    cards[1].classList.add("A_Plas2");
    cards[2].classList.add("neg");
  }
};

let int = setInterval(nt, time);

bt_next.onclick = () => {
  nt();

  clearInterval(int);

  let nt_plas = setInterval(nt, time);

  bt_next.addEventListener("click", () => {
    clearInterval(nt_plas);
  });

  bt_back.addEventListener("click", () => {
    clearInterval(nt_plas);
  });
};

bt_back.onclick = () => {
  bk();
  clearInterval(int);

  let intbk = setInterval(bk, time);

  bt_back.addEventListener("click", () => {
    clearInterval(intbk);
  });

  bt_next.addEventListener("click", () => {
    clearInterval(intbk);
  });
};
