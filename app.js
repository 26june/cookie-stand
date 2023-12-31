const serviceHours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

const salesDataArray = [
  {
    storeLocation: "Seattle",
    minCustomer: 23,
    maxCustomer: 65,
    avgCookiesPerCustomer: 6.3,
  },

  {
    storeLocation: "Tokyo",
    minCustomer: 3,
    maxCustomer: 24,
    avgCookiesPerCustomer: 1.2,
  },

  {
    storeLocation: "Dubai",
    minCustomer: 11,
    maxCustomer: 38,
    avgCookiesPerCustomer: 3.7,
  },

  {
    storeLocation: "Paris",
    minCustomer: 20,
    maxCustomer: 38,
    avgCookiesPerCustomer: 2.3,
  },

  {
    storeLocation: "Lima",
    minCustomer: 2,
    maxCustomer: 16,
    avgCookiesPerCustomer: 4.6,
  },
];

function City(loc, minCustomer, maxCustomer, avgCookiesPerCustomer) {
  this.loc = loc;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookieSales = [];
  this.totalSales = 0;
}

City.prototype.randomNumGen = function () {
  for (let i = 0; i < serviceHours.length; i++) {
    let randomCustomer = Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer + 1) +
        this.minCustomer
    );

    //cant have 0.2 of cookie so round up (or should it go down? idk)
    let cookiesSold = Math.ceil(randomCustomer * this.avgCookiesPerCustomer);

    this.cookieSales[i] = cookiesSold;

    this.totalSales += cookiesSold;
  }
};

City.prototype.displayOnPage = function () {
  this.randomNumGen();

  let tr = document.createElement("tr");
  let thBefore = document.createElement("th");
  thBefore.textContent = this.loc;
  tr.appendChild(thBefore);

  this.cookieSales.forEach((element) => {
    let th = document.createElement("td");
    th.textContent = element;
    tr.appendChild(th);
  });

  let thTotal = document.createElement("td");
  thTotal.textContent = this.totalSales;
  tr.appendChild(thTotal);

  documentTable.appendChild(tr);
};

const documentTable = document.getElementById("salesTable");

function createTableHeader() {
  let tr = document.createElement("tr");

  let thBefore = document.createElement("th");
  thBefore.textContent = "Location";
  tr.appendChild(thBefore);

  serviceHours.forEach((element) => {
    let th = document.createElement("th");
    th.textContent = element;
    tr.appendChild(th);
  });

  let thTotal = document.createElement("th");
  thTotal.textContent = "Total";
  tr.appendChild(thTotal);

  documentTable.appendChild(tr);
}

function createTableFooter() {
  let tr = document.createElement("tr");

  let thBefore = document.createElement("th");
  thBefore.textContent = "Totals";
  tr.appendChild(thBefore);

  serviceHours.forEach((element, k) => {
    let th = document.createElement("td");
    th.textContent = totals[k];
    tr.appendChild(th);
  });

  let thTotal = document.createElement("td");
  thTotal.textContent = totals[serviceHours.length];
  tr.appendChild(thTotal);

  documentTable.appendChild(tr);
}

const totals = {};

createTableHeader();

function fillTable(salesDataArrayIndex) {
  const { storeLocation, minCustomer, maxCustomer, avgCookiesPerCustomer } =
    salesDataArray[salesDataArrayIndex];

  const newCity = new City(
    storeLocation,
    minCustomer,
    maxCustomer,
    avgCookiesPerCustomer
  );

  //calculates total for each hour - check for undefined first
  newCity.displayOnPage();
  newCity.cookieSales.forEach((e, j) => {
    totals[j] === undefined ? (totals[j] = e) : (totals[j] += e);
  });

  //calculates grand total - check for undefined first
  totals[newCity.cookieSales.length] === undefined
    ? (totals[newCity.cookieSales.length] = newCity.totalSales)
    : (totals[newCity.cookieSales.length] += newCity.totalSales);
}

for (let i = 0; i < salesDataArray.length; i++) {
  fillTable(i);
}
createTableFooter();

const newStoreForm = document.getElementById("newStoreForm");

newStoreForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let { storeLocation, minCust, maxCust, avgCookie } = e.target;
  console.log(!minCust.value);

  if (
    storeLocation.value &&
    minCust.value &&
    maxCust.value &&
    avgCookie.value
  ) {
    let newStoreObj = {
      storeLocation: storeLocation.value,
      minCustomer: minCust.value,
      maxCustomer: maxCust.value,
      avgCookiesPerCustomer: avgCookie.value,
    };

    salesDataArray.push(newStoreObj);
    documentTable.deleteRow(-1);
    fillTable(salesDataArray.length - 1);
    createTableFooter();
  } else {
    alert("!!");
  }
});

//Test for laptop push access
