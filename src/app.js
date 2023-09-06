var fullImg = document.getElementById("imageBox");
let cart = document.getElementsByClassName("addBtn");
let shop = document.getElementById("shop");

function myFunction(smallImg) {
  fullImg.src = smallImg.src;
}

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
let generateShop = () => {
  return (shop.innerHTML = shopItemData
    .map((x) => {
      return `
        <div class="wrap flex">
          <div class="product-image">
            <img src="${x.img}" alt="" />
            <p class="text">${x.name}</p>
            <p class="text">${x.desc}</p>
            <p class="text bold mb">${x.price}</p>
          </div>
        </div>`;
    })
    .join(" "));
};

generateShop();
