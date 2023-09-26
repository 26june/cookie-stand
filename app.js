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
    location: "Seattle",
    minCustomer: 23,
    maxCustomer: 65,
    avgCookiesPerCustomer: 6.3,
  },

  {
    location: "Tokyo",
    minCustomer: 3,
    maxCustomer: 24,
    avgCookiesPerCustomer: 1.2,
  },

  {
    location: "Dubai",
    minCustomer: 11,
    maxCustomer: 38,
    avgCookiesPerCustomer: 3.7,
  },

  {
    location: "Paris",
    minCustomer: 20,
    maxCustomer: 38,
    avgCookiesPerCustomer: 2.3,
  },

  {
    location: "Lima",
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

    this.cookieSales[i] = `${serviceHours[i]}: ${cookiesSold}`;

    this.totalSales += cookiesSold;
  }

  this.cookieSales.push(`Total: ${this.totalSales}`);
};

City.prototype.displayOnPage = function () {
  this.randomNumGen();
  let salesData = document.getElementById("salesData");
  let h2 = document.createElement("h2");
  h2.textContent = this.loc;
  salesData.appendChild(h2);

  let ul = document.createElement("ul");
  salesData.appendChild(ul);

  for (let i = 0; i < this.cookieSales.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${this.cookieSales[i]} cookies`;
    ul.appendChild(li);
  }
};

for (let i = 0; i < salesDataArray.length; i++) {
  const { location, minCustomer, maxCustomer, avgCookiesPerCustomer } =
    salesDataArray[i];

  const city = new City(
    location,
    minCustomer,
    maxCustomer,
    avgCookiesPerCustomer
  ).displayOnPage();
}
