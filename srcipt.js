const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
const time = document.getElementById("year");
const select = document.getElementById("selectType");

const calculate = document.getElementById("btn");
let n;

select.addEventListener("change", () => {
  if (select.value === "daily") {
    n = 365;
  } else if (select.value === "Monthly") {
    n = 12;
  } else if (select.value === "Quetraly") {
    n = 4;
  } else if (select.value === "Weakly") {
    n = 52;
  } else if (select.value === "Semi-yearly") {
    n = 2;
  } else {
    n = 1;
  }
  console.log("value of n", n);
});

calculate.addEventListener("click", () => {
  const Principal = amount.value;
  // convert rate into percentage
  const totalRate = rate.value / 100;

  const totalTime = time.value;

  let base = 1 + totalRate / n;

  let power = n * totalTime;
  let CompoundAmount = Math.floor(Principal * Math.pow(base, power));

  let CompoundInterest = CompoundAmount - Principal;

  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.innerHTML = `Compound Interest = ${CompoundInterest}`;
  div.appendChild(h1);
  document.getElementById("solution").innerHTML = "";
  document.getElementById("solution").appendChild(div);
});
