var fullImg = document.getElementById("imageBox");
let cart = document.getElementsByClassName("addBtn");
let product = document.getElementsById("productList");

function myFunction(smallImg) {
  fullImg.src = smallImg.src;
}

// Get the element with the class you want to modify
// const imgElement = document.querySelector("img");
// const imgWrapper = document.getElementsByClassName("tire-container");

// for (i = 0; i < cart.length; i++) {
//   cart[i].addEventListener("click", () => {
//     cartUpdate();
//   });
// }

// function cartUpdate() {
//   localStorage.setItem("cartUpdate", 1);
// }

let shopItemData = [
  {
    id: 1,
    name: "Shell Engine Oil",
    desc: "Shope: Oil house",
    price: "Rs.25,000.00",
    img: "./Images/red.png",
  },
  {
    id: 2,
    name: "Shell Engine Oil",
    desc: "Shope: Oil house",
    price: "Rs.25,000.00",
    img: "./Images/ashe.png",
  },
  {
    id: 3,
    name: "Shell Engine Oil",
    desc: "Shope: Oil house",
    price: "Rs.25,000.00",
    img: "./Images/red.png",
  },
  {
    id: 4,
    name: "Shell Engine Oil",
    desc: "Shope: Oil house",
    price: "Rs.25,000.00",
    img: "./Images/ashe.png",
  },
  {
    id: 5,
    name: "Shell Engine Oil",
    desc: "Shope: Oil house",
    price: "Rs.25,000.00",
    img: "./Images/red.png",
  },
  {
    id: 6,
    name: "Shell Engine Oil",
    desc: "Shope: Oil house",
    price: "Rs.25,000.00",
    img: "./Images/ashe.png",
  },
  {
    id: 7,
    name: "Shell Engine Oil",
    desc: "Shope: Oil house",
    price: "Rs.25,000.00",
    img: "./Images/red.png",
  },
  {
    id: 8,
    name: "Shell Engine Oil",
    desc: "Shope: Oil house",
    price: "Rs.25,000.00",
    img: "./Images/ashe.png",
  },
  {
    id: 9,
    name: "Tire",
    desc: "Shope:Tire house",
    price: "Rs.25,000.00",
    img: "./Images/Tire1.png",
  },
  {
    id: 10,
    name: "Tire",
    desc: "Shope:Tire house",
    price: "Rs.25,000.00",
    img: "./Images/tire2.png",
  },
  {
    id: 11,
    name: "Tire",
    desc: "Shope: Oil house",
    price: "Rs.25,000.00",
    img: "./Images/Tire4.png",
  },
  {
    id: 12,
    name: "Tire",
    desc: "Shope:Tire house",
    price: "Rs.25,000.00",
    img: "./Images/Tire1.png",
  },
  {
    id: 13,
    name: "Filter",
    desc: "Shope:Filter house",
    price: "Rs.25,000.00",
    img: "./Images/filter1.png",
  },
  {
    id: 14,
    name: "Filter",
    desc: "Shope: Filter house",
    price: "Rs.25,000.00",
    img: "./Images/filter2.png",
  },
  {
    id: 15,
    name: "Filter",
    desc: "Shope: filter house",
    price: "Rs.25,000.00",
    img: "./Images/filter1.png",
  },
  {
    id: 16,
    name: "Filter",
    desc: "Shope: filter house",
    price: "Rs.25,000.00",
    img: "./Images/filter2.png",
  },
];

let generateProduct = () => {
  return (product.innerHTML = shopItemData
    .map((x) => {
      return `
         <div class="wrap flex">
    <div class="product-image">
          <img src=${x.img} alt="" />
          <p class="text">${x.name}</p>
          <p class="text">${x.desc}</p>
          <p class="text bold mb">${x.price}</p>
          <a class="add-cart cart1" href="">Add Cart</a>
          </div>
        </div>
        

    `;
    })
    .join(" "));
};

generateShop();
