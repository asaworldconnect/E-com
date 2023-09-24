// Create the main container div with class "display mr-2"
const mainContainer = document.createElement("div");
mainContainer.classList.add("display", "mr-2");

// Create the "background flex-2" div
const backgroundDiv = document.createElement("div");
backgroundDiv.classList.add("background", "flex-2");

// Create the "product-small-img mr-1" div
const productSmallImgDiv = document.createElement("div");
productSmallImgDiv.classList.add("product-small-img", "mr-1");

// Create an array of image sources
const imageSources = [
  "./Images/small-tire-1.png",
  "./Images/small-tire-2.png",
  "./Images/small-tire-3.png",
  "./Images/small-tire-4.png",
];

// Loop through the image sources and create the "img-small bg mb-5" divs with images
imageSources.forEach((src) => {
  const imgSmallDiv = document.createElement("div");
  imgSmallDiv.classList.add("img-small", "bg", "mb-5");

  const img = document.createElement("img");
  img.src = src;
  img.classList.add("img-size");
  img.alt = "";
  img.addEventListener("click", function () {
    myFunction(this);
  });

  imgSmallDiv.appendChild(img);
  productSmallImgDiv.appendChild(imgSmallDiv);
});

// Create the "tire-container" div
const tireContainerDiv = document.createElement("div");
tireContainerDiv.classList.add("tire-container");

// Create the "imageBox" image
const imageBoxImg = document.createElement("img");
imageBoxImg.src = "./Images/big.png";
imageBoxImg.id = "imageBox";
imageBoxImg.alt = "";

// Append all elements together in the hierarchy
tireContainerDiv.appendChild(imageBoxImg);
backgroundDiv.appendChild(productSmallImgDiv);
backgroundDiv.appendChild(tireContainerDiv);
mainContainer.appendChild(backgroundDiv);

// Create the "background-1" div
const background1Div = document.createElement("div");
background1Div.classList.add("background-1");
mainContainer.appendChild(background1Div);

// Create the "details" div with its contents
const detailsDiv = document.createElement("div");
detailsDiv.classList.add("details");

// Create the "h3" element
const h3Element = document.createElement("h3");
h3Element.textContent = "MIRAGE MR-AT172 285/65";

// Create the "p" element for price
const priceP = document.createElement("p");
priceP.classList.add("md-text-clear", "mb-6");
priceP.textContent = "Rs. 50,000.00";

// Create the "flex" div for shop and customer reviews
const flexDiv = document.createElement("div");
flexDiv.classList.add("flex", "mb-7");

// Create the "p" element for shop
const shopP = document.createElement("p");
shopP.classList.add("sm-text-3");
shopP.textContent = "Shope: Tire House";

// Create the "div" element with class "line"
const lineDiv = document.createElement("div");
lineDiv.classList.add("line");

// Create the "p" element for customer reviews
const customerReviewsP = document.createElement("p");
customerReviewsP.classList.add("sm-text-2");
customerReviewsP.textContent = "5 Customer Review";

// Create the "p" element for the product description
const descriptionP = document.createElement("p");
descriptionP.classList.add("text-align");
descriptionP.textContent =
  "The MIRAGE MR-AT172 285/65 R17 is a tyre developed with an advanced ...";

// Create the "div" element for size options
const sizeDiv = document.createElement("div");
sizeDiv.classList.add("mb-6");

// Create size elements and add them to the sizeDiv
const sizeOptions = ["17", "21", "24"];
sizeOptions.forEach((size) => {
  const sizeElement = document.createElement("div");
  sizeElement.classList.add("size");
  sizeElement.textContent = size;
  sizeDiv.appendChild(sizeElement);
});

// Create the "p" element for color
const colorP = document.createElement("p");
colorP.classList.add("mb-7");
colorP.textContent = "color";

// Create the "div" element with class "black"
const blackDiv = document.createElement("div");
blackDiv.classList.add("black", "mb-8");

// Create the "div" element with class "pluse flex" for quantity and "Add To Cart" button
const pluseFlexDiv = document.createElement("div");
pluseFlexDiv.classList.add("pluse", "flex");

// Create the "div" element with class "add" for quantity control
const addDiv = document.createElement("div");
addDiv.classList.add("add");

// Create decrement and increment buttons
const decrementButton = document.createElement("i");
decrementButton.classList.add("bi", "bi-dash", "icon1");
decrementButton.addEventListener("click", function () {
  decrement(id); // You should define the 'decrement' function
});

const quantityDiv = document.createElement("div");
quantityDiv.textContent = "1";

const incrementButton = document.createElement("i");
incrementButton.classList.add("bi", "bi-plus", "icon2");
incrementButton.addEventListener("click", function () {
  increment(id); // You should define the 'increment' function
});

addDiv.appendChild(decrementButton);
addDiv.appendChild(quantityDiv);
addDiv.appendChild(incrementButton);

// Create the "button" element for "Add To Cart"
const addToCartButton = document.createElement("button");
addToCartButton.classList.add("addBtn");
addToCartButton.textContent = "Add To Cart";

pluseFlexDiv.appendChild(addDiv);
pluseFlexDiv.appendChild(addToCartButton);

// Create the "div" element with class "bottom-line-2"
const bottomLine2Div = document.createElement("div");
bottomLine2Div.classList.add("bottom-line-2");

// Create the details section with SKU, Category, Tags, and Share
const productDetailsDiv = document.createElement("div");

// Create SKU
const skuDiv = document.createElement("div");
skuDiv.classList.add("flex", "py");
const skuP = document.createElement("p");
skuP.textContent = "SKU";
const skuValue = document.createElement("span");
skuValue.classList.add("value");
skuValue.textContent = ": SS001";
skuDiv.appendChild(skuP);
skuDiv.appendChild(skuValue);

// Create Category
const categoryDiv = document.createElement("div");
categoryDiv.classList.add("flex", "py");
const categoryP = document.createElement("p");
categoryP.textContent = "Category";
const categoryValue = document.createElement("span");
categoryValue.classList.add("value");
categoryValue.textContent = ": Tire";
categoryDiv.appendChild(categoryP);
categoryDiv.appendChild(categoryValue);

// Create Tags
const tagsDiv = document.createElement("div");
tagsDiv.classList.add("flex", "py");
const tagsP = document.createElement("p");
tagsP.textContent = "Tags";
const tagsValue = document.createElement("span");
tagsValue.classList.add("value");
tagsValue.textContent = ": Tire, rims, Shop";
tagsDiv.appendChild(tagsP);
tagsDiv.appendChild(tagsValue);

// Create Share
const shareDiv = document.createElement("div");
shareDiv.classList.add("flex", "py");
const shareP = document.createElement("p");
shareP.textContent = "Share";
const shareValue = document.createElement("span");
shareValue.classList.add("value");
shareValue.textContent = ":";
const shareIconsDiv = document.createElement("div");
shareIconsDiv.classList.add("icons");

// Create share icons
const facebookImg = document.createElement("img");
facebookImg.src = "./Images/facebook-1.png";
facebookImg.alt = "";

const linkedInImg = document.createElement("img");
linkedInImg.src = "./Images/lind.png";
linkedInImg.alt = "";

const twitterImg = document.createElement("img");
twitterImg.src = "./Images/twit.png";
twitterImg.alt = "";

shareIconsDiv.appendChild(facebookImg);
shareIconsDiv.appendChild(linkedInImg);
shareIconsDiv.appendChild(twitterImg);

shareDiv.appendChild(shareP);
shareDiv.appendChild(shareValue);
shareDiv.appendChild(shareIconsDiv);

// Append the SKU, Category, Tags, and Share elements to the product details div
productDetailsDiv.appendChild(skuDiv);
productDetailsDiv.appendChild(categoryDiv);
productDetailsDiv.appendChild(tagsDiv);
productDetailsDiv.appendChild(shareDiv);

// Append all elements to the "details" div
detailsDiv.appendChild(h3Element);
detailsDiv.appendChild(priceP);
detailsDiv.appendChild(flexDiv);
detailsDiv.appendChild(descriptionP);
detailsDiv.appendChild(sizeDiv);
detailsDiv.appendChild(colorP);
detailsDiv.appendChild(blackDiv);
detailsDiv.appendChild(pluseFlexDiv);
detailsDiv.appendChild(bottomLine2Div);
detailsDiv.appendChild(productDetailsDiv);

// Append the "details" div to the main container
mainContainer.appendChild(detailsDiv);

// Create the "bottom-line-1" div
const bottomLine1Div = document.createElement("div");
bottomLine1Div.classList.add("bottom-line-1");

// Create the "section" with id "show"
const showSection = document.createElement("section");
showSection.id = "show";
showSection.classList.add("section-ml");

// Create the "show-flex" div
const showFlexDiv = document.createElement("div");
showFlexDiv.classList.add("show-flex");

// Create the "h4" elements for Description, Additional Information, and Reviews
const descriptionH4 = document.createElement("h4");
descriptionH4.classList.add("color-pattern-1");
descriptionH4.textContent = "Description";

const additionalInfoH4 = document.createElement("h4");
additionalInfoH4.classList.add("color-pattern-2");
additionalInfoH4.textContent = "Additional Information";

const reviewsH4 = document.createElement("h4");
reviewsH4.classList.add("color-pattern-3");
reviewsH4.textContent = "Reviews [5]";

// Create the "p" element for the product description in the "show" section
const showDescriptionP = document.createElement("p");
showDescriptionP.textContent =
  "The Mirage AT MR-172 265/65 R17 is a multipurpose all-terrain light truck tyre. It has been engineered to deliver high mileage. Mirage MR AT-172 Performs best in on road and off road driving conditions. The Mirage AT MR-172 265/65 R17 has an aggressive tread design. Its aggressive tread delivers excellent wet and dry traction. It also offers even tread wear hence longer tread life is achieved.stable tread block design provides better traction and improves cornering and braking in all weather conditions. Mirage AT MR-172 265/65 R17 Lateral sires also help in improving mud snow and wet qualities.";

// Create the "div" element with class "tire-display" for displaying tire images
const tireDisplayDiv = document.createElement("div");
tireDisplayDiv.classList.add("tire-display");

// Create tire image elements and add them to the "tire-display" div
const tireImageSources = [
  "./Images/Cloud sofa three seater + ottoman_2 1.png",
  "./Images/Cloud sofa three seater + ottoman_1 1.png",
];
tireImageSources.forEach((src) => {
  const tireImageDiv = document.createElement("div");
  tireImageDiv.classList.add("cloud-bg");

  const tireImage = document.createElement("img");
  tireImage.src = src;
  tireImage.alt = "tire";

  tireImageDiv.appendChild(tireImage);
  tireDisplayDiv.appendChild(tireImageDiv);
});

// Append all elements together in the "show" section
showFlexDiv.appendChild(descriptionH4);
showFlexDiv.appendChild(additionalInfoH4);
showFlexDiv.appendChild(reviewsH4);
showSection.appendChild(showFlexDiv);
showSection.appendChild(showDescriptionP);
showSection.appendChild(tireDisplayDiv);

// Append the "show" section and "bottom-line-1" to the document body
document.body.appendChild(mainContainer);
document.body.appendChild(bottomLine1Div);
document.body.appendChild(showSection);
