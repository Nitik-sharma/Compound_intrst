const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
const time = document.getElementById("year");
console.log(time);

const calculate = document.getElementById("btn");

calculate.addEventListener("click", () => {
  const Principal = amount.value;
  // convert rate into percentage
  const totalRate = rate.value / 100;

  const totalTime = time.value;
  const n = 1;

  let base = 1 + totalRate / n;

  let power = n * totalTime;
  let CompoundAmount = Math.floor(Principal * Math.pow(base, power));

  let CompoundIntrest = CompoundAmount - Principal;

  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.innerHTML = `CompoundIntrest=${CompoundIntrest}`;
  div.appendChild(h1);
  document.getElementById("solution").appendChild(div);
});
