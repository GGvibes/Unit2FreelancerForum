//example freelancers
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "Gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
  { name: "Prof. Prism", price: 81, occupation: "Teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
  { name: "Prof. Spark", price: 76, occupation: "Programmer" },
  { name: "Dr. Wire", price: 47, occupation: "Teacher" },
  { name: "Prof. Goose", price: 72, occupation: "Driver" },
];

//possible names
const names = [
  "Aria",
  "Elijah",
  "Olivia",
  "Jackson",
  "Sophia",
  "Liam",
  "Emma",
  "Mason",
  "Isabella",
  "Lucas",
];

//possible occupations
const occupations = [
  "Software Developer",
  "Teacher",
  "Nurse",
  "Mechanical Engineer",
  "Graphic Designer",
  "Chef",
  "Marketing Analyst",
  "Electrician",
  "Physician",
  "Data Scientist",
];

function init() {
  const h1 = document.createElement("h1");
  h1.textContent = "Freelancer Forum";
  root.appendChild(h1);

  const h2 = document.createElement("h2");
  h2.textContent = "The average starting price is $30";
  root.appendChild(h2);

  const availableH1 = document.createElement("h1");
  availableH1.textContent = "Available Freelancers";
  root.appendChild(availableH1);

  let newPrice = document.querySelector("#newPrice");
  newPrice = calAvgPrice(freelancers);
  newPrice.textContent = "$(newPrice)";

}

/**
 * 👉 STEP 1: Grab the div with the id of "root"
 */
const root = document.getElementById("root");

function freeRender() {
    const table = document.createElement("table");
    root.appendChild(table);
  
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
  
    //this is name, occupation, price
    const nameColumn1 = document.createElement("th");
    nameColumn1.textContent = "Name";
    tbody.appendChild(nameColumn1);
  
    const jobColumn2 = document.createElement("th");
    jobColumn2.textContent = "Occupation";
    tbody.appendChild(jobColumn2);
  
    const priceColumn3 = document.createElement("th");
    priceColumn3.textContent = "Starting Price";
    tbody.appendChild(priceColumn3);
  
  const freelancer = document.createElement("td");

  freelancers.forEach((person) => {
    const freeRow = document.createElement("tr");
    tbody.appendChild(freeRow);

    const nameCell = document.createElement("td");
    nameCell.textContent = person.name;
    freeRow.appendChild(nameCell);

    const jobCell = document.createElement("td");
    jobCell.textContent = person.occupation;
    freeRow.appendChild(jobCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = person.price;
    freeRow.appendChild(priceCell);

    tbody.appendChild(freeRow);
  });
}
/**
 * 👉 STEP 6:
 *    Create a function to add a new Freelancer to the Freelancers array
 */
function addNewFreelancer() {
  const addPrice = Math.floor(Math.random() * 100);

  const addName = names[Math.floor(Math.random() * names.length)];

  const addJob = occupations[Math.floor(Math.random() * occupations.length)];

  freelancers.push({ name: addName, occupation: addJob, price: addPrice });

  freeRender();
}
/**
 * 👉 STEP 7:
 *    Add an interval to add a new Freelancer every second
 */
let newFreelancer = setInterval(addNewFreelancer, 1000);
setTimeout(() => {
  clearInterval(newFreelancer);
}, 5000);

//call init function
init();

