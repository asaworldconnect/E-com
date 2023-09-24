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
    desc: "Shape: Oil house",
    price: "Rs.25,000.00",
    img: "./Images/red.png",
    reviews: [
      {
        reviewerName: "Sulaimon Abiodun",
        review: "It's a good product",
        rating: 4,
      },
      {
        reviewerName: "Sulaimon Abiodun",
        review: "It's a good product",
        rating: 4,
      },
    ],
  },
  {
    id: 2,
    name: "Shell Engine Oil",
    desc: "Shape: Oil house",
    price: "Rs.25,000.00",
    img: "./Images/ashe.png",
  },
  {
    id: 3,
    name: "Shell Engine Oil",
    desc: "Shape: Oil house",
    price: "Rs.25,000.00",
    img: "./Images/red.png",
  },
  {
    id: 4,
    name: "Shell Engine Oil",
    desc: "Shape: Oil house",
    price: "Rs.25,000.00",
    img: "./Images/ashe.png",
  },
  {
    id: 5,
    name: "Shell Engine Oil",
    desc: "Shape: Oil house",
    price: "Rs.25,000.00",
    img: "./Images/red.png",
  },
  {
    id: 6,
    name: "Shell Engine Oil",
    desc: "Shape: Oil house",
    price: "Rs.25,000.00",
    img: "./Images/ashe.png",
  },
  {
    id: 7,
    name: "Shell Engine Oil",
    desc: "Shape: Oil house",
    price: "Rs.25,000.00",
    img: "./Images/red.png",
  },
  {
    id: 8,
    name: "Shell Engine Oil",
    desc: "Shape: Oil house",
    price: "Rs.25,000.00",
    img: "./Images/ashe.png",
  },
  {
    id: 9,
    name: "Tire",
    desc: "Shape:Tire house",
    price: "Rs.25,000.00",
    img: "./Images/Tire1.png",
  },
  {
    id: 10,
    name: "Tire",
    desc: "Shape:Tire house",
    price: "Rs.25,000.00",
    img: "./Images/tire2.png",
  },
  {
    id: 11,
    name: "Tire",
    desc: "Shape: Oil house",
    price: "Rs.25,000.00",
    img: "./Images/Tire4.png",
  },
  {
    id: 12,
    name: "Tire",
    desc: "Shape:Tire house",
    price: "Rs.25,000.00",
    img: "./Images/Tire1.png",
  },
  {
    id: 13,
    name: "Filter",
    desc: "Shape:Filter house",
    price: "Rs.25,000.00",
    img: "./Images/filter1.png",
  },
  {
    id: 14,
    name: "Filter",
    desc: "Shape: Filter house",
    price: "Rs.25,000.00",
    img: "./Images/filter2.png",
  },
  {
    id: 15,
    name: "Filter",
    desc: "Shape: filter house",
    price: "Rs.25,000.00",
    img: "./Images/filter1.png",
  },
  {
    id: 16,
    name: "Filter",
    desc: "Shape: filter house",
    price: "Rs.25,000.00",
    img: "./Images/filter2.png",
  },
];

function saveToLocalStorage(data) {
  return localStorage.setItem("productDetail", JSON.stringify(data));
}

// const viewProductBtn = document.getElementById("viewProduct");

// console.log({ viewProductBtn });

let generateShop = () => {
  const shop = document.getElementById("shop");

  if (!shop) {
    console.error("The 'shop' element does not exist in the document.");
    return;
  }

  if (!Array.isArray(shopItemData) || shopItemData.length === 0) {
    console.warn("No data to display in the shop.");
    return;
  }

  shop.innerHTML = shopItemData
    .map((x, index) => {
      let { id, name, price, desc, img } = x;
      return `
        <div class="product-wrap">
          <div class="product-image">
            <img src="${img}" alt="${name}" />
            <p class="text">${name}</p>
            <p class="text">${desc}</p>
            <p class="text bold mb">${price}</p>
          </div>
          <button class="view-product" id="viewProduct-${
            index + 1
          }">View</button>
        </div>`;
    })
    .join(" ");
};

generateShop();
