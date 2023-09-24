let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  // console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  // console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

// overlay start here
// script.js
// Function to show the loader overlay
function showLoader() {
  document.getElementById("loader-overlay").style.display = "block";
}

// Function to hide the loader overlay
function hideLoader() {
  document.getElementById("loader-overlay").style.display = "none";
}

// Simulate an asynchronous task (e.g., setTimeout)
function simulateAsyncTask() {
  showLoader();

  setTimeout(function () {
    // Simulate task completion
    hideLoader();
  }, 3000); // Replace this with your actual asynchronous task
}

// Example usage: Call simulateAsyncTask when you want to show the loader
simulateAsyncTask();

// overlay ends here
