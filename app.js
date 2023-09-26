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

const seattle = {
  location: "Seattle",
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiesPerCustomer: 6.3,
  cookieSales: [],
  totalSales: 0,

  randomNumGen: function () {
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
  },

  displayData: function () {
    let salesData = document.getElementById("salesData");
    let h2 = document.createElement("h2");
    h2.textContent = this.location;
    salesData.appendChild(h2);

    let ul = document.createElement("ul");
    salesData.appendChild(ul);

    for (let i = 0; i < this.cookieSales.length; i++) {
      let li = document.createElement("li");
      li.textContent = `${this.cookieSales[i]} cookies`;
      ul.appendChild(li);
    }
  },
};

seattle.randomNumGen();
seattle.displayData();

const tokyo = {
  location: "Tokyo",
  minCustomer: 3,
  maxCustomer: 24,
  avgCookiesPerCustomer: 1.2,
  cookieSales: [],
  totalSales: 0,

  randomNumGen: function () {
    //Generate random number of customers
    for (let i = 0; i < serviceHours.length; i++) {
      let randomCustomer = Math.floor(
        Math.random() * (this.maxCustomer - this.minCustomer + 1) +
          this.minCustomer
      );

      //cant have 0.2 of cookie so round up (or should it go down? idk)
      let cookiesSold = Math.ceil(randomCustomer * this.avgCookiesPerCustomer);

      //
      this.cookieSales[i] = `${serviceHours[i]}: ${cookiesSold}`;

      this.totalSales += cookiesSold;
    }

    this.cookieSales.push(`Total: ${this.totalSales}`);

    return this.cookieSales;
  },

  displayData: function () {
    let salesData = document.getElementById("salesData");
    let h2 = document.createElement("h2");
    h2.textContent = this.location;
    salesData.appendChild(h2);

    let ul = document.createElement("ul");
    salesData.appendChild(ul);

    for (let i = 0; i < this.cookieSales.length; i++) {
      let li = document.createElement("li");
      li.textContent = `${this.cookieSales[i]} cookies`;
      ul.appendChild(li);
    }
  },
};

tokyo.randomNumGen();
tokyo.displayData();

const dubai = {
  location: "Dubai",
  minCustomer: 11,
  maxCustomer: 38,
  avgCookiesPerCustomer: 3.7,
  cookieSales: [],
  totalSales: 0,

  randomNumGen: function () {
    //Generate random number of customers
    for (let i = 0; i < serviceHours.length; i++) {
      let randomCustomer = Math.floor(
        Math.random() * (this.maxCustomer - this.minCustomer + 1) +
          this.minCustomer
      );

      //cant have 0.2 of cookie so round up (or should it go down? idk)
      let cookiesSold = Math.ceil(randomCustomer * this.avgCookiesPerCustomer);

      //
      this.cookieSales[i] = `${serviceHours[i]}: ${cookiesSold}`;

      this.totalSales += cookiesSold;
    }

    this.cookieSales.push(`Total: ${this.totalSales}`);

    return this.cookieSales;
  },

  displayData: function () {
    let salesData = document.getElementById("salesData");
    let h2 = document.createElement("h2");
    h2.textContent = this.location;
    salesData.appendChild(h2);

    let ul = document.createElement("ul");
    salesData.appendChild(ul);

    for (let i = 0; i < this.cookieSales.length; i++) {
      let li = document.createElement("li");
      li.textContent = `${this.cookieSales[i]} cookies`;
      ul.appendChild(li);
    }
  },
};

dubai.randomNumGen();
dubai.displayData();

const paris = {
  location: "Paris",
  minCustomer: 20,
  maxCustomer: 38,
  avgCookiesPerCustomer: 2.3,
  cookieSales: [],
  totalSales: 0,

  randomNumGen: function () {
    //Generate random number of customers
    for (let i = 0; i < serviceHours.length; i++) {
      let randomCustomer = Math.floor(
        Math.random() * (this.maxCustomer - this.minCustomer + 1) +
          this.minCustomer
      );

      //cant have 0.2 of cookie so round up (or should it go down? idk)
      let cookiesSold = Math.ceil(randomCustomer * this.avgCookiesPerCustomer);

      //
      this.cookieSales[i] = `${serviceHours[i]}: ${cookiesSold}`;

      this.totalSales += cookiesSold;
    }

    this.cookieSales.push(`Total: ${this.totalSales}`);

    return this.cookieSales;
  },

  displayData: function () {
    let salesData = document.getElementById("salesData");
    let h2 = document.createElement("h2");
    h2.textContent = this.location;
    salesData.appendChild(h2);

    let ul = document.createElement("ul");
    salesData.appendChild(ul);

    for (let i = 0; i < this.cookieSales.length; i++) {
      let li = document.createElement("li");
      li.textContent = `${this.cookieSales[i]} cookies`;
      ul.appendChild(li);
    }
  },
};

paris.randomNumGen();
paris.displayData();

const lima = {
  location: "Lima",
  minCustomer: 2,
  maxCustomer: 16,
  avgCookiesPerCustomer: 4.6,
  cookieSales: [],
  totalSales: 0,

  randomNumGen: function () {
    //Generate random number of customers
    for (let i = 0; i < serviceHours.length; i++) {
      let randomCustomer = Math.floor(
        Math.random() * (this.maxCustomer - this.minCustomer + 1) +
          this.minCustomer
      );

      //cant have 0.2 of cookie so round up (or should it go down? idk)
      let cookiesSold = Math.ceil(randomCustomer * this.avgCookiesPerCustomer);

      //
      this.cookieSales[i] = `${serviceHours[i]}: ${cookiesSold}`;

      this.totalSales += cookiesSold;
    }

    this.cookieSales.push(`Total: ${this.totalSales}`);

    return this.cookieSales;
  },

  displayData: function () {
    let salesData = document.getElementById("salesData");
    let h2 = document.createElement("h2");
    h2.textContent = this.location;
    salesData.appendChild(h2);

    let ul = document.createElement("ul");
    salesData.appendChild(ul);

    for (let i = 0; i < this.cookieSales.length; i++) {
      let li = document.createElement("li");
      li.textContent = `${this.cookieSales[i]} cookies`;
      ul.appendChild(li);
    }
  },
};

lima.randomNumGen();
lima.displayData();
