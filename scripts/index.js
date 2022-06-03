// Create and assign myServices to an empty array
let myServices = [];
let totalCost = 0;

// Store the button elements into variables
const carBtn = document.getElementById("carBtn");
const lawnBtn = document.getElementById("lawnBtn");
const weedsBtn = document.getElementById("weedsBtn");
const sendBtn = document.getElementById("sendBtn");

// Store the servicesList element into variables
const servicesList = document.getElementById("servicesList");
// Store totalNotes, totalAmount into variables
const totalNotes = document.getElementById("totalNotes");
const totalAmount = document.getElementById("totalAmount");

// Listen for clicks on button
carBtn.addEventListener("click", function () {
  // Charge just once for same service
  if (myServices.includes(this.innerHTML)) return;
  // Add whole button's phrase to myServices array
  myServices.push(this.innerHTML);
  // Call render() function
  render(myServices);
});

// Listen for clicks on button
lawnBtn.addEventListener("click", function () {
  // Charge just once for same service
  if (myServices.includes(this.innerHTML)) return;
  // Add whole button's phrase to myServices array
  myServices.push(this.innerHTML);
  // Call render() function
  render(myServices);
});

// Listen for clicks on button
weedsBtn.addEventListener("click", function () {
  // Charge just once for same service
  if (myServices.includes(this.innerHTML)) return;
  // Add whole button's phrase to myServices array
  myServices.push(this.innerHTML);
  // Call render() function
  render(myServices);
});

// Create a function render() to display services selected
function render(services) {
  // Create a variable, listItems, to hold all the HTML for the list items
  let listItems = "";
  // Assign totalCost to 0
  totalCost = 0;
  //  Add the items in the services array to listItems using a for loop
  for (let i = 0; i < services.length; i++) {
    cost = getCost(services[i]);
    totalCost += cost;
    // Use "template string" with backtick to concatenate directly HTML elements and update them
    listItems += ` <div class="service__chosen">
      <div class="service__package">
          <h3 class="service__title">${services[i]}</h3>
          <p class="btn-remove" id="btn-remove${i}">Remove</p>
      </div>
      <h3 class="service__cost"><span class="currency">$</span>${cost}</h3>
  </div>`;
  }
  // Render totalAmount and serviceList with updated data
  servicesList.innerHTML = listItems;
  totalAmount.innerHTML = `$${totalCost}`;
  // Call update()
  update(services);
}

// Create a function update() which updates style and note's checkout
function update(services) {
  if (services.length > 0) {
    totalNotes.textContent = "We accept cash, credit card, or PayPal";
  } else if (services.length === 0) {
    totalNotes.textContent = "";
  }
  if (totalCost > 0) {
    totalAmount.style.color = "#4a4e74";
  }
  if (totalCost === 0) {
    totalAmount.style.color = "#918e9b";
  }
}

// Create a function getCost() which returns service's cost
function getCost(services) {
  // The substring method will return the part of the string after the specified character ("$")
  // However, we don't want to include the character in the returned string, so we increment its index by 1.
  // Then use parseInt("", 10) to convert a string into an integer of the specified radix: in this case 10
  return parseInt(services.substring(services.indexOf("$") + 1), 10);
}

// Listen for clicks on button
sendBtn.addEventListener("click", function () {
  reset();
});

// Create a function reset() which clears the whole cart
function reset() {
  // Clear totalCost, myServices and the DOM calling render()
  totalCost = 0;
  myServices = [];
  render(myServices);
}
