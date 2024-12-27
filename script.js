//your JS code here. If required.
function createPromise(id) {
  const timeTaken = Math.random() * 2 + 1;
  return new Promise((resolve) => 
  setTimeout(() => resolve({ id, timeTaken: timeTaken.toFixed(3) }), timeTaken * 1000); });
}

const output = document.getElementById("output");

const loadingRow = document.createElement("tr");
loadingRow.innerHTML = `<td colspan="2" class="text-center">Loading...</td>`;
output.appendChild(loadingRow);

const promises = [createPromise(1), createPromise(2), createPromise(3)];

const startTime = performance.now();

Promise.all(promises).then((results) => {
  output.innerHTML = "";

  results.forEach((result) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>Promise ${result.id}</td>
      <td>${result.timeTaken} s</td>`;
    output.appendChild(row);
  });

  const endTime = performance.now();
  const totalTimeTaken = ((endTime - startTime) / 1000).toFixed(3);

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${totalTimeTaken} s</td> `;
  output.appendChild(totalRow);
});
