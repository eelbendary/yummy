// loader interval
setTimeout(() => {
  document.getElementById("load").style.display = "none";
  document.getElementById("content").style.display = "block";
}, 3000);
//hande pop up
let popupBtn = document.querySelector(".wrapper button");
let displayAllCount = document.getElementById("counterDisplay");
popupBtn.addEventListener("click", (e) => {
  let popup = document.querySelector(e.target.dataset.target);
  let close = document.getElementById("close");
  let popupinner = document
    .querySelector(e.target.dataset.target)
    .querySelector(".inner");
  if (popupinner.innerHTML === "") {
  }
  // console.log(popupinner);
  popup.classList.add("show");

  displayAllCount.style.display = "block";
  // if (popupinner.innerText === "") {

  clear();
  showcartitems();
  popup.addEventListener("click", function () {
    this.classList.remove("show");
    displayAllCount.style.display = "block";
  });

  popupinner.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  close.addEventListener("click", function () {
    popup.classList.remove("show");
    displayAllCount.style.display = "block";
  });
});

//dynamic taps
let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content2 > div");
let divsArray = Array.from(divs);
var line = document.querySelector(".line");
tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // console.log(ele)
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "block";
  });
});

let cartCount = document.getElementById("cart-count");
let cart = document.getElementById("cart");
var addToCartButtons = document.getElementsByClassName("add-to-cart");
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function () {});
}
let products = [
  {
    id: 0,
    img_url: "img/menu-item-1.png",
    plate_name: "Magnam Tiste",
    decription: "Lorem, deren, trataro, filede, nerada",
    price: 5.95,
    numItems: 2,
  },
  {
    id: 1,
    img_url: "img/menu-item-2.png",
    plate_name: "Magnam Tiste",
    decription: "Lorem, deren, trataro, filede, nerada",
    price: 5.95,
    numItems: 5,
  },

  {
    id: 2,
    img_url: "img/menu-item-3.png",
    plate_name: "Magnam Tiste",
    decription: "Lorem, deren, trataro, filede, nerada",
    price: 5.95,
    numItems: 8,
  },
  {
    id: 3,
    img_url: "img/menu-item-4.png",
    plate_name: "Magnam Tiste",
    decription: "Lorem, deren, trataro, filede, nerada",
    price: 5.95,
    numItems: 10,
  },
  {
    id: 4,
    img_url: "img/menu-item-5.png",
    plate_name: "Magnam Tiste",
    decription: "Lorem, deren, trataro, filede, nerada",
    price: 5.95,
    numItems: 18,
  },
  {
    id: 5,
    img_url: "img/menu-item-6.png",
    plate_name: "Magnam Tiste",
    decription: "Lorem, deren, trataro, filede, nerada",
    price: 5.95,
    numItems: 12,
  },
];

productList = document.getElementById("product-list");
productList1 = document.getElementById("product-list1");
productList2 = document.getElementById("product-list2");

for (let v = 0; v < products.length; v++) {
  // console.log(v);

  productList.innerHTML =
    productList.innerHTML +
    `<div class="col-lg-4 col-md-4 col-sm-6 mt-2  ">
              <div class="product">
                <div>
                  <img src="${products[v].img_url}" style="width: 100%;">
                </div>
                <div>
                  <h2>${products[v].plate_name}</h2>
                  <p>${products[v].decription}</p>

                  <div class="d-flex justify-content-between ">
                    <div>
                      <h2 style="color: #ce1212;">${products[v].price}</h2>
                    </div>
                    <div class=" text-center add-to-cart">
                      <button onclick=addToCart(${products[v].id}) id="${products[v].id}"><i class="ri-shopping-cart-2-fill" ></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
}
for (let v = 0; v < products.length; v++) {
  // console.log(v);

  productList1.innerHTML =
    productList1.innerHTML +
    `<div class="col-lg-4 col-md-4 col-sm-6 mt-2  ">
              <div class="product">
                <div>
                  <img src="${products[v].img_url}" style="width: 100%;">
                </div>
                <div>
                  <h2>${products[v].plate_name}</h2>
                  <p>${products[v].decription}</p>

                  <div class="d-flex justify-content-between ">
                    <div>
                      <h2 style="color: #ce1212;">${products[v].price}</h2>
                    </div>
                    <div class=" text-center add-to-cart">
                      <button onclick=addToCart(${products[v].id}) id="${products[v].id}"><i class="ri-shopping-cart-2-fill" ></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
}
for (let v = 0; v < products.length; v++) {
  // console.log(v);

  productList2.innerHTML =
    productList2.innerHTML +
    `<div class="col-lg-4 col-md-4 col-sm-6 mt-2  ">
              <div class="product">
                <div>
                  <img src="${products[v].img_url}" style="width: 100%;">
                </div>
                <div>
                  <h2>${products[v].plate_name}</h2>
                  <p>${products[v].decription}</p>

                  <div class="d-flex justify-content-between ">
                    <div>
                      <h2 style="color: #ce1212;">${products[v].price}</h2>
                    </div>
                    <div class=" text-center add-to-cart">
                      <button onclick=addToCart(${products[v].id}) id="${products[v].id}"><i class="ri-shopping-cart-2-fill" ></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
}
function clear() {
  cart.innerHTML = "";
}
function showcartitems() {
  if (cartArray.length === 0) {
    document.getElementById("empty").style.display = "";
    document.getElementById("cartinfo").style.display = "none";
    total();
  } else {
    document.getElementById("empty").style.display = "none";
    document.getElementById("cartinfo").style.display = "block";

    for (let i = 0; i < cartArray.length; i++) {
      let x = products.filter((item) => item.id === cartArray[i].id);

      if (x) {
        cart.innerHTML =
          cart.innerHTML +
          `<div class="d-flex btmbord ">
        <div style="width :37%;">
          <img src="${x[0].img_url}" style="width :80%;">
        </div>
        <div style="width :62%;">
          <h2>${x[0].plate_name}</h2>
          <p>${x[0].decription}</p>

          <div class="d-flex justify-content-between ">
            <div>
              <h2 style="color: #ce1212;">${x[0].price}</h2>
            </div>
            <div class="d-flex justify-content-between">
                <div class="dec text-center mx-1">
                    <button onclick=counter1('dec',${
                      x[0].id
                    }) class="counters-btn" id="dec-btn"><i class="ri-subtract-line"></i></button>
                </div>
                <div class="display px-1">
               ${displaycounter(x[0].id)}
                </div>
                <div class="inc text-center mx-1 ">
                    <button  onclick=counter1('inc',${
                      x[0].id
                    }) class="counters-btn" id="inc-btn"><i class="ri-add-fill"></i></button>
                </div>
                <div class="inc text-center mx-1 ">
                    <button  onclick=deleteFromCart(${
                      x[0].id
                    }) class="counters-btn"><i class="ri-delete-bin-2-line"></i></button>
                </div>
          </div>
            </div>
          </div>
        </div>
      </div>`;
        total();
      }
    }
  }
}
let cartArray = [];
function cartt1(id, count) {
  this.id = id;
  this.count = count;
}
function cartconent(index) {
  if (cartArray.length === 0) {
    document.getElementById("empty").style.display = "block";
    document.getElementById("cartinfo").style.display = "none";
    cart.innerHTML = "";
    total();
  } else {
    document.getElementById("empty").style.display = "none";
    document.getElementById("cartinfo").style.display = "block";
    cart.innerHTML =
      cart.innerHTML +
      `<div class="d-flex">
        <div style="width :40%;">
          <img src="${products[index].img_url}" style="width :80%;">
        </div>
        <div style="width :50%;">
          <h2>${products[index].plate_name}</h2>
          <p>${products[index].decription}</p>

          <div class="d-flex justify-content-between ">
            <div>
              <h2 style="color: #ce1212;">${products[index].price}</h2>
            </div>
            <div class="d-flex justify-content-between">
                <div class="dec text-center mx-2">
                    <button onclick=counter1('dec',${
                      products[index].id
                    }) class="counters-btn" id="dec-btn"><i class="ri-subtract-line"></i></button>
                </div>
                <div class="display px-1">
                ${displaycounter(products[index].id)}
                </div>
                <div class="inc text-center mx-2 ">
                    <button  onclick=counter1('inc',${
                      products[index].id
                    }) class="counters-btn" id="inc-btn"><i class="ri-add-fill"></i></button>
                </div>
            </div>
            <div class="inc text-center mx-2 ">
                    <button  onclick=deleteFromCart(${
                      products[index].id
                    }) class="counters-btn" id="inc-btn"><i class="ri-add-fill"></i></button>
                </div>
          </div>
        </div>
      </div>`;
    total();
  }
}
function displaycounter(i) {
  console.log(i);

  let x = cartArray.filter((item) => item.id === i);

  console.log(x);

  return x[0].count;
}
function addToCart(index) {
  console.log(index);
  let flage = false;
  if (cartArray.length > 0) {
    for (let i = 0; i < cartArray.length; i++) {
      if (cartArray[i]["id"] === index) {
        Swal.fire({
          text: "This product already exist",
        });

        flage = true;
      }
    }
    if (flage == false) {
      cartArray.push(new cartt1(index, 1));
    }
    flage = false;
  } else {
    cartArray.push(new cartt1(index, 1));
  }
  total();
}
let countitem = 1;
function counter1(method, index) {
  x = cartArray.findIndex((item) => item.id === index);
  y = document.getElementById("dec-btn");
  console.log(x);
  const display = document.getElementById("display");
  if (method == "dec") {
    if (cartArray[x]["count"] > 1) {
      cartArray[x]["count"]--;
      countitem--;
      clear();
      showcartitems();
    } else {
      Swal.fire({
        text: "can't decrease",
        timer: 1500,
      });
    }
  }

  if (method == "inc") {
    if (cartArray[x]["count"] < products[x]["numItems"]) {
      cartArray[x]["count"]++;
      clear();
      showcartitems();
    } else {
      Swal.fire({
        text: `only ${products[x]["numItems"]} is avaliable`,
        timer: 1500,
      });
    }
  }
}

function deleteFromCart(index) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        x = cartArray.findIndex((item) => item.id === index);
        cartArray.splice(x, 1);
        clear();
        total();
        showcartitems();
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "the product has been deleted.",
          icon: "success",
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          icon: "error",
        });
      }
    });
}
let totalcount = document.getElementById("totalcount");
let totalprice = document.getElementById("totalprice");

function total() {
  let sum = 0;
  let sumprice = 0;

  for (let i = 0; i < cartArray.length; i++) {
    sum = sum + cartArray[i].count;
    let x = cartArray[i].id;
    y = products.findIndex((item) => item.id === x);
    sumprice = sumprice + products[y].price * cartArray[i].count;
  }
  displayAllCount.innerText = sum;
  if (sum === 0) {
    totalcount.style.display = "none";
  } else {
    totalcount.textContent = `Total items: ${sum}`;
    totalcount.style.display = "block";
  }
  if (sumprice === 0) {
    totalprice.style.display = "none";
  } else {
    totalprice.textContent = `Total items: ${sumprice.toFixed(2)} $`;
    totalprice.style.display = "block";
  }
}
