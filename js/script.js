let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

let orderNowBtn = document.getElementById("orderNowButton");
orderNowBtn.addEventListener("click", (event) => {
  console.log("clicked the order now button");
  const targetElement = document.getElementById("popular");
  targetElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 60) {
    document.querySelector("#scroll-top").classList.add("active");
  } else {
    document.querySelector("#scroll-top").classList.remove("active");
  }
};

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut();

const productContainer = document.querySelector(".product-container"); // Replace with your container class

const addToCartBtns = document.querySelectorAll(".addToCartButton"); // Replace with your container class

addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    console.log("first");
    const productBox = btn.closest(".product-container");
    const price =
      parseFloat(productBox.dataset.price) ||
      parseFloat(productBox.querySelector("#item-price").textContent.slice(1));
    const title =
      productBox.dataset.title || productBox.querySelector("h3").textContent;
    addToCart(price, title);
  })
);

const cartList = document.getElementById("cartList");

function addToCart(price, title) {
  // Create a new cart item element
  const cartItem = document.createElement("div");
  cartItem.classList.add(
    "flex",
    "items-center",
    "p-4",
    "my-4",
    "border-b-4",
    "border-gray-200"
  );

  // Create elements for title, price, and potential removal (optional)
  const itemTitle = document.createElement("h3");
  itemTitle.classList.add(
    "text-5xl",
    "font-bold",
    "flex-grow",
    "text-underline"
  );
  itemTitle.textContent = title;

  const itemPrice = document.createElement("span");
  itemPrice.classList.add("text-gray-500", "mx-2", "text-2xl");
  itemPrice.textContent = `$${price.toFixed(2)}`;

  // Optional removal button with Tailwind classes
  const removeButton = document.createElement("button");
  removeButton.classList.add(
    // "text-white",
    // "px-6",
    // "py-6",
    // "transition",
    // "hover:scale-105",
    // "bg-red-500",
    // "hover:text-red-700",
    // "ml-auto",
    // "focus:outline-none"
    "btn"
  );
  removeButton.textContent = "Remove";

  // Add event listener for removal (optional)
  removeButton.addEventListener("click", () => {
    cartItem.remove(); // Remove the cart item from the list
    // Implement logic to remove the item from your cart data structure
  });

  // Append elements to the cart item
  cartItem.appendChild(itemTitle);
  cartItem.appendChild(itemPrice);
  cartItem.appendChild(removeButton); // Add optional removal button

  //
  cartList.appendChild(cartItem);
}
