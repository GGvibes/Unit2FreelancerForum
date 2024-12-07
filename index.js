//example freelancers
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "Gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
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

const maxLength = 25;

function addFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const price = Math.floor(Math.random() * 100);

  freelancers.push({ name, price, occupation });
}

function render() {
  const tableBody = document.querySelector("#table-body");
  const avgPrice = document.querySelector("#avgPrice")

  const rowElements = freelancers.map((freelancer) => {
    const newRow = document.createElement("tr");
    const { name, price, occupation } = freelancer;

    const nameDetail = document.createElement("td");
    nameDetail.innerText = name;

    const occupationDetail = document.createElement("td");
    occupationDetail.innerText = occupation;

    const priceDetail = document.createElement("td");
    priceDetail.innerText = `$${price}`;

    newRow.append(nameDetail, occupationDetail, priceDetail);

    return newRow;
  });
  tableBody.replaceChildren(...rowElements);

  const newAverage = calAvgPrice();
  avgPrice.innerText = `$${newAverage}`;
}
//Cal Average Price
function calAvgPrice() {
  const total = freelancers.reduce(
    (subtotal, current) => subtotal + current.price,
    0
  );
  return Math.round(total / freelancers.length);
}

/**
 * 👉 STEP 7:
 *    Add an interval to add a new Freelancer every second
 */
const addFreelancerIntervalId = setInterval(() => {
  addFreelancer();
  render();

  // Clear setInterval when freelancers length is equal to max length
  if (freelancers.length >= maxLength) {
    clearInterval(addFreelancerIntervalId);
  }
}, 1000);

//call init function
render();
