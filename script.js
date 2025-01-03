const output = document.getElementById("output");

function createPromise(name) {
  return new Promise((resolve) => {
    const time = Math.floor(Math.random() * 3) + 1;
    setTimeout(() => {
      resolve({ name, time });
    }, time * 1000);
  });
}

const promises = [
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3"),
];

output.innerHTML = `<tr id="loading"><td colspan="2">Loading...</td></tr>`;

const startTime = Date.now();

Promise.all(promises)
  .then((results) => {
    const totalTime = (Date.now() - startTime) / 1000;

    output.innerHTML = "";
    results.forEach((result, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>Promise ${index + 1}</td><td>${result.time}</td>`;
      output.appendChild(row);
    });

    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
    output.appendChild(totalRow);
  })
  .catch((error) => {
    console.error(error);
  });
