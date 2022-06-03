let myServices = [];
const carBtn = document.getElementById("carBtn");
const lawnBtn = document.getElementById("lawnBtn");
const weedsBtn = document.getElementById("weedsBtn");
const totalNotes = document.getElementById("totalNotes");
const totalAmount = document.getElementById("totalAmount");
const servicesList = document.getElementById("servicesList");

// Listen for clicks on inputBtn

carBtn.addEventListener("click", function () {
  if (myServices.includes(this.innerHTML)) return;
  myServices.push(this.innerHTML);
  console.log(myServices);
  render(myServices);
});

lawnBtn.addEventListener("click", function () {
  if (myServices.includes(this.innerHTML)) return;
  myServices.push(this.innerHTML);
  console.log(myServices);
  render(myServices);
});

weedsBtn.addEventListener("click", function () {
  if (myServices.includes(this.innerHTML)) return;
  myServices.push(this.innerHTML);
  console.log(myServices);
  render(myServices);
});

function update(myServices) {
  myServices.push(this.innerHTML);
  console.log(myServices);
  render(myServices);
}

// Push the value from the inputEl into the myServices array
//myServices.push(carBtn.value);
// Clear out the input field
//carBtn.value = "";
//console.log(myServices);
// Save the myServices array to localStorage after transformed it into a string
//localStorage.setItem("myServices", JSON.stringify(myServices));
// Call render() with myServices as argument
//render(myServices);

function render(services) {
  let listItems = "";
  let cost = 0;
  let totalCost = 0;
  for (let i = 0; i < services.length; i++) {
    cost = getCost(services[i]);
    totalCost += cost;
    listItems += ` <div class="service__chosen">
      <div class="service__package">
          <h3 class="service__title">${services[i]}</h3>
          <p class="btn-remove" id="btn-remove${i}">Remove</p>
      </div>
      <h3 class="service__cost"><span class="currency">$</span>${cost}</h3>
  </div>`;
  }
  servicesList.innerHTML = listItems;
  totalAmount.innerHTML = "$" + totalCost;

  if (services.length > 0) {
    totalNotes.textContent = "We accept cash, credit card, or PayPal";
  }
  if (totalCost > 0) {
    totalAmount.style.color = "#4a4e74";
  }
}

function getCost(services) {
  return parseInt(services.substring(services.indexOf("$") + 1), 10);
}

//function getTotalCost(services){

//}

console.log(myServices);
